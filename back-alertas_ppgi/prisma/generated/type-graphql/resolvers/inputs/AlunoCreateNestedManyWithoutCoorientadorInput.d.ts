import { AlunoCreateManyCoorientadorInputEnvelope } from "../inputs/AlunoCreateManyCoorientadorInputEnvelope";
import { AlunoCreateOrConnectWithoutCoorientadorInput } from "../inputs/AlunoCreateOrConnectWithoutCoorientadorInput";
import { AlunoCreateWithoutCoorientadorInput } from "../inputs/AlunoCreateWithoutCoorientadorInput";
import { AlunoWhereUniqueInput } from "../inputs/AlunoWhereUniqueInput";
export declare class AlunoCreateNestedManyWithoutCoorientadorInput {
    create?: AlunoCreateWithoutCoorientadorInput[] | undefined;
    connectOrCreate?: AlunoCreateOrConnectWithoutCoorientadorInput[] | undefined;
    createMany?: AlunoCreateManyCoorientadorInputEnvelope | undefined;
    connect?: AlunoWhereUniqueInput[] | undefined;
}
