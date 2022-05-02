import { DocenteAvgOrderByAggregateInput } from "../inputs/DocenteAvgOrderByAggregateInput";
import { DocenteCountOrderByAggregateInput } from "../inputs/DocenteCountOrderByAggregateInput";
import { DocenteMaxOrderByAggregateInput } from "../inputs/DocenteMaxOrderByAggregateInput";
import { DocenteMinOrderByAggregateInput } from "../inputs/DocenteMinOrderByAggregateInput";
import { DocenteSumOrderByAggregateInput } from "../inputs/DocenteSumOrderByAggregateInput";
export declare class DocenteOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nomeCompleto?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    _count?: DocenteCountOrderByAggregateInput | undefined;
    _avg?: DocenteAvgOrderByAggregateInput | undefined;
    _max?: DocenteMaxOrderByAggregateInput | undefined;
    _min?: DocenteMinOrderByAggregateInput | undefined;
    _sum?: DocenteSumOrderByAggregateInput | undefined;
}
