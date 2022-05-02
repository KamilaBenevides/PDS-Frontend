import { GraphQLResolveInfo } from "graphql";
import { CreateManyAlertaArgs } from "./args/CreateManyAlertaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAlertaResolver {
    createManyAlerta(ctx: any, info: GraphQLResolveInfo, args: CreateManyAlertaArgs): Promise<AffectedRowsOutput>;
}
