export declare class AlertaAlunoCreateManyInput {
    id?: number | undefined;
    alunoId: number;
    alertaId: number;
    enviado?: boolean | undefined;
    resolvido?: boolean | undefined;
    ativo?: boolean | undefined;
    dataEnvioEmail: Date;
}
