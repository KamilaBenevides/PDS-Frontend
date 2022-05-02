import { AlunoOrderByWithRelationInput } from "../../../inputs/AlunoOrderByWithRelationInput";
import { AlunoWhereInput } from "../../../inputs/AlunoWhereInput";
import { AlunoWhereUniqueInput } from "../../../inputs/AlunoWhereUniqueInput";
export declare class AggregateAlunoArgs {
    where?: AlunoWhereInput | undefined;
    orderBy?: AlunoOrderByWithRelationInput[] | undefined;
    cursor?: AlunoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
