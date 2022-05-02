import { GraphQLResolveInfo } from "graphql";
import { UpdateAlunoArgs } from "./args/UpdateAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class UpdateAlunoResolver {
    updateAluno(ctx: any, info: GraphQLResolveInfo, args: UpdateAlunoArgs): Promise<Aluno | null>;
}
