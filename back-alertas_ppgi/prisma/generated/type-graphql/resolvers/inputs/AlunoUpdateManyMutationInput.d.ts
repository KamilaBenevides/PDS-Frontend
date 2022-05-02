import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AlunoUpdateManyMutationInput {
    nomeCompleto?: StringFieldUpdateOperationsInput | undefined;
    matricula?: StringFieldUpdateOperationsInput | undefined;
    dataIngresso?: DateTimeFieldUpdateOperationsInput | undefined;
    dataLimite?: DateTimeFieldUpdateOperationsInput | undefined;
    cpf?: StringFieldUpdateOperationsInput | undefined;
    emailInstitucional?: NullableStringFieldUpdateOperationsInput | undefined;
    emailPessoal?: NullableStringFieldUpdateOperationsInput | undefined;
    ativo?: BoolFieldUpdateOperationsInput | undefined;
}
