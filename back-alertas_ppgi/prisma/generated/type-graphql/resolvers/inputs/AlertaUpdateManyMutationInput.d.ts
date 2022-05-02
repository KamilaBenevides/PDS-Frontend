import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AlertaUpdateManyMutationInput {
    diasIntervalo?: IntFieldUpdateOperationsInput | undefined;
    nome?: StringFieldUpdateOperationsInput | undefined;
    corpoEmail?: NullableStringFieldUpdateOperationsInput | undefined;
}
