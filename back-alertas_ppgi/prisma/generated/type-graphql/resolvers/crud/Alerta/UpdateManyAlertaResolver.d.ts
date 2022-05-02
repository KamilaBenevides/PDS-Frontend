import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAlertaArgs } from "./args/UpdateManyAlertaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAlertaResolver {
    updateManyAlerta(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAlertaArgs): Promise<AffectedRowsOutput>;
}
