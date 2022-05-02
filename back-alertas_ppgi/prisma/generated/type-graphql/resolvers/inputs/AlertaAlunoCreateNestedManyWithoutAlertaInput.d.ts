import { AlertaAlunoCreateManyAlertaInputEnvelope } from "../inputs/AlertaAlunoCreateManyAlertaInputEnvelope";
import { AlertaAlunoCreateOrConnectWithoutAlertaInput } from "../inputs/AlertaAlunoCreateOrConnectWithoutAlertaInput";
import { AlertaAlunoCreateWithoutAlertaInput } from "../inputs/AlertaAlunoCreateWithoutAlertaInput";
import { AlertaAlunoWhereUniqueInput } from "../inputs/AlertaAlunoWhereUniqueInput";
export declare class AlertaAlunoCreateNestedManyWithoutAlertaInput {
    create?: AlertaAlunoCreateWithoutAlertaInput[] | undefined;
    connectOrCreate?: AlertaAlunoCreateOrConnectWithoutAlertaInput[] | undefined;
    createMany?: AlertaAlunoCreateManyAlertaInputEnvelope | undefined;
    connect?: AlertaAlunoWhereUniqueInput[] | undefined;
}
