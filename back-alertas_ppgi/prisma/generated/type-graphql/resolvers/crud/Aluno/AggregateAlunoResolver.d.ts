import { GraphQLResolveInfo } from "graphql";
import { AggregateAlunoArgs } from "./args/AggregateAlunoArgs";
import { AggregateAluno } from "../../outputs/AggregateAluno";
export declare class AggregateAlunoResolver {
    aggregateAluno(ctx: any, info: GraphQLResolveInfo, args: AggregateAlunoArgs): Promise<AggregateAluno>;
}
