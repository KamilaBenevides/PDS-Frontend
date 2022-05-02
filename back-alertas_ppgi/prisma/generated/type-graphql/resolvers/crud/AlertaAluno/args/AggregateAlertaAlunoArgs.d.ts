import { AlertaAlunoOrderByWithRelationInput } from "../../../inputs/AlertaAlunoOrderByWithRelationInput";
import { AlertaAlunoWhereInput } from "../../../inputs/AlertaAlunoWhereInput";
import { AlertaAlunoWhereUniqueInput } from "../../../inputs/AlertaAlunoWhereUniqueInput";
export declare class AggregateAlertaAlunoArgs {
    where?: AlertaAlunoWhereInput | undefined;
    orderBy?: AlertaAlunoOrderByWithRelationInput[] | undefined;
    cursor?: AlertaAlunoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
