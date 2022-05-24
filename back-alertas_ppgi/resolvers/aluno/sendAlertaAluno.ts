import { UserInputError, ApolloError } from "apollo-server";
import { DateTime } from "luxon";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { AlertaAluno } from "../../prisma/generated/type-graphql";
import { Context } from "../utils/context";
import { SendAlertaAluno } from "./customArgs";
import { sendMail } from "../utils/mail";

@Resolver()
export class sendAlertaAlunoResolver {
  
  @Mutation(() => AlertaAluno)
  async sendAlertaAluno(
    @Ctx() { prisma }: Context,
    @Args() { alertaAlunoId }: SendAlertaAluno
  ) {
    const aa = await prisma.alertaAluno.findUnique({
      where: { id: alertaAlunoId },
      include: { aluno: true, alerta: true }
    });

    if (!aa) {
      throw new UserInputError("Não existe um alerta aluno com esse ID.");
    }

    try {
      await sendMail(aa.aluno.emailInstitucional!, aa.alerta.tipo, aa.alerta.corpoEmail!);
    } catch (err) {
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
}
