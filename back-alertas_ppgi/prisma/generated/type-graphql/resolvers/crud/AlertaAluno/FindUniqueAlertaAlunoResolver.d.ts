import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAlertaAlunoArgs } from "./args/FindUniqueAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class FindUniqueAlertaAlunoResolver {
    alertaAluno(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAlertaAlunoArgs): Promise<AlertaAluno | null>;
}
