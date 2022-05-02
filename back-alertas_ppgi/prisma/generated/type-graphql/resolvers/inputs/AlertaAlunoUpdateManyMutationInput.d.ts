import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class AlertaAlunoUpdateManyMutationInput {
    enviado?: BoolFieldUpdateOperationsInput | undefined;
    resolvido?: BoolFieldUpdateOperationsInput | undefined;
    ativo?: BoolFieldUpdateOperationsInput | undefined;
    dataEnvioEmail?: DateTimeFieldUpdateOperationsInput | undefined;
}
