import { GraphQLResolveInfo } from "graphql";
import { CreateManyAlertaAlunoArgs } from "./args/CreateManyAlertaAlunoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAlertaAlunoResolver {
    createManyAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: CreateManyAlertaAlunoArgs): Promise<AffectedRowsOutput>;
}
