import { AlertaAlunoCreateNestedManyWithoutAlunoInput } from "../inputs/AlertaAlunoCreateNestedManyWithoutAlunoInput";
import { DocenteCreateNestedOneWithoutAlunoCoorientadoInput } from "../inputs/DocenteCreateNestedOneWithoutAlunoCoorientadoInput";
export declare class AlunoCreateWithoutOrientadorInput {
    nomeCompleto: string;
    matricula: string;
    dataIngresso: Date;
    dataLimite: Date;
    cpf: string;
    emailInstitucional?: string | undefined;
    emailPessoal?: string | undefined;
    ativo?: boolean | undefined;
    coorientador?: DocenteCreateNestedOneWithoutAlunoCoorientadoInput | undefined;
    AlertaAluno?: AlertaAlunoCreateNestedManyWithoutAlunoInput | undefined;
}
