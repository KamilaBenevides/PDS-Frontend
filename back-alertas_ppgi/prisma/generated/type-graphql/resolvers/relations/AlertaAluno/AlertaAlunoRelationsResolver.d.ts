import { Alerta } from "../../../models/Alerta";
import { AlertaAluno } from "../../../models/AlertaAluno";
import { Aluno } from "../../../models/Aluno";
export declare class AlertaAlunoRelationsResolver {
    aluno(alertaAluno: AlertaAluno, ctx: any): Promise<Aluno>;
    Alerta(alertaAluno: AlertaAluno, ctx: any): Promise<Alerta>;
}
