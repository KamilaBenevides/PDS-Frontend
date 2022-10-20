import { UserInputError, ApolloError } from "apollo-server";
import { DateTime } from "luxon";
import { Args, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { AlertaAluno } from "../../prisma/generated/type-graphql";
import { Context } from "../utils/context";
import { SendAlertaAluno, SendManyAlertaAluno } from "./customArgs";
import { sendMail } from "../utils/mail";

@Resolver()
export class sendAlertaAlunoResolver {
  
  @Mutation(() => AlertaAluno)
  async sendAlertaAluno(
    @Ctx() { prisma }: Context,
    @Args() { alertaAlunoId, messageEmail }: SendAlertaAluno
  ) {
    console.log(messageEmail)
    const alertaAluno = await prisma.alertaAluno.findUnique({
      where: { id: alertaAlunoId },
      include: { aluno: { include: { orientador: true, coorientador: true } }, alerta: true }
    });

    if (!alertaAluno) {
      throw new UserInputError("Não existe um alerta aluno com esse ID.");
    }

    try {
      await sendMail(alertaAluno);
    } catch (err) {
      console.log(err);
      throw new ApolloError("Erro ao enviar email");
    }

    const today = new Date();
    
    let updatedAlertaAluno: AlertaAluno = await prisma.alertaAluno.update({
      where: { id: alertaAlunoId },
      data: {
        enviado: true,
        dataEnvioEmail: today,
      },
    });

    return updatedAlertaAluno;
  }

  @Mutation(() => Boolean)
  async sendAlertasDashboard(
    @Ctx() { prisma }: Context
  ) {
    const getAlertas = await prisma.alertaAluno.findMany({
      include: {
        alerta: true,
        aluno: { 
          include: {
            orientador: true,
            coorientador: true
          }
        }
      },
      where: {
        AND: [ { ativo: true }, { enviado: false }, { resolvido: false } ],
    }});
    
    const today = DateTime.fromJSDate(new Date());
    const sent: AlertaAluno[] = [];
    const errors: AlertaAluno[] = [];

    getAlertas.forEach(async (currentAlertaAluno) => {
      if (DateTime.fromJSDate(currentAlertaAluno.aluno.dataLimite).minus({months: currentAlertaAluno.alerta.diasIntervalo / 30}) <= today) {
        try {
          await sendMail(currentAlertaAluno);
          const updatedCurrent = await prisma.alertaAluno.update({
            where: {
              id: currentAlertaAluno.id
            },
            data: {
              enviado: true,
              dataEnvioEmail: today.toJSDate()
            }
          });
          sent.push(updatedCurrent);
        } catch (err) {
          console.log(err);
          errors.push(currentAlertaAluno);
          // throw new ApolloError("Erro ao enviar email");
        }
      }
    });

    return errors.length ? false : true;
  }

  @Mutation(() => Int)
  async sendManyAlertaAluno(
    @Ctx() { prisma }: Context,
    @Args() { alertaAlunoIds }: SendManyAlertaAluno
  ) {
    const alertaAlunos = await prisma.alertaAluno.findMany({
      where: { id: { in: alertaAlunoIds } },
      include: { aluno: { include: { orientador: true, coorientador: true } }, alerta: true }
    });

    if (!alertaAlunos) {
      return 0;
    }
    
    const today = new Date();
    let count = 0;
    
    for (const alertaAluno of alertaAlunos) {
      try {
        await sendMail(alertaAluno);
        let updatedAlertaAluno: AlertaAluno = await prisma.alertaAluno.update({
          where: { id: alertaAluno.id },
          data: {
            enviado: true,
            dataEnvioEmail: today,
          },
        });
        count += 1;
      } catch (err) {
        console.log(err);
        throw new ApolloError("Erro ao enviar email");
      }
    }

    return count;
  }
}
