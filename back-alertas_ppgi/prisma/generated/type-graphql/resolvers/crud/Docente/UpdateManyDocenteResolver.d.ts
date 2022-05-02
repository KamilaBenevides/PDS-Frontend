import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDocenteArgs } from "./args/UpdateManyDocenteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDocenteResolver {
    updateManyDocente(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDocenteArgs): Promise<AffectedRowsOutput>;
}
