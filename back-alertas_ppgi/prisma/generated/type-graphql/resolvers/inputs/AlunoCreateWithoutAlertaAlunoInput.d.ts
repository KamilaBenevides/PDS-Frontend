import { DocenteCreateNestedOneWithoutAlunoCoorientadoInput } from "../inputs/DocenteCreateNestedOneWithoutAlunoCoorientadoInput";
import { DocenteCreateNestedOneWithoutAlunoOrientadoInput } from "../inputs/DocenteCreateNestedOneWithoutAlunoOrientadoInput";
export declare class AlunoCreateWithoutAlertaAlunoInput {
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional?: string | undefined;
    emailPessoal?: string | undefined;
    ativo?: boolean | undefined;
    orientador: DocenteCreateNestedOneWithoutAlunoOrientadoInput;
    coorientador?: DocenteCreateNestedOneWithoutAlunoCoorientadoInput | undefined;
}
