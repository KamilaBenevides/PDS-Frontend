import { Aluno } from "../../../models/Aluno";
import { Docente } from "../../../models/Docente";
import { DocenteAlunoCoorientadoArgs } from "./args/DocenteAlunoCoorientadoArgs";
import { DocenteAlunoOrientadoArgs } from "./args/DocenteAlunoOrientadoArgs";
export declare class DocenteRelationsResolver {
    AlunoOrientado(docente: Docente, ctx: any, args: DocenteAlunoOrientadoArgs): Promise<Aluno[]>;
    AlunoCoorientado(docente: Docente, ctx: any, args: DocenteAlunoCoorientadoArgs): Promise<Aluno[]>;
}
