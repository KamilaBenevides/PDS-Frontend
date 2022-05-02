import { DocenteAvgAggregate } from "../outputs/DocenteAvgAggregate";
import { DocenteCountAggregate } from "../outputs/DocenteCountAggregate";
import { DocenteMaxAggregate } from "../outputs/DocenteMaxAggregate";
import { DocenteMinAggregate } from "../outputs/DocenteMinAggregate";
import { DocenteSumAggregate } from "../outputs/DocenteSumAggregate";
export declare class DocenteGroupBy {
    id: number;
    nomeCompleto: string;
    email: string | null;
    _count: DocenteCountAggregate | null;
    _avg: DocenteAvgAggregate | null;
    _sum: DocenteSumAggregate | null;
    _min: DocenteMinAggregate | null;
    _max: DocenteMaxAggregate | null;
}
