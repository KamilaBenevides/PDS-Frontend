import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAlertaAlunoArgs } from "./args/DeleteManyAlertaAlunoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAlertaAlunoResolver {
    deleteManyAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAlertaAlunoArgs): Promise<AffectedRowsOutput>;
}
