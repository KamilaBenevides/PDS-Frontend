import { DocenteCreateOrConnectWithoutAlunoCoorientadoInput } from "../inputs/DocenteCreateOrConnectWithoutAlunoCoorientadoInput";
import { DocenteCreateWithoutAlunoCoorientadoInput } from "../inputs/DocenteCreateWithoutAlunoCoorientadoInput";
import { DocenteUpdateWithoutAlunoCoorientadoInput } from "../inputs/DocenteUpdateWithoutAlunoCoorientadoInput";
import { DocenteUpsertWithoutAlunoCoorientadoInput } from "../inputs/DocenteUpsertWithoutAlunoCoorientadoInput";
import { DocenteWhereUniqueInput } from "../inputs/DocenteWhereUniqueInput";
export declare class DocenteUpdateOneWithoutAlunoCoorientadoInput {
    create?: DocenteCreateWithoutAlunoCoorientadoInput | undefined;
    connectOrCreate?: DocenteCreateOrConnectWithoutAlunoCoorientadoInput | undefined;
    upsert?: DocenteUpsertWithoutAlunoCoorientadoInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: DocenteWhereUniqueInput | undefined;
    update?: DocenteUpdateWithoutAlunoCoorientadoInput | undefined;
}
