import { AlertaAlunoCreateManyAlunoInputEnvelope } from "../inputs/AlertaAlunoCreateManyAlunoInputEnvelope";
import { AlertaAlunoCreateOrConnectWithoutAlunoInput } from "../inputs/AlertaAlunoCreateOrConnectWithoutAlunoInput";
import { AlertaAlunoCreateWithoutAlunoInput } from "../inputs/AlertaAlunoCreateWithoutAlunoInput";
import { AlertaAlunoScalarWhereInput } from "../inputs/AlertaAlunoScalarWhereInput";
import { AlertaAlunoUpdateManyWithWhereWithoutAlunoInput } from "../inputs/AlertaAlunoUpdateManyWithWhereWithoutAlunoInput";
import { AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput } from "../inputs/AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput";
import { AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput } from "../inputs/AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput";
import { AlertaAlunoWhereUniqueInput } from "../inputs/AlertaAlunoWhereUniqueInput";
export declare class AlertaAlunoUpdateManyWithoutAlunoInput {
    create?: AlertaAlunoCreateWithoutAlunoInput[] | undefined;
    connectOrCreate?: AlertaAlunoCreateOrConnectWithoutAlunoInput[] | undefined;
    upsert?: AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput[] | undefined;
    createMany?: AlertaAlunoCreateManyAlunoInputEnvelope | undefined;
    set?: AlertaAlunoWhereUniqueInput[] | undefined;
    disconnect?: AlertaAlunoWhereUniqueInput[] | undefined;
    delete?: AlertaAlunoWhereUniqueInput[] | undefined;
    connect?: AlertaAlunoWhereUniqueInput[] | undefined;
    update?: AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput[] | undefined;
    updateMany?: AlertaAlunoUpdateManyWithWhereWithoutAlunoInput[] | undefined;
    deleteMany?: AlertaAlunoScalarWhereInput[] | undefined;
}
