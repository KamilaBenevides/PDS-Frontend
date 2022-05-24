import { createTransport } from 'nodemailer';
import 'dotenv/config';
import { env } from 'process';

export const sendMail = async (to: string, alert: string, text: string) => {
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
        from: env.SMTP_USER,
        to: to,
        subject: "Alerta - " + alert,
        text,
    };

    // transport.sendMail(message).then(() => console.log('enviado')).catch(err => console.log(err));
    try {
        const info = await transport.sendMail(message);
        return info;
    } catch (err) {
        throw new Error("Erro ao enviar email");
    }
}