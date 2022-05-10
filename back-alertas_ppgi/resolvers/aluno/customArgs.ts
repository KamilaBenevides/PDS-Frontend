import { ArgsType, Field, InputType, Int } from "type-graphql";

@InputType({
  isAbstract: true,
})
export class FieldsCreateAluno {
  @Field((_type) => String, {
    nullable: false,
  })
  nomeCompleto!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  matricula!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  dataIngresso!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  cpf!: string;

  @Field((_type) => String, {
    nullable: true,
  })
  emailInstitucional?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  emailPessoal?: string | undefined;

  @Field((_type) => Int, {
    nullable: false,
  })
  orientadorId!: number;

  @Field((_type) => Int, {
    nullable: true,
  })
  coorientadorId?: number | undefined;
}

@ArgsType()
export class CustomCreateAlunoInput {
  @Field((_type) => FieldsCreateAluno, {
    nullable: false,
  })
  data!: FieldsCreateAluno;
}
