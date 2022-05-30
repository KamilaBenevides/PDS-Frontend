import { PrismaClient } from "@prisma/client";
import { Aluno } from "../../prisma/generated/type-graphql";
import { DateTime } from "luxon";
import { UserInputError } from "apollo-server";

export const processAlertasAluno = async (
  prisma: PrismaClient,
  aluno: Aluno
): Promise<Aluno> => {
  const dataIngresso = DateTime.fromJSDate(aluno.dataIngresso);

  let dataLimite = dataIngresso
    .set({ day: 1, hour: 11, minute: 0, second: 0, millisecond: 0 })
    .plus({ months: 23 });
  dataLimite = dataLimite.set({ day: dataLimite.daysInMonth });

  aluno = await prisma.aluno.update({
    where: { id: aluno.id },
    data: {
      dataLimite: dataLimite.toJSDate(),
    },
  });

  const alertas = await prisma.alerta.findMany();

  const promisesAlertas = alertas.map((alerta) => {
    return prisma.alertaAluno.create({
      data: {
        alerta: { connect: { id: alerta.id } },
        aluno: { connect: { id: aluno.id } },
        ativo: true,
        enviado: false,
        resolvido: false,
      },
    });
  });

  await prisma.$transaction(promisesAlertas);

  return aluno;
};

export const processChangeDataLimite = async (
  prisma: PrismaClient,
  aluno: Aluno,
  newDataLimite: Date
) => {
  if (
    DateTime.fromJSDate(aluno.dataLimite) >= DateTime.fromJSDate(newDataLimite)
  ) {
    throw new UserInputError("Nova data limite anterior à atual");
  }

  const updatedAluno = await prisma.aluno.update({
    where: { id: aluno.id },
    data: {
      dataLimite: DateTime.fromJSDate(newDataLimite)
        .set({
          hour: 11,
          minute: 0,
          second: 0,
          millisecond: 0,
        })
        .toJSDate(),
      ativo: { set: true },
      AlertaAluno: {
        updateMany: {
          where: { id: { in: aluno.AlertaAluno?.map((a) => a.id) } },
          data: {
            ativo: { set: true },
            dataEnvioEmail: { set: null },
            enviado: { set: false },
            resolvido: { set: false },
          },
        },
      },
    },
  });

  return updatedAluno;
};
