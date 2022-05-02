import { GraphQLResolveInfo } from "graphql";
import { FindManyAlertaAlunoArgs } from "./args/FindManyAlertaAlunoArgs";
import { AlertaAluno } from "../../../models/AlertaAluno";
export declare class FindManyAlertaAlunoResolver {
    alertaAlunos(ctx: any, info: GraphQLResolveInfo, args: FindManyAlertaAlunoArgs): Promise<AlertaAluno[]>;
}
