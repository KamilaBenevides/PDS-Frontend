import { AlertaCreateOrConnectWithoutAlertaAlunoInput } from "../inputs/AlertaCreateOrConnectWithoutAlertaAlunoInput";
import { AlertaCreateWithoutAlertaAlunoInput } from "../inputs/AlertaCreateWithoutAlertaAlunoInput";
import { AlertaWhereUniqueInput } from "../inputs/AlertaWhereUniqueInput";
export declare class AlertaCreateNestedOneWithoutAlertaAlunoInput {
    create?: AlertaCreateWithoutAlertaAlunoInput | undefined;
    connectOrCreate?: AlertaCreateOrConnectWithoutAlertaAlunoInput | undefined;
    connect?: AlertaWhereUniqueInput | undefined;
}
