import { UserInputError } from "apollo-server";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Aluno, CreateAlunoArgs } from "../../prisma/generated/type-graphql";
import { Context } from "../utils/context";
import { CustomCreateAlunoInput } from "./customArgs";
import { processNewAluno } from "./processNewAluno";

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
        dataLimite: data.dataIngresso, // to be changed
        ativo: true,
        orientador: { connect: { id: data.orientadorId } },
        coorientador: data.coorientadorId
          ? { connect: { id: data.coorientadorId } }
          : undefined,
      },
    });

    const updatedAluno = await processNewAluno(prisma, createdAluno);

    return updatedAluno;
  }
}
