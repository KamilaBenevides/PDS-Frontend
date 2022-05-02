import { AlertaAlunoOrderByRelationAggregateInput } from "../inputs/AlertaAlunoOrderByRelationAggregateInput";
import { DocenteOrderByWithRelationInput } from "../inputs/DocenteOrderByWithRelationInput";
export declare class AlunoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nomeCompleto?: "asc" | "desc" | undefined;
    matricula?: "asc" | "desc" | undefined;
    dataIngresso?: "asc" | "desc" | undefined;
    dataLimite?: "asc" | "desc" | undefined;
    cpf?: "asc" | "desc" | undefined;
    emailInstitucional?: "asc" | "desc" | undefined;
    emailPessoal?: "asc" | "desc" | undefined;
    ativo?: "asc" | "desc" | undefined;
    orientador?: DocenteOrderByWithRelationInput | undefined;
    orientadorId?: "asc" | "desc" | undefined;
    coorientador?: DocenteOrderByWithRelationInput | undefined;
    coorientadorId?: "asc" | "desc" | undefined;
    AlertaAluno?: AlertaAlunoOrderByRelationAggregateInput | undefined;
}
