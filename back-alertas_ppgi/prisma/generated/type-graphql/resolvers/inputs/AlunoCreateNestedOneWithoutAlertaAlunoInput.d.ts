import { AlunoCreateOrConnectWithoutAlertaAlunoInput } from "../inputs/AlunoCreateOrConnectWithoutAlertaAlunoInput";
import { AlunoCreateWithoutAlertaAlunoInput } from "../inputs/AlunoCreateWithoutAlertaAlunoInput";
import { AlunoWhereUniqueInput } from "../inputs/AlunoWhereUniqueInput";
export declare class AlunoCreateNestedOneWithoutAlertaAlunoInput {
    create?: AlunoCreateWithoutAlertaAlunoInput | undefined;
    connectOrCreate?: AlunoCreateOrConnectWithoutAlertaAlunoInput | undefined;
    connect?: AlunoWhereUniqueInput | undefined;
}
