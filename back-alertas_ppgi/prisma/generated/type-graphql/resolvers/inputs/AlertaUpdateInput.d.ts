import { AlertaAlunoUpdateManyWithoutAlertaInput } from "../inputs/AlertaAlunoUpdateManyWithoutAlertaInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AlertaUpdateInput {
    diasIntervalo?: IntFieldUpdateOperationsInput | undefined;
    nome?: StringFieldUpdateOperationsInput | undefined;
    corpoEmail?: NullableStringFieldUpdateOperationsInput | undefined;
    AlertaAluno?: AlertaAlunoUpdateManyWithoutAlertaInput | undefined;
}
