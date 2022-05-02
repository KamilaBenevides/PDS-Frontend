import { AlunoUpdateOneRequiredWithoutAlertaAlunoInput } from "../inputs/AlunoUpdateOneRequiredWithoutAlertaAlunoInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class AlertaAlunoUpdateWithoutAlertaInput {
    aluno?: AlunoUpdateOneRequiredWithoutAlertaAlunoInput | undefined;
    enviado?: BoolFieldUpdateOperationsInput | undefined;
    resolvido?: BoolFieldUpdateOperationsInput | undefined;
    ativo?: BoolFieldUpdateOperationsInput | undefined;
    dataEnvioEmail?: DateTimeFieldUpdateOperationsInput | undefined;
}
