import { GraphQLResolveInfo } from "graphql";
import { UpsertAlertaAlunoArgs } from "./args/UpsertAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class UpsertAlertaAlunoResolver {
    upsertAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: UpsertAlertaAlunoArgs): Promise<AlertaAluno>;
}
