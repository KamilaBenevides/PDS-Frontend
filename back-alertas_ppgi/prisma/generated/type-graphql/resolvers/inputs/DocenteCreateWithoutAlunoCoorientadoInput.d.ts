import { AlunoCreateNestedManyWithoutOrientadorInput } from "../inputs/AlunoCreateNestedManyWithoutOrientadorInput";
export declare class DocenteCreateWithoutAlunoCoorientadoInput {
    nomeCompleto: string;
    email?: string | undefined;
    AlunoOrientado?: AlunoCreateNestedManyWithoutOrientadorInput | undefined;
}
