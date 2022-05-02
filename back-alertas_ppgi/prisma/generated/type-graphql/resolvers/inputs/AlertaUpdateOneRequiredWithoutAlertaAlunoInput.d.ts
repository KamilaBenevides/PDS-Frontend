import { AlertaCreateOrConnectWithoutAlertaAlunoInput } from "../inputs/AlertaCreateOrConnectWithoutAlertaAlunoInput";
import { AlertaCreateWithoutAlertaAlunoInput } from "../inputs/AlertaCreateWithoutAlertaAlunoInput";
import { AlertaUpdateWithoutAlertaAlunoInput } from "../inputs/AlertaUpdateWithoutAlertaAlunoInput";
import { AlertaUpsertWithoutAlertaAlunoInput } from "../inputs/AlertaUpsertWithoutAlertaAlunoInput";
import { AlertaWhereUniqueInput } from "../inputs/AlertaWhereUniqueInput";
export declare class AlertaUpdateOneRequiredWithoutAlertaAlunoInput {
    create?: AlertaCreateWithoutAlertaAlunoInput | undefined;
    connectOrCreate?: AlertaCreateOrConnectWithoutAlertaAlunoInput | undefined;
    upsert?: AlertaUpsertWithoutAlertaAlunoInput | undefined;
    connect?: AlertaWhereUniqueInput | undefined;
    update?: AlertaUpdateWithoutAlertaAlunoInput | undefined;
}
