import { GraphQLResolveInfo } from "graphql";
import { UpdateAlertaAlunoArgs } from "./args/UpdateAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class UpdateAlertaAlunoResolver {
    updateAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: UpdateAlertaAlunoArgs): Promise<AlertaAluno | null>;
}
