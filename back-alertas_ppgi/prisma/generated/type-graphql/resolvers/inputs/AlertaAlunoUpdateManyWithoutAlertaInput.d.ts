import { AlertaAlunoCreateManyAlertaInputEnvelope } from "../inputs/AlertaAlunoCreateManyAlertaInputEnvelope";
import { AlertaAlunoCreateOrConnectWithoutAlertaInput } from "../inputs/AlertaAlunoCreateOrConnectWithoutAlertaInput";
import { AlertaAlunoCreateWithoutAlertaInput } from "../inputs/AlertaAlunoCreateWithoutAlertaInput";
import { AlertaAlunoScalarWhereInput } from "../inputs/AlertaAlunoScalarWhereInput";
import { AlertaAlunoUpdateManyWithWhereWithoutAlertaInput } from "../inputs/AlertaAlunoUpdateManyWithWhereWithoutAlertaInput";
import { AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput } from "../inputs/AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput";
import { AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput } from "../inputs/AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput";
import { AlertaAlunoWhereUniqueInput } from "../inputs/AlertaAlunoWhereUniqueInput";
export declare class AlertaAlunoUpdateManyWithoutAlertaInput {
    create?: AlertaAlunoCreateWithoutAlertaInput[] | undefined;
    connectOrCreate?: AlertaAlunoCreateOrConnectWithoutAlertaInput[] | undefined;
    upsert?: AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput[] | undefined;
    createMany?: AlertaAlunoCreateManyAlertaInputEnvelope | undefined;
    set?: AlertaAlunoWhereUniqueInput[] | undefined;
    disconnect?: AlertaAlunoWhereUniqueInput[] | undefined;
    delete?: AlertaAlunoWhereUniqueInput[] | undefined;
    connect?: AlertaAlunoWhereUniqueInput[] | undefined;
    update?: AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput[] | undefined;
    updateMany?: AlertaAlunoUpdateManyWithWhereWithoutAlertaInput[] | undefined;
    deleteMany?: AlertaAlunoScalarWhereInput[] | undefined;
}
