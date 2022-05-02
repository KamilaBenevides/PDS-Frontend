import { AlunoAvgAggregate } from "../outputs/AlunoAvgAggregate";
import { AlunoCountAggregate } from "../outputs/AlunoCountAggregate";
import { AlunoMaxAggregate } from "../outputs/AlunoMaxAggregate";
import { AlunoMinAggregate } from "../outputs/AlunoMinAggregate";
import { AlunoSumAggregate } from "../outputs/AlunoSumAggregate";
export declare class AlunoGroupBy {
    id: number;
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional: string | null;
    emailPessoal: string | null;
    ativo: boolean;
    orientadorId: number;
    coorientadorId: number | null;
    _count: AlunoCountAggregate | null;
    _avg: AlunoAvgAggregate | null;
    _sum: AlunoSumAggregate | null;
    _min: AlunoMinAggregate | null;
    _max: AlunoMaxAggregate | null;
}
