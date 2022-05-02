import { AlunoAvgOrderByAggregateInput } from "../inputs/AlunoAvgOrderByAggregateInput";
import { AlunoCountOrderByAggregateInput } from "../inputs/AlunoCountOrderByAggregateInput";
import { AlunoMaxOrderByAggregateInput } from "../inputs/AlunoMaxOrderByAggregateInput";
import { AlunoMinOrderByAggregateInput } from "../inputs/AlunoMinOrderByAggregateInput";
import { AlunoSumOrderByAggregateInput } from "../inputs/AlunoSumOrderByAggregateInput";
export declare class AlunoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nomeCompleto?: "asc" | "desc" | undefined;
    matricula?: "asc" | "desc" | undefined;
    dataIngresso?: "asc" | "desc" | undefined;
    dataLimite?: "asc" | "desc" | undefined;
    cpf?: "asc" | "desc" | undefined;
    emailInstitucional?: "asc" | "desc" | undefined;
    emailPessoal?: "asc" | "desc" | undefined;
    ativo?: "asc" | "desc" | undefined;
    orientadorId?: "asc" | "desc" | undefined;
    coorientadorId?: "asc" | "desc" | undefined;
    _count?: AlunoCountOrderByAggregateInput | undefined;
    _avg?: AlunoAvgOrderByAggregateInput | undefined;
    _max?: AlunoMaxOrderByAggregateInput | undefined;
    _min?: AlunoMinOrderByAggregateInput | undefined;
    _sum?: AlunoSumOrderByAggregateInput | undefined;
}
