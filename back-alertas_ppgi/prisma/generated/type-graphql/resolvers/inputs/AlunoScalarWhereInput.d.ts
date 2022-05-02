import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AlunoScalarWhereInput {
    AND?: AlunoScalarWhereInput[] | undefined;
    OR?: AlunoScalarWhereInput[] | undefined;
    NOT?: AlunoScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    nomeCompleto?: StringFilter | undefined;
    matricula?: StringFilter | undefined;
    dataIngresso?: DateTimeFilter | undefined;
    dataLimite?: DateTimeFilter | undefined;
    cpf?: StringFilter | undefined;
    emailInstitucional?: StringNullableFilter | undefined;
    emailPessoal?: StringNullableFilter | undefined;
    ativo?: BoolFilter | undefined;
    orientadorId?: IntFilter | undefined;
    coorientadorId?: IntNullableFilter | undefined;
}
