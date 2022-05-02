import { DocenteOrderByWithAggregationInput } from "../../../inputs/DocenteOrderByWithAggregationInput";
import { DocenteScalarWhereWithAggregatesInput } from "../../../inputs/DocenteScalarWhereWithAggregatesInput";
import { DocenteWhereInput } from "../../../inputs/DocenteWhereInput";
export declare class GroupByDocenteArgs {
    where?: DocenteWhereInput | undefined;
    orderBy?: DocenteOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nomeCompleto" | "email">;
    having?: DocenteScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
