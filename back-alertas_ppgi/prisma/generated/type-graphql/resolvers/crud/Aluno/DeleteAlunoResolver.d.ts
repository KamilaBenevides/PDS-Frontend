import { GraphQLResolveInfo } from "graphql";
import { DeleteAlunoArgs } from "./args/DeleteAlunoArgs";
import { Aluno } from "../../../models/Aluno";
export declare class DeleteAlunoResolver {
    deleteAluno(ctx: any, info: GraphQLResolveInfo, args: DeleteAlunoArgs): Promise<Aluno | null>;
}
