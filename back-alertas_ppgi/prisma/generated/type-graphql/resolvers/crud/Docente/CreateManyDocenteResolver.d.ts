import { GraphQLResolveInfo } from "graphql";
import { CreateManyDocenteArgs } from "./args/CreateManyDocenteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDocenteResolver {
    createManyDocente(ctx: any, info: GraphQLResolveInfo, args: CreateManyDocenteArgs): Promise<AffectedRowsOutput>;
}
