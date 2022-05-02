import { GraphQLResolveInfo } from "graphql";
import { CreateManyAlunoArgs } from "./args/CreateManyAlunoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAlunoResolver {
    createManyAluno(ctx: any, info: GraphQLResolveInfo, args: CreateManyAlunoArgs): Promise<AffectedRowsOutput>;
}
