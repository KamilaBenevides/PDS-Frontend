import { GraphQLResolveInfo } from "graphql";
import { DeleteAlertaAlunoArgs } from "./args/DeleteAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class DeleteAlertaAlunoResolver {
    deleteAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: DeleteAlertaAlunoArgs): Promise<AlertaAluno | null>;
}
