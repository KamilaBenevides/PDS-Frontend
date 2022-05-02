import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDocenteArgs } from "./args/DeleteManyDocenteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDocenteResolver {
    deleteManyDocente(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDocenteArgs): Promise<AffectedRowsOutput>;
}
