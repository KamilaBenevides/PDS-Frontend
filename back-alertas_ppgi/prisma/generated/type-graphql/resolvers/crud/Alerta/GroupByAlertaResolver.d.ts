import { GraphQLResolveInfo } from "graphql";
import { GroupByAlertaArgs } from "./args/GroupByAlertaArgs";
import { AlertaGroupBy } from "../../outputs/AlertaGroupBy";
export declare class GroupByAlertaResolver {
    groupByAlerta(ctx: any, info: GraphQLResolveInfo, args: GroupByAlertaArgs): Promise<AlertaGroupBy[]>;
}
