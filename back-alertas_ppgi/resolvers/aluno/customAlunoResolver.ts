import { UserInputError, ApolloError } from "apollo-server";
import { DateTime } from "luxon";
import { Arg, Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Aluno, CreateAlunoArgs } from "../../prisma/generated/type-graphql";
import { Context } from "../utils/context";
import { CustomCreateAlunoInput, CustomUpdateAluno } from "./customArgs";
import {
  processAlertasAluno,
  processChangeDataLimite,
} from "./processNewAluno";

@Resolver()
export class customAlunoResolver {
  @Mutation(() => Aluno)
  async customCreateAluno(
    @Ctx() { prisma }: Context,
    @Args() { data }: CustomCreateAlunoInput
  ) {
    const storedAluno = await prisma.aluno.findFirst({
      where: {
        OR: [
          { matricula: { equals: data.matricula } },
          { cpf: { equals: data.cpf } },
        ],
      },
    });

    if (storedAluno) {
      throw new UserInputError(
        "Já existe um aluno com a mesma matrícula ou o mesmo CPF."
      );
    }

    let createdAluno = await prisma.aluno.create({
      data: {
        cpf: data.cpf,
        matricula: data.matricula,
        nomeCompleto: data.nomeCompleto,
        emailPessoal: data.emailPessoal,
        emailInstitucional: data.emailInstitucional ?? null,
        dataIngresso: data.dataIngresso,
        dataLimite: data.dataIngresso, // will be changed
        ativo: true,
        orientador: data.orientadorId
          ? { connect: { id: data.orientadorId } }
          : undefined,
        coorientador: data.coorientadorId
          ? { connect: { id: data.coorientadorId } }
          : undefined,
      },
    });

    let updatedAluno: Aluno;
    try {
      updatedAluno = await processAlertasAluno(prisma, createdAluno);
    } catch (err: any) {
      throw new ApolloError(err?.message);
    }

    return updatedAluno;
  }

  @Mutation(() => Aluno)
  async customUpdateAluno(
    @Ctx() { prisma }: Context,
    @Args() { data, alunoId }: CustomUpdateAluno
  ) {
    const oldAluno = await prisma.aluno.findUnique({
      where: { id: alunoId },
    });

    if (!oldAluno) {
      throw new UserInputError("Não existe um aluno com esse ID.");
    }

    const storedAluno = await prisma.aluno.findFirst({
      where: {
        AND: [
          { id: { not: { equals: alunoId } } },
          {
            OR: [
              { matricula: { equals: data.matricula } },
              { cpf: { equals: data.cpf } },
            ],
          },
        ],
      },
    });

    if (storedAluno) {
      throw new UserInputError(
        "Já existe um aluno com a mesma matrícula ou o mesmo CPF."
      );
    }

    let updatedAluno: Aluno = await prisma.aluno.update({
      where: { id: alunoId },
      data: {
        cpf: data.cpf,
        matricula: data.matricula,
        nomeCompleto: data.nomeCompleto,
        emailPessoal: data.emailPessoal,
        emailInstitucional: data.emailInstitucional,
        dataIngresso: data.dataIngresso,
        ativo: data.ativo,
        orientador: data.orientadorId
          ? { connect: { id: data.orientadorId } }
          : data.orientadorId === null
          ? { disconnect: true }
          : undefined,
        coorientador: data.coorientadorId
          ? { connect: { id: data.coorientadorId } }
          : data.coorientadorId === null
          ? { disconnect: true }
          : undefined,
      },
    });

    if (
      data.dataIngresso &&
      !DateTime.fromJSDate(data.dataIngresso).equals(
        DateTime.fromJSDate(oldAluno.dataIngresso)
      )
    ) {
      await prisma.aluno.update({
        where: {
          id: alunoId,
        },
        data: {
          AlertaAluno: {
            deleteMany: {},
          },
        },
      });

      try {
        updatedAluno = await processAlertasAluno(prisma, updatedAluno);
      } catch (err: any) {
        throw new ApolloError(err?.message);
      }
    }

    return updatedAluno;
  }

  @Mutation(() => Boolean, { nullable: true })
  async customDeleteAluno(
    @Ctx() { prisma }: Context,
    @Arg("alunoId") alunoId: number
  ) {
    const aluno = await prisma.aluno.findUnique({
      where: { id: alunoId },
      include: { AlertaAluno: true },
    });

    if (!aluno) {
      throw new UserInputError("Não existe aluno com esse id");
    }

    await prisma.alertaAluno.deleteMany({
      where: { id: { in: aluno.AlertaAluno.map((a) => a.id) } },
    });

    await prisma.aluno.delete({ where: { id: aluno.id } });

    return true;
  }

  @Mutation(() => Aluno)
  async customSetAlunoAtivo(
    @Ctx() { prisma }: Context,
    @Arg("alunoId") alunoId: number,
    @Arg("ativo") ativo: boolean
  ) {
    const aluno = await prisma.aluno.findUnique({
      where: { id: alunoId },
      include: { AlertaAluno: true },
    });

    if (!aluno) {
      throw new UserInputError("Não existe aluno com esse id");
    }

    await prisma.alertaAluno.updateMany({
      where: { id: { in: aluno.AlertaAluno.map((a) => a.id) } },
      data: {
        ativo: { set: ativo },
      },
    });

    const updatedAluno = await prisma.aluno.update({
      where: { id: alunoId },
      data: {
        ativo: { set: ativo },
      },
    });

    return updatedAluno;
  }

  @Mutation(() => Aluno)
  async customNewDataLimite(
    @Ctx() { prisma }: Context,
    @Arg("alunoId") alunoId: number,
    @Arg("dataLimite") dataLimite: Date
  ) {
    const aluno = await prisma.aluno.findUnique({
      where: { id: alunoId },
      include: { AlertaAluno: true },
    });

    if (!aluno) {
      throw new UserInputError("Não existe aluno com esse id");
    }

    const updatedAluno = await processChangeDataLimite(
      prisma,
      aluno,
      dataLimite
    );

    return updatedAluno;
  }
}
