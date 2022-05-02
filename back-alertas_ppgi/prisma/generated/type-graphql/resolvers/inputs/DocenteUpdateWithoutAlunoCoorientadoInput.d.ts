import { AlunoUpdateManyWithoutOrientadorInput } from "../inputs/AlunoUpdateManyWithoutOrientadorInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DocenteUpdateWithoutAlunoCoorientadoInput {
    nomeCompleto?: StringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    AlunoOrientado?: AlunoUpdateManyWithoutOrientadorInput | undefined;
}
