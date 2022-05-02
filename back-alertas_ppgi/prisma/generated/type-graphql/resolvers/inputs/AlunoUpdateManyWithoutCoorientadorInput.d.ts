import { AlunoCreateManyCoorientadorInputEnvelope } from "../inputs/AlunoCreateManyCoorientadorInputEnvelope";
import { AlunoCreateOrConnectWithoutCoorientadorInput } from "../inputs/AlunoCreateOrConnectWithoutCoorientadorInput";
import { AlunoCreateWithoutCoorientadorInput } from "../inputs/AlunoCreateWithoutCoorientadorInput";
import { AlunoScalarWhereInput } from "../inputs/AlunoScalarWhereInput";
import { AlunoUpdateManyWithWhereWithoutCoorientadorInput } from "../inputs/AlunoUpdateManyWithWhereWithoutCoorientadorInput";
import { AlunoUpdateWithWhereUniqueWithoutCoorientadorInput } from "../inputs/AlunoUpdateWithWhereUniqueWithoutCoorientadorInput";
import { AlunoUpsertWithWhereUniqueWithoutCoorientadorInput } from "../inputs/AlunoUpsertWithWhereUniqueWithoutCoorientadorInput";
import { AlunoWhereUniqueInput } from "../inputs/AlunoWhereUniqueInput";
export declare class AlunoUpdateManyWithoutCoorientadorInput {
    create?: AlunoCreateWithoutCoorientadorInput[] | undefined;
    connectOrCreate?: AlunoCreateOrConnectWithoutCoorientadorInput[] | undefined;
    upsert?: AlunoUpsertWithWhereUniqueWithoutCoorientadorInput[] | undefined;
    createMany?: AlunoCreateManyCoorientadorInputEnvelope | undefined;
    set?: AlunoWhereUniqueInput[] | undefined;
    disconnect?: AlunoWhereUniqueInput[] | undefined;
    delete?: AlunoWhereUniqueInput[] | undefined;
    connect?: AlunoWhereUniqueInput[] | undefined;
    update?: AlunoUpdateWithWhereUniqueWithoutCoorientadorInput[] | undefined;
    updateMany?: AlunoUpdateManyWithWhereWithoutCoorientadorInput[] | undefined;
    deleteMany?: AlunoScalarWhereInput[] | undefined;
}
