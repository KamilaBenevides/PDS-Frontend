import { AlertaAlunoAvgOrderByAggregateInput } from "../inputs/AlertaAlunoAvgOrderByAggregateInput";
import { AlertaAlunoCountOrderByAggregateInput } from "../inputs/AlertaAlunoCountOrderByAggregateInput";
import { AlertaAlunoMaxOrderByAggregateInput } from "../inputs/AlertaAlunoMaxOrderByAggregateInput";
import { AlertaAlunoMinOrderByAggregateInput } from "../inputs/AlertaAlunoMinOrderByAggregateInput";
import { AlertaAlunoSumOrderByAggregateInput } from "../inputs/AlertaAlunoSumOrderByAggregateInput";
export declare class AlertaAlunoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    alunoId?: "asc" | "desc" | undefined;
    alertaId?: "asc" | "desc" | undefined;
    enviado?: "asc" | "desc" | undefined;
    resolvido?: "asc" | "desc" | undefined;
    ativo?: "asc" | "desc" | undefined;
    dataEnvioEmail?: "asc" | "desc" | undefined;
    _count?: AlertaAlunoCountOrderByAggregateInput | undefined;
    _avg?: AlertaAlunoAvgOrderByAggregateInput | undefined;
    _max?: AlertaAlunoMaxOrderByAggregateInput | undefined;
    _min?: AlertaAlunoMinOrderByAggregateInput | undefined;
    _sum?: AlertaAlunoSumOrderByAggregateInput | undefined;
}
