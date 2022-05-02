import { AlunoOrderByWithRelationInput } from "../../../inputs/AlunoOrderByWithRelationInput";
import { AlunoWhereInput } from "../../../inputs/AlunoWhereInput";
import { AlunoWhereUniqueInput } from "../../../inputs/AlunoWhereUniqueInput";
export declare class DocenteAlunoCoorientadoArgs {
    where?: AlunoWhereInput | undefined;
    orderBy?: AlunoOrderByWithRelationInput[] | undefined;
    cursor?: AlunoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nomeCompleto" | "matricula" | "dataIngresso" | "dataLimite" | "cpf" | "emailInstitucional" | "emailPessoal" | "ativo" | "orientadorId" | "coorientadorId"> | undefined;
}
