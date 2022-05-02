import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DocenteScalarWhereWithAggregatesInput {
    AND?: DocenteScalarWhereWithAggregatesInput[] | undefined;
    OR?: DocenteScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DocenteScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    nomeCompleto?: StringWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
}
