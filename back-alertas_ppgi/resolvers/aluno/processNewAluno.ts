import { PrismaClient } from "@prisma/client";
import { Aluno } from "../../prisma/generated/type-graphql";
import { DateTime } from "luxon";

export const processNewAluno = async (
  prisma: PrismaClient,
  aluno: Aluno
): Promise<Aluno> => {
  const dataIngresso = DateTime.fromJSDate(aluno.dataIngresso);

  let dataLimite = dataIngresso.set({ day: 1 }).plus({ months: 13 });
  dataLimite = dataLimite.set({ day: dataLimite.daysInMonth });

  aluno = await prisma.aluno.update({
    where: { id: aluno.id },
    data: {
      dataLimite: dataLimite.toJSDate(),
    },
  });

  return aluno;
};
