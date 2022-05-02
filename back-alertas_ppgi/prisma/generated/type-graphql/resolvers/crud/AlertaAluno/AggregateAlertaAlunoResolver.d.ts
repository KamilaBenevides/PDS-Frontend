import { GraphQLResolveInfo } from "graphql";
import { AggregateAlertaAlunoArgs } from "./args/AggregateAlertaAlunoArgs";
import { AggregateAlertaAluno } from "../../outputs/AggregateAlertaAluno";
export declare class AggregateAlertaAlunoResolver {
    aggregateAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: AggregateAlertaAlunoArgs): Promise<AggregateAlertaAluno>;
}
