import { AlertaAlunoListRelationFilter } from "../inputs/AlertaAlunoListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DocenteRelationFilter } from "../inputs/DocenteRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AlunoWhereInput {
    AND?: AlunoWhereInput[] | undefined;
    OR?: AlunoWhereInput[] | undefined;
    NOT?: AlunoWhereInput[] | undefined;
    id?: IntFilter | undefined;
    nomeCompleto?: StringFilter | undefined;
    matricula?: StringFilter | undefined;
    dataIngresso?: DateTimeFilter | undefined;
    dataLimite?: DateTimeFilter | undefined;
    cpf?: StringFilter | undefined;
    emailInstitucional?: StringNullableFilter | undefined;
    emailPessoal?: StringNullableFilter | undefined;
    ativo?: BoolFilter | undefined;
    orientador?: DocenteRelationFilter | undefined;
    orientadorId?: IntFilter | undefined;
    coorientador?: DocenteRelationFilter | undefined;
    coorientadorId?: IntNullableFilter | undefined;
    AlertaAluno?: AlertaAlunoListRelationFilter | undefined;
}
