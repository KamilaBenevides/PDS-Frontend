import { GraphQLResolveInfo } from "graphql";
import { GroupByAlunoArgs } from "./args/GroupByAlunoArgs";
import { AlunoGroupBy } from "../../outputs/AlunoGroupBy";
export declare class GroupByAlunoResolver {
    groupByAluno(ctx: any, info: GraphQLResolveInfo, args: GroupByAlunoArgs): Promise<AlunoGroupBy[]>;
}
