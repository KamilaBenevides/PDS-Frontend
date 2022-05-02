import { DocenteCreateOrConnectWithoutAlunoOrientadoInput } from "../inputs/DocenteCreateOrConnectWithoutAlunoOrientadoInput";
import { DocenteCreateWithoutAlunoOrientadoInput } from "../inputs/DocenteCreateWithoutAlunoOrientadoInput";
import { DocenteWhereUniqueInput } from "../inputs/DocenteWhereUniqueInput";
export declare class DocenteCreateNestedOneWithoutAlunoOrientadoInput {
    create?: DocenteCreateWithoutAlunoOrientadoInput | undefined;
    connectOrCreate?: DocenteCreateOrConnectWithoutAlunoOrientadoInput | undefined;
    connect?: DocenteWhereUniqueInput | undefined;
}
