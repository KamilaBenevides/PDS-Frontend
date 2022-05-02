import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class AlertaAlunoScalarWhereInput {
    AND?: AlertaAlunoScalarWhereInput[] | undefined;
    OR?: AlertaAlunoScalarWhereInput[] | undefined;
    NOT?: AlertaAlunoScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    alunoId?: IntFilter | undefined;
    alertaId?: IntFilter | undefined;
    enviado?: BoolFilter | undefined;
    resolvido?: BoolFilter | undefined;
    ativo?: BoolFilter | undefined;
    dataEnvioEmail?: DateTimeFilter | undefined;
}
