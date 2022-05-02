import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class AlertaAlunoScalarWhereWithAggregatesInput {
    AND?: AlertaAlunoScalarWhereWithAggregatesInput[] | undefined;
    OR?: AlertaAlunoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AlertaAlunoScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    alunoId?: IntWithAggregatesFilter | undefined;
    alertaId?: IntWithAggregatesFilter | undefined;
    enviado?: BoolWithAggregatesFilter | undefined;
    resolvido?: BoolWithAggregatesFilter | undefined;
    ativo?: BoolWithAggregatesFilter | undefined;
    dataEnvioEmail?: DateTimeWithAggregatesFilter | undefined;
}
