import { AlertaOrderByWithRelationInput } from "../../../inputs/AlertaOrderByWithRelationInput";
import { AlertaWhereInput } from "../../../inputs/AlertaWhereInput";
import { AlertaWhereUniqueInput } from "../../../inputs/AlertaWhereUniqueInput";
export declare class FindFirstAlertaArgs {
    where?: AlertaWhereInput | undefined;
    orderBy?: AlertaOrderByWithRelationInput[] | undefined;
    cursor?: AlertaWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "diasIntervalo" | "nome" | "corpoEmail"> | undefined;
}
