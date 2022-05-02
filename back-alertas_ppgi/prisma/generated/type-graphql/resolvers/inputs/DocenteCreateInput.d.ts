import { AlunoCreateNestedManyWithoutCoorientadorInput } from "../inputs/AlunoCreateNestedManyWithoutCoorientadorInput";
import { AlunoCreateNestedManyWithoutOrientadorInput } from "../inputs/AlunoCreateNestedManyWithoutOrientadorInput";
export declare class DocenteCreateInput {
    nomeCompleto: string;
    email?: string | undefined;
    AlunoOrientado?: AlunoCreateNestedManyWithoutOrientadorInput | undefined;
    AlunoCoorientado?: AlunoCreateNestedManyWithoutCoorientadorInput | undefined;
}
