import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAlunoArgs } from "./args/FindUniqueAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class FindUniqueAlunoResolver {
    aluno(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAlunoArgs): Promise<Aluno | null>;
}
