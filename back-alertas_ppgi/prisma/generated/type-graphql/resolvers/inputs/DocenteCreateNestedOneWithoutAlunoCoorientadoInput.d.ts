import { DocenteCreateOrConnectWithoutAlunoCoorientadoInput } from "../inputs/DocenteCreateOrConnectWithoutAlunoCoorientadoInput";
import { DocenteCreateWithoutAlunoCoorientadoInput } from "../inputs/DocenteCreateWithoutAlunoCoorientadoInput";
import { DocenteWhereUniqueInput } from "../inputs/DocenteWhereUniqueInput";
export declare class DocenteCreateNestedOneWithoutAlunoCoorientadoInput {
    create?: DocenteCreateWithoutAlunoCoorientadoInput | undefined;
    connectOrCreate?: DocenteCreateOrConnectWithoutAlunoCoorientadoInput | undefined;
    connect?: DocenteWhereUniqueInput | undefined;
}
