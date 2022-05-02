import { GraphQLResolveInfo } from "graphql";
import { CreateAlertaAlunoArgs } from "./args/CreateAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class CreateAlertaAlunoResolver {
    createAlertaAluno(ctx: any, info: GraphQLResolveInfo, args: CreateAlertaAlunoArgs): Promise<AlertaAluno>;
}
