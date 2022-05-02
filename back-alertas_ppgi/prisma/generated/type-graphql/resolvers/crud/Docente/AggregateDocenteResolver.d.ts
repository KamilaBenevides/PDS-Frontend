import { GraphQLResolveInfo } from "graphql";
import { AggregateDocenteArgs } from "./args/AggregateDocenteArgs";
import { AggregateDocente } from "../../outputs/AggregateDocente";
export declare class AggregateDocenteResolver {
    aggregateDocente(ctx: any, info: GraphQLResolveInfo, args: AggregateDocenteArgs): Promise<AggregateDocente>;
}
