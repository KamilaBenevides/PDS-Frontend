import { AlertaAlunoOrderByRelationAggregateInput } from "../inputs/AlertaAlunoOrderByRelationAggregateInput";
export declare class AlertaOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    diasIntervalo?: "asc" | "desc" | undefined;
    nome?: "asc" | "desc" | undefined;
    corpoEmail?: "asc" | "desc" | undefined;
    AlertaAluno?: AlertaAlunoOrderByRelationAggregateInput | undefined;
}
