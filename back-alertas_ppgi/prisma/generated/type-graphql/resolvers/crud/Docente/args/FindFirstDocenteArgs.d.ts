import { DocenteOrderByWithRelationInput } from "../../../inputs/DocenteOrderByWithRelationInput";
import { DocenteWhereInput } from "../../../inputs/DocenteWhereInput";
import { DocenteWhereUniqueInput } from "../../../inputs/DocenteWhereUniqueInput";
export declare class FindFirstDocenteArgs {
    where?: DocenteWhereInput | undefined;
    orderBy?: DocenteOrderByWithRelationInput[] | undefined;
    cursor?: DocenteWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nomeCompleto" | "email"> | undefined;
}
