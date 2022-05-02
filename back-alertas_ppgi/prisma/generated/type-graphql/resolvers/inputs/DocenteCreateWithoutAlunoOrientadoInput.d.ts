import { AlunoCreateNestedManyWithoutCoorientadorInput } from "../inputs/AlunoCreateNestedManyWithoutCoorientadorInput";
export declare class DocenteCreateWithoutAlunoOrientadoInput {
    nomeCompleto: string;
    email?: string | undefined;
    AlunoCoorientado?: AlunoCreateNestedManyWithoutCoorientadorInput | undefined;
}
