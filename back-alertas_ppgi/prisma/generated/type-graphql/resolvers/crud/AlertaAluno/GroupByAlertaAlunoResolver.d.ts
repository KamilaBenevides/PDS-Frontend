import { GraphQLResolveInfo } from "graphql";
import { GroupByAlertaAlunoArgs } from "./args/GroupByAlertaAlunoArgs";
import { AlertaAlunoGroupBy } from "../../outputs/AlertaAlunoGroupBy";
export declare class GroupByAlertaAlunoResolver {
    groupByAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: GroupByAlertaAlunoArgs): Promise<AlertaAlunoGroupBy[]>;
}
