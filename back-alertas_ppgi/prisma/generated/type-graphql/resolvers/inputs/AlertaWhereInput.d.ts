import { AlertaAlunoListRelationFilter } from "../inputs/AlertaAlunoListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AlertaWhereInput {
    AND?: AlertaWhereInput[] | undefined;
    OR?: AlertaWhereInput[] | undefined;
    NOT?: AlertaWhereInput[] | undefined;
    id?: IntFilter | undefined;
    diasIntervalo?: IntFilter | undefined;
    nome?: StringFilter | undefined;
    corpoEmail?: StringNullableFilter | undefined;
    AlertaAluno?: AlertaAlunoListRelationFilter | undefined;
}
