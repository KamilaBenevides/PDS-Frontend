import { GraphQLResolveInfo } from "graphql";
import { CreateAlunoArgs } from "./args/CreateAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class CreateAlunoResolver {
    createAluno(ctx: any, info: GraphQLResolveInfo, args: CreateAlunoArgs): Promise<Aluno>;
}
