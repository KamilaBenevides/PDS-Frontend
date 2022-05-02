import { AlertaAlunoCreateNestedManyWithoutAlertaInput } from "../inputs/AlertaAlunoCreateNestedManyWithoutAlertaInput";
export declare class AlertaCreateInput {
    diasIntervalo: number;
    nome: string;
    corpoEmail?: string | undefined;
    AlertaAluno?: AlertaAlunoCreateNestedManyWithoutAlertaInput | undefined;
}
