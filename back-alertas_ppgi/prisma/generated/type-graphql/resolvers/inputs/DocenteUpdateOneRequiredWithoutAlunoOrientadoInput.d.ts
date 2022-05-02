import { DocenteCreateOrConnectWithoutAlunoOrientadoInput } from "../inputs/DocenteCreateOrConnectWithoutAlunoOrientadoInput";
import { DocenteCreateWithoutAlunoOrientadoInput } from "../inputs/DocenteCreateWithoutAlunoOrientadoInput";
import { DocenteUpdateWithoutAlunoOrientadoInput } from "../inputs/DocenteUpdateWithoutAlunoOrientadoInput";
import { DocenteUpsertWithoutAlunoOrientadoInput } from "../inputs/DocenteUpsertWithoutAlunoOrientadoInput";
import { DocenteWhereUniqueInput } from "../inputs/DocenteWhereUniqueInput";
export declare class DocenteUpdateOneRequiredWithoutAlunoOrientadoInput {
    create?: DocenteCreateWithoutAlunoOrientadoInput | undefined;
    connectOrCreate?: DocenteCreateOrConnectWithoutAlunoOrientadoInput | undefined;
    upsert?: DocenteUpsertWithoutAlunoOrientadoInput | undefined;
    connect?: DocenteWhereUniqueInput | undefined;
    update?: DocenteUpdateWithoutAlunoOrientadoInput | undefined;
}
