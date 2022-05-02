import { AlunoUpdateManyWithoutCoorientadorInput } from "../inputs/AlunoUpdateManyWithoutCoorientadorInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DocenteUpdateWithoutAlunoOrientadoInput {
    nomeCompleto?: StringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    AlunoCoorientado?: AlunoUpdateManyWithoutCoorientadorInput | undefined;
}
