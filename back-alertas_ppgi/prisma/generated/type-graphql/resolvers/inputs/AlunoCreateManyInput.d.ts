export declare class AlunoCreateManyInput {
    id?: number | undefined;
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional?: string | undefined;
    emailPessoal?: string | undefined;
    ativo?: boolean | undefined;
    orientadorId: number;
    coorientadorId?: number | undefined;
}
