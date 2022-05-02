import { GraphQLResolveInfo } from "graphql";
import { GroupByDocenteArgs } from "./args/GroupByDocenteArgs";
import { DocenteGroupBy } from "../../outputs/DocenteGroupBy";
export declare class GroupByDocenteResolver {
    groupByDocente(ctx: any, info: GraphQLResolveInfo, args: GroupByDocenteArgs): Promise<DocenteGroupBy[]>;
}
