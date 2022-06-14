import { createTransport } from 'nodemailer';
import 'dotenv/config';
import { env } from 'process';
import { AlertaAluno } from '../../prisma/generated/type-graphql';

export const sendMail = async (alertaAluno: AlertaAluno) => {
    const mailSettings = {
        host: env.SMTP_HOST,
        port: 587,
        auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS
        },
    }

    const transport = createTransport(mailSettings);

    const message = {
        from: { name: "Alertas PPGI", address: env.SMTP_USER! },
        to: [alertaAluno.aluno!.emailInstitucional!, alertaAluno.aluno!.emailPessoal!],
        cc: [alertaAluno.aluno?.orientador?.email!],
        subject: "[Alerta de Prazos PPGI] " + alertaAluno.alerta?.nome,
        text: "Olá {NOME},\n\nEste é um email enviado através do sistema de Alertas de Prazos do PPGI.\nIdentificamos que você está próximo do seu prazo (cerca de 30 dias) para a atividade de {ALERTA}.\nPor favor, entre em contato com a secretaria a fim de esclarecer mais detalhes e resolver esta pendência.".replace("{NOME}", alertaAluno.aluno?.nomeCompleto!).replace("{ALERTA}", alertaAluno.alerta?.nome!),
    };

    // transport.sendMail(message).then(() => console.log('enviado')).catch(err => console.log(err));
    try {
        const info = await transport.sendMail(message);
        return info;
    } catch (err) {
        console.log(err);
        throw new Error("Erro ao enviar email");
    }
}