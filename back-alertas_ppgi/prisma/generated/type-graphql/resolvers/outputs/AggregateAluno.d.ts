import { AlunoAvgAggregate } from "../outputs/AlunoAvgAggregate";
import { AlunoCountAggregate } from "../outputs/AlunoCountAggregate";
import { AlunoMaxAggregate } from "../outputs/AlunoMaxAggregate";
import { AlunoMinAggregate } from "../outputs/AlunoMinAggregate";
import { AlunoSumAggregate } from "../outputs/AlunoSumAggregate";
export declare class AggregateAluno {
    _count: AlunoCountAggregate | null;
    _avg: AlunoAvgAggregate | null;
    _sum: AlunoSumAggregate | null;
    _min: AlunoMinAggregate | null;
    _max: AlunoMaxAggregate | null;
}
