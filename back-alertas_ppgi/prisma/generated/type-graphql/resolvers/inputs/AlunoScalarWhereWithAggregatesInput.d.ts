import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AlunoScalarWhereWithAggregatesInput {
    AND?: AlunoScalarWhereWithAggregatesInput[] | undefined;
    OR?: AlunoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AlunoScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    nomeCompleto?: StringWithAggregatesFilter | undefined;
    matricula?: StringWithAggregatesFilter | undefined;
    dataIngresso?: DateTimeWithAggregatesFilter | undefined;
    dataLimite?: DateTimeWithAggregatesFilter | undefined;
    cpf?: StringWithAggregatesFilter | undefined;
    emailInstitucional?: StringNullableWithAggregatesFilter | undefined;
    emailPessoal?: StringNullableWithAggregatesFilter | undefined;
    ativo?: BoolWithAggregatesFilter | undefined;
    orientadorId?: IntWithAggregatesFilter | undefined;
    coorientadorId?: IntNullableWithAggregatesFilter | undefined;
}
