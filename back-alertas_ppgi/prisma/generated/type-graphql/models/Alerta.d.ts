import { AlertaAluno } from "../models/AlertaAluno";
import { AlertaCount } from "../resolvers/outputs/AlertaCount";
export declare class Alerta {
    id: number;
    diasIntervalo: number;
    nome: string;
    corpoEmail?: string | null;
    AlertaAluno?: AlertaAluno[];
    _count?: AlertaCount | null;
}
