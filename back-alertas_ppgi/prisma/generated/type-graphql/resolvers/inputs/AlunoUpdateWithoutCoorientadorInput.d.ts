import { AlertaAlunoUpdateManyWithoutAlunoInput } from "../inputs/AlertaAlunoUpdateManyWithoutAlunoInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocenteUpdateOneRequiredWithoutAlunoOrientadoInput } from "../inputs/DocenteUpdateOneRequiredWithoutAlunoOrientadoInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AlunoUpdateWithoutCoorientadorInput {
    nomeCompleto?: StringFieldUpdateOperationsInput | undefined;
    matricula?: StringFieldUpdateOperationsInput | undefined;
    dataIngresso?: DateTimeFieldUpdateOperationsInput | undefined;
    dataLimite?: DateTimeFieldUpdateOperationsInput | undefined;
    cpf?: StringFieldUpdateOperationsInput | undefined;
    emailInstitucional?: NullableStringFieldUpdateOperationsInput | undefined;
    emailPessoal?: NullableStringFieldUpdateOperationsInput | undefined;
    ativo?: BoolFieldUpdateOperationsInput | undefined;
    orientador?: DocenteUpdateOneRequiredWithoutAlunoOrientadoInput | undefined;
    AlertaAluno?: AlertaAlunoUpdateManyWithoutAlunoInput | undefined;
}
