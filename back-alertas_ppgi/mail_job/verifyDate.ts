import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";

const main = async () => {
  const prisma = new PrismaClient();
  const getAlertas = await prisma.alertaAluno.findMany({include: {alerta: true, aluno: true}});

  const today = new Date();

  getAlertas.forEach(async (current) => {
    if (DateTime.fromJSDate(current.aluno.dataLimite).minus({days: current.alerta.diasIntervalo}) <= DateTime.fromJSDate(today)) {
      const data = await prisma.alertaAluno.update({
        where: {
          id: current.id
        },
        data: {
          enviado: true,
          dataEnvioEmail: today
        }
      });
    }
  });
}

main();
