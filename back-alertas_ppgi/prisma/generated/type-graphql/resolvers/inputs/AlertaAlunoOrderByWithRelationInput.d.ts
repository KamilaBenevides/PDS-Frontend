import { AlertaOrderByWithRelationInput } from "../inputs/AlertaOrderByWithRelationInput";
import { AlunoOrderByWithRelationInput } from "../inputs/AlunoOrderByWithRelationInput";
export declare class AlertaAlunoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    aluno?: AlunoOrderByWithRelationInput | undefined;
    alunoId?: "asc" | "desc" | undefined;
    Alerta?: AlertaOrderByWithRelationInput | undefined;
    alertaId?: "asc" | "desc" | undefined;
    enviado?: "asc" | "desc" | undefined;
    resolvido?: "asc" | "desc" | undefined;
    ativo?: "asc" | "desc" | undefined;
    dataEnvioEmail?: "asc" | "desc" | undefined;
}
