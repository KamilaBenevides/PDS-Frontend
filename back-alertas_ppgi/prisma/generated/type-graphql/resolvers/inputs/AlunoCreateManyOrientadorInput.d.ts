export declare class AlunoCreateManyOrientadorInput {
    id?: number | undefined;
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional?: string | undefined;
    emailPessoal?: string | undefined;
    ativo?: boolean | undefined;
    coorientadorId?: number | undefined;
}
