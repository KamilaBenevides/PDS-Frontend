import { AlunoUpdateManyWithoutCoorientadorInput } from "../inputs/AlunoUpdateManyWithoutCoorientadorInput";
import { AlunoUpdateManyWithoutOrientadorInput } from "../inputs/AlunoUpdateManyWithoutOrientadorInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DocenteUpdateInput {
    nomeCompleto?: StringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    AlunoOrientado?: AlunoUpdateManyWithoutOrientadorInput | undefined;
    AlunoCoorientado?: AlunoUpdateManyWithoutCoorientadorInput | undefined;
}
