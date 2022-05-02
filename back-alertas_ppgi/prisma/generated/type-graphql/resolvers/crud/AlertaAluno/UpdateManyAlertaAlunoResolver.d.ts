import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAlertaAlunoArgs } from "./args/UpdateManyAlertaAlunoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAlertaAlunoResolver {
    updateManyAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAlertaAlunoArgs): Promise<AffectedRowsOutput>;
}
