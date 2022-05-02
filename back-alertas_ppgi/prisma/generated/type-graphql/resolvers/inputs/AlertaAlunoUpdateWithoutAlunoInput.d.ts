import { AlertaUpdateOneRequiredWithoutAlertaAlunoInput } from "../inputs/AlertaUpdateOneRequiredWithoutAlertaAlunoInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class AlertaAlunoUpdateWithoutAlunoInput {
    Alerta?: AlertaUpdateOneRequiredWithoutAlertaAlunoInput | undefined;
    enviado?: BoolFieldUpdateOperationsInput | undefined;
    resolvido?: BoolFieldUpdateOperationsInput | undefined;
    ativo?: BoolFieldUpdateOperationsInput | undefined;
    dataEnvioEmail?: DateTimeFieldUpdateOperationsInput | undefined;
}
