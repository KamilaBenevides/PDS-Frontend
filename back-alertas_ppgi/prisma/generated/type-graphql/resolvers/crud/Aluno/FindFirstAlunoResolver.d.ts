import { GraphQLResolveInfo } from "graphql";
import { FindFirstAlunoArgs } from "./args/FindFirstAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class FindFirstAlunoResolver {
    findFirstAluno(ctx: any, info: GraphQLResolveInfo, args: FindFirstAlunoArgs): Promise<Aluno | null>;
}
