import { GraphQLResolveInfo } from "graphql";
import { UpsertAlunoArgs } from "./args/UpsertAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class UpsertAlunoResolver {
    upsertAluno(ctx: any, info: GraphQLResolveInfo, args: UpsertAlunoArgs): Promise<Aluno>;
}
