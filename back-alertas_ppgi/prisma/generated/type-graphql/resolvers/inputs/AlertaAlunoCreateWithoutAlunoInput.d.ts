import { AlertaCreateNestedOneWithoutAlertaAlunoInput } from "../inputs/AlertaCreateNestedOneWithoutAlertaAlunoInput";
export declare class AlertaAlunoCreateWithoutAlunoInput {
    Alerta: AlertaCreateNestedOneWithoutAlertaAlunoInput;
    enviado?: boolean | undefined;
    resolvido?: boolean | undefined;
    ativo?: boolean | undefined;
    dataEnvioEmail: Date;
}
