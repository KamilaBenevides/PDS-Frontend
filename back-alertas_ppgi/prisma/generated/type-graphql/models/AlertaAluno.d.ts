import { Alerta } from "../models/Alerta";
import { Aluno } from "../models/Aluno";
export declare class AlertaAluno {
    id: number;
    aluno?: Aluno;
    alunoId: number;
    Alerta?: Alerta;
    alertaId: number;
    enviado: boolean;
    resolvido: boolean;
    ativo: boolean;
    dataEnvioEmail: Date;
}
