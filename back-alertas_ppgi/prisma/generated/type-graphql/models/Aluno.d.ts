import { AlertaAluno } from "../models/AlertaAluno";
import { Docente } from "../models/Docente";
import { AlunoCount } from "../resolvers/outputs/AlunoCount";
export declare class Aluno {
    id: number;
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional?: string | null;
    emailPessoal?: string | null;
    ativo: boolean;
    orientador?: Docente;
    orientadorId: number;
    coorientador?: Docente | null;
    coorientadorId?: number | null;
    AlertaAluno?: AlertaAluno[];
    _count?: AlunoCount | null;
}
