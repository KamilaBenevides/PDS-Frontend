import { GraphQLResolveInfo } from "graphql";
import { FindManyAlunoArgs } from "./args/FindManyAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class FindManyAlunoResolver {
    alunos(ctx: any, info: GraphQLResolveInfo, args: FindManyAlunoArgs): Promise<Aluno[]>;
}
