import { AlunoListRelationFilter } from "../inputs/AlunoListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DocenteWhereInput {
    AND?: DocenteWhereInput[] | undefined;
    OR?: DocenteWhereInput[] | undefined;
    NOT?: DocenteWhereInput[] | undefined;
    id?: IntFilter | undefined;
    nomeCompleto?: StringFilter | undefined;
    email?: StringNullableFilter | undefined;
    AlunoOrientado?: AlunoListRelationFilter | undefined;
    AlunoCoorientado?: AlunoListRelationFilter | undefined;
}
