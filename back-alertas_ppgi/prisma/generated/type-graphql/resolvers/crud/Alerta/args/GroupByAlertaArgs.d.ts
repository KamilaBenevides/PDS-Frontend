import { AlertaOrderByWithAggregationInput } from "../../../inputs/AlertaOrderByWithAggregationInput";
import { AlertaScalarWhereWithAggregatesInput } from "../../../inputs/AlertaScalarWhereWithAggregatesInput";
import { AlertaWhereInput } from "../../../inputs/AlertaWhereInput";
export declare class GroupByAlertaArgs {
    where?: AlertaWhereInput | undefined;
    orderBy?: AlertaOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "diasIntervalo" | "nome" | "corpoEmail">;
    having?: AlertaScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
