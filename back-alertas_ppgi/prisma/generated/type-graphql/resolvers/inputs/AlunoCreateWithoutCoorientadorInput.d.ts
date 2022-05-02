import { AlertaAlunoCreateNestedManyWithoutAlunoInput } from "../inputs/AlertaAlunoCreateNestedManyWithoutAlunoInput";
import { DocenteCreateNestedOneWithoutAlunoOrientadoInput } from "../inputs/DocenteCreateNestedOneWithoutAlunoOrientadoInput";
export declare class AlunoCreateWithoutCoorientadorInput {
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional?: string | undefined;
    emailPessoal?: string | undefined;
    ativo?: boolean | undefined;
    orientador: DocenteCreateNestedOneWithoutAlunoOrientadoInput;
    AlertaAluno?: AlertaAlunoCreateNestedManyWithoutAlunoInput | undefined;
}
