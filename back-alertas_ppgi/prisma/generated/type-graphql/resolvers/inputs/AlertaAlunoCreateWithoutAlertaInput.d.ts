import { AlunoCreateNestedOneWithoutAlertaAlunoInput } from "../inputs/AlunoCreateNestedOneWithoutAlertaAlunoInput";
export declare class AlertaAlunoCreateWithoutAlertaInput {
    aluno: AlunoCreateNestedOneWithoutAlertaAlunoInput;
    enviado?: boolean | undefined;
    resolvido?: boolean | undefined;
    ativo?: boolean | undefined;
    dataEnvioEmail: Date;
}
