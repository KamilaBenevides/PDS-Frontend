import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAlunoArgs } from "./args/DeleteManyAlunoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAlunoResolver {
    deleteManyAluno(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAlunoArgs): Promise<AffectedRowsOutput>;
}
