import { AlunoCreateManyOrientadorInputEnvelope } from "../inputs/AlunoCreateManyOrientadorInputEnvelope";
import { AlunoCreateOrConnectWithoutOrientadorInput } from "../inputs/AlunoCreateOrConnectWithoutOrientadorInput";
import { AlunoCreateWithoutOrientadorInput } from "../inputs/AlunoCreateWithoutOrientadorInput";
import { AlunoScalarWhereInput } from "../inputs/AlunoScalarWhereInput";
import { AlunoUpdateManyWithWhereWithoutOrientadorInput } from "../inputs/AlunoUpdateManyWithWhereWithoutOrientadorInput";
import { AlunoUpdateWithWhereUniqueWithoutOrientadorInput } from "../inputs/AlunoUpdateWithWhereUniqueWithoutOrientadorInput";
import { AlunoUpsertWithWhereUniqueWithoutOrientadorInput } from "../inputs/AlunoUpsertWithWhereUniqueWithoutOrientadorInput";
import { AlunoWhereUniqueInput } from "../inputs/AlunoWhereUniqueInput";
export declare class AlunoUpdateManyWithoutOrientadorInput {
    create?: AlunoCreateWithoutOrientadorInput[] | undefined;
    connectOrCreate?: AlunoCreateOrConnectWithoutOrientadorInput[] | undefined;
    upsert?: AlunoUpsertWithWhereUniqueWithoutOrientadorInput[] | undefined;
    createMany?: AlunoCreateManyOrientadorInputEnvelope | undefined;
    set?: AlunoWhereUniqueInput[] | undefined;
    disconnect?: AlunoWhereUniqueInput[] | undefined;
    delete?: AlunoWhereUniqueInput[] | undefined;
    connect?: AlunoWhereUniqueInput[] | undefined;
    update?: AlunoUpdateWithWhereUniqueWithoutOrientadorInput[] | undefined;
    updateMany?: AlunoUpdateManyWithWhereWithoutOrientadorInput[] | undefined;
    deleteMany?: AlunoScalarWhereInput[] | undefined;
}
