import { AlertaAlunoCreateManyAlunoInputEnvelope } from "../inputs/AlertaAlunoCreateManyAlunoInputEnvelope";
import { AlertaAlunoCreateOrConnectWithoutAlunoInput } from "../inputs/AlertaAlunoCreateOrConnectWithoutAlunoInput";
import { AlertaAlunoCreateWithoutAlunoInput } from "../inputs/AlertaAlunoCreateWithoutAlunoInput";
import { AlertaAlunoWhereUniqueInput } from "../inputs/AlertaAlunoWhereUniqueInput";
export declare class AlertaAlunoCreateNestedManyWithoutAlunoInput {
    create?: AlertaAlunoCreateWithoutAlunoInput[] | undefined;
    connectOrCreate?: AlertaAlunoCreateOrConnectWithoutAlunoInput[] | undefined;
    createMany?: AlertaAlunoCreateManyAlunoInputEnvelope | undefined;
    connect?: AlertaAlunoWhereUniqueInput[] | undefined;
}
