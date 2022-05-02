import { AlunoCreateManyOrientadorInputEnvelope } from "../inputs/AlunoCreateManyOrientadorInputEnvelope";
import { AlunoCreateOrConnectWithoutOrientadorInput } from "../inputs/AlunoCreateOrConnectWithoutOrientadorInput";
import { AlunoCreateWithoutOrientadorInput } from "../inputs/AlunoCreateWithoutOrientadorInput";
import { AlunoWhereUniqueInput } from "../inputs/AlunoWhereUniqueInput";
export declare class AlunoCreateNestedManyWithoutOrientadorInput {
    create?: AlunoCreateWithoutOrientadorInput[] | undefined;
    connectOrCreate?: AlunoCreateOrConnectWithoutOrientadorInput[] | undefined;
    createMany?: AlunoCreateManyOrientadorInputEnvelope | undefined;
    connect?: AlunoWhereUniqueInput[] | undefined;
}
