import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AlertaScalarWhereWithAggregatesInput {
    AND?: AlertaScalarWhereWithAggregatesInput[] | undefined;
    OR?: AlertaScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AlertaScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    diasIntervalo?: IntWithAggregatesFilter | undefined;
    nome?: StringWithAggregatesFilter | undefined;
    corpoEmail?: StringNullableWithAggregatesFilter | undefined;
}
