import { AlertaAluno } from "../../../models/AlertaAluno";
import { Aluno } from "../../../models/Aluno";
import { Docente } from "../../../models/Docente";
import { AlunoAlertaAlunoArgs } from "./args/AlunoAlertaAlunoArgs";
export declare class AlunoRelationsResolver {
    orientador(aluno: Aluno, ctx: any): Promise<Docente>;
    coorientador(aluno: Aluno, ctx: any): Promise<Docente | null>;
    AlertaAluno(aluno: Aluno, ctx: any, args: AlunoAlertaAlunoArgs): Promise<AlertaAluno[]>;
}
