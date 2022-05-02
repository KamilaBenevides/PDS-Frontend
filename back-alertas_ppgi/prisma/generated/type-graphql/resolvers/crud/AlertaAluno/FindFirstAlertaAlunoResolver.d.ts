import { GraphQLResolveInfo } from "graphql";
import { FindFirstAlertaAlunoArgs } from "./args/FindFirstAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class FindFirstAlertaAlunoResolver {
    findFirstAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: FindFirstAlertaAlunoArgs): Promise<AlertaAluno | null>;
}
