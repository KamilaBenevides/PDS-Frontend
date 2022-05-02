import { AlertaAvgAggregate } from "../outputs/AlertaAvgAggregate";
import { AlertaCountAggregate } from "../outputs/AlertaCountAggregate";
import { AlertaMaxAggregate } from "../outputs/AlertaMaxAggregate";
import { AlertaMinAggregate } from "../outputs/AlertaMinAggregate";
import { AlertaSumAggregate } from "../outputs/AlertaSumAggregate";
export declare class AggregateAlerta {
    _count: AlertaCountAggregate | null;
    _avg: AlertaAvgAggregate | null;
    _sum: AlertaSumAggregate | null;
    _min: AlertaMinAggregate | null;
    _max: AlertaMaxAggregate | null;
}
