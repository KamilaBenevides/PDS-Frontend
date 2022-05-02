import { GraphQLResolveInfo } from "graphql";
import { AggregateAlertaArgs } from "./args/AggregateAlertaArgs";
import { AggregateAlerta } from "../../outputs/AggregateAlerta";
export declare class AggregateAlertaResolver {
    aggregateAlerta(ctx: any, info: GraphQLResolveInfo, args: AggregateAlertaArgs): Promise<AggregateAlerta>;
}
