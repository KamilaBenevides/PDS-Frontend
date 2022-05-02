import { Aluno } from "../models/Aluno";
import { DocenteCount } from "../resolvers/outputs/DocenteCount";
export declare class Docente {
    id: number;
    nomeCompleto: string;
    email?: string | null;
    AlunoOrientado?: Aluno[];
    AlunoCoorientado?: Aluno[];
    _count?: DocenteCount | null;
}
