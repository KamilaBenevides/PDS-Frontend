import { AlunoCreateOrConnectWithoutAlertaAlunoInput } from "../inputs/AlunoCreateOrConnectWithoutAlertaAlunoInput";
import { AlunoCreateWithoutAlertaAlunoInput } from "../inputs/AlunoCreateWithoutAlertaAlunoInput";
import { AlunoUpdateWithoutAlertaAlunoInput } from "../inputs/AlunoUpdateWithoutAlertaAlunoInput";
import { AlunoUpsertWithoutAlertaAlunoInput } from "../inputs/AlunoUpsertWithoutAlertaAlunoInput";
import { AlunoWhereUniqueInput } from "../inputs/AlunoWhereUniqueInput";
export declare class AlunoUpdateOneRequiredWithoutAlertaAlunoInput {
    create?: AlunoCreateWithoutAlertaAlunoInput | undefined;
    connectOrCreate?: AlunoCreateOrConnectWithoutAlertaAlunoInput | undefined;
    upsert?: AlunoUpsertWithoutAlertaAlunoInput | undefined;
    connect?: AlunoWhereUniqueInput | undefined;
    update?: AlunoUpdateWithoutAlertaAlunoInput | undefined;
}
