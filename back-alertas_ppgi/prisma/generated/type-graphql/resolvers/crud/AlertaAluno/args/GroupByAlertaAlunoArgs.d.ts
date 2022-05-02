import { AlertaAlunoOrderByWithAggregationInput } from "../../../inputs/AlertaAlunoOrderByWithAggregationInput";
import { AlertaAlunoScalarWhereWithAggregatesInput } from "../../../inputs/AlertaAlunoScalarWhereWithAggregatesInput";
import { AlertaAlunoWhereInput } from "../../../inputs/AlertaAlunoWhereInput";
export declare class GroupByAlertaAlunoArgs {
    where?: AlertaAlunoWhereInput | undefined;
    orderBy?: AlertaAlunoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "alunoId" | "alertaId" | "enviado" | "resolvido" | "ativo" | "dataEnvioEmail">;
    having?: AlertaAlunoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
