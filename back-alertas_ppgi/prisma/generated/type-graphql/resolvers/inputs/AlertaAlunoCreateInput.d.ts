import { AlertaCreateNestedOneWithoutAlertaAlunoInput } from "../inputs/AlertaCreateNestedOneWithoutAlertaAlunoInput";
import { AlunoCreateNestedOneWithoutAlertaAlunoInput } from "../inputs/AlunoCreateNestedOneWithoutAlertaAlunoInput";
export declare class AlertaAlunoCreateInput {
    aluno: AlunoCreateNestedOneWithoutAlertaAlunoInput;
    Alerta: AlertaCreateNestedOneWithoutAlertaAlunoInput;
    enviado?: boolean | undefined;
    resolvido?: boolean | undefined;
    ativo?: boolean | undefined;
    dataEnvioEmail: Date;
}
