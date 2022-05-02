import { AlunoOrderByWithAggregationInput } from "../../../inputs/AlunoOrderByWithAggregationInput";
import { AlunoScalarWhereWithAggregatesInput } from "../../../inputs/AlunoScalarWhereWithAggregatesInput";
import { AlunoWhereInput } from "../../../inputs/AlunoWhereInput";
export declare class GroupByAlunoArgs {
    where?: AlunoWhereInput | undefined;
    orderBy?: AlunoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nomeCompleto" | "matricula" | "dataIngresso" | "dataLimite" | "cpf" | "emailInstitucional" | "emailPessoal" | "ativo" | "orientadorId" | "coorientadorId">;
    having?: AlunoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
