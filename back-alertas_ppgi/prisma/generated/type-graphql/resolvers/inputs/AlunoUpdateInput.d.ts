import { AlertaAlunoUpdateManyWithoutAlunoInput } from "../inputs/AlertaAlunoUpdateManyWithoutAlunoInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocenteUpdateOneRequiredWithoutAlunoOrientadoInput } from "../inputs/DocenteUpdateOneRequiredWithoutAlunoOrientadoInput";
import { DocenteUpdateOneWithoutAlunoCoorientadoInput } from "../inputs/DocenteUpdateOneWithoutAlunoCoorientadoInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AlunoUpdateInput {
    nomeCompleto?: StringFieldUpdateOperationsInput | undefined;
    matricula?: StringFieldUpdateOperationsInput | undefined;
    dataIngresso?: DateTimeFieldUpdateOperationsInput | undefined;
    dataLimite?: DateTimeFieldUpdateOperationsInput | undefined;
    cpf?: StringFieldUpdateOperationsInput | undefined;
    emailInstitucional?: NullableStringFieldUpdateOperationsInput | undefined;
    emailPessoal?: NullableStringFieldUpdateOperationsInput | undefined;
    ativo?: BoolFieldUpdateOperationsInput | undefined;
    orientador?: DocenteUpdateOneRequiredWithoutAlunoOrientadoInput | undefined;
    coorientador?: DocenteUpdateOneWithoutAlunoCoorientadoInput | undefined;
    AlertaAluno?: AlertaAlunoUpdateManyWithoutAlunoInput | undefined;
}
