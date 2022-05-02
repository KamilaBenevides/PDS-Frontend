import { AlertaAlunoAvgAggregate } from "../outputs/AlertaAlunoAvgAggregate";
import { AlertaAlunoCountAggregate } from "../outputs/AlertaAlunoCountAggregate";
import { AlertaAlunoMaxAggregate } from "../outputs/AlertaAlunoMaxAggregate";
import { AlertaAlunoMinAggregate } from "../outputs/AlertaAlunoMinAggregate";
import { AlertaAlunoSumAggregate } from "../outputs/AlertaAlunoSumAggregate";
export declare class AlertaAlunoGroupBy {
    id: number;
    alunoId: number;
    alertaId: number;
    enviado: boolean;
    resolvido: boolean;
    ativo: boolean;
    dataEnvioEmail: Date;
    _count: AlertaAlunoCountAggregate | null;
    _avg: AlertaAlunoAvgAggregate | null;
    _sum: AlertaAlunoSumAggregate | null;
    _min: AlertaAlunoMinAggregate | null;
    _max: AlertaAlunoMaxAggregate | null;
}
