import { Alerta } from "../../../models/Alerta";
import { AlertaAluno } from "../../../models/AlertaAluno";
import { AlertaAlertaAlunoArgs } from "./args/AlertaAlertaAlunoArgs";
export declare class AlertaRelationsResolver {
    AlertaAluno(alerta: Alerta, ctx: any, args: AlertaAlertaAlunoArgs): Promise<AlertaAluno[]>;
}
