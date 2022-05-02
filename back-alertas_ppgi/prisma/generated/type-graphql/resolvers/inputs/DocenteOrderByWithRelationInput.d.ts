import { AlunoOrderByRelationAggregateInput } from "../inputs/AlunoOrderByRelationAggregateInput";
export declare class DocenteOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nomeCompleto?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    AlunoOrientado?: AlunoOrderByRelationAggregateInput | undefined;
    AlunoCoorientado?: AlunoOrderByRelationAggregateInput | undefined;
}
