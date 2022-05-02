import { AlertaAvgOrderByAggregateInput } from "../inputs/AlertaAvgOrderByAggregateInput";
import { AlertaCountOrderByAggregateInput } from "../inputs/AlertaCountOrderByAggregateInput";
import { AlertaMaxOrderByAggregateInput } from "../inputs/AlertaMaxOrderByAggregateInput";
import { AlertaMinOrderByAggregateInput } from "../inputs/AlertaMinOrderByAggregateInput";
import { AlertaSumOrderByAggregateInput } from "../inputs/AlertaSumOrderByAggregateInput";
export declare class AlertaOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    diasIntervalo?: "asc" | "desc" | undefined;
    nome?: "asc" | "desc" | undefined;
    corpoEmail?: "asc" | "desc" | undefined;
    _count?: AlertaCountOrderByAggregateInput | undefined;
    _avg?: AlertaAvgOrderByAggregateInput | undefined;
    _max?: AlertaMaxOrderByAggregateInput | undefined;
    _min?: AlertaMinOrderByAggregateInput | undefined;
    _sum?: AlertaSumOrderByAggregateInput | undefined;
}
