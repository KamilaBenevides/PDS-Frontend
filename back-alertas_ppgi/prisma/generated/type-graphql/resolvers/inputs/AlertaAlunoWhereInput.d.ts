import { AlertaRelationFilter } from "../inputs/AlertaRelationFilter";
import { AlunoRelationFilter } from "../inputs/AlunoRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class AlertaAlunoWhereInput {
    AND?: AlertaAlunoWhereInput[] | undefined;
    OR?: AlertaAlunoWhereInput[] | undefined;
    NOT?: AlertaAlunoWhereInput[] | undefined;
    id?: IntFilter | undefined;
    aluno?: AlunoRelationFilter | undefined;
    alunoId?: IntFilter | undefined;
    Alerta?: AlertaRelationFilter | undefined;
    alertaId?: IntFilter | undefined;
    enviado?: BoolFilter | undefined;
    resolvido?: BoolFilter | undefined;
    ativo?: BoolFilter | undefined;
    dataEnvioEmail?: DateTimeFilter | undefined;
}
