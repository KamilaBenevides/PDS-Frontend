import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAlertaArgs } from "./args/DeleteManyAlertaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAlertaResolver {
    deleteManyAlerta(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAlertaArgs): Promise<AffectedRowsOutput>;
}
