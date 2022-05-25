import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";
import NodeMailer from 'nodemailer';
import NodeCron from 'node-cron';
import smtp from './config';

const transporter = NodeMailer.createTransport({
  host: smtp.host,
  port: smtp.port,
  auth: {
    user: smtp.user,
    pass: smtp.pass
  }
});

const main = async () => {
  const job = NodeCron.schedule("30 30 13 * * *", async () => {
    const prisma = new PrismaClient();
    const getAlertas = await prisma.alertaAluno.findMany({include: {alerta: true, aluno: true}, where: {
      AND: [
      {ativo: true}, {enviado: false}, {resolvido: false}
      ],
    }});
    const today = new Date();

    getAlertas.forEach(async (current) => {
      if (DateTime.fromJSDate(current.aluno.dataLimite).minus({days: current.alerta.diasIntervalo}) <= DateTime.fromJSDate(today)) {
        await transporter.sendMail({
          from: smtp.user,
          to: current.aluno.emailInstitucional?.toString(),
          subject: current.alerta.tipo,
          text: current.alerta.corpoEmail?.toString()
        });
        
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
  });
 
}

main();
