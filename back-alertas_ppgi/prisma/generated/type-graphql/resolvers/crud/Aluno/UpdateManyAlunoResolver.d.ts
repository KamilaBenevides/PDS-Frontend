import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAlunoArgs } from "./args/UpdateManyAlunoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAlunoResolver {
    updateManyAluno(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAlunoArgs): Promise<AffectedRowsOutput>;
}
