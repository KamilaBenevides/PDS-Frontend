import { ArgsType, Field, InputType, Int } from "type-graphql";

@InputType({
  isAbstract: true,
})
class FieldsCreateAluno {
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
    nullable: true,
  })
  orientadorId?: number;

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

@InputType({
  isAbstract: true,
})
class FieldsUpdateAluno {
  @Field((_type) => String, {
    nullable: true,
  })
  nomeCompleto?: string;

  @Field((_type) => String, {
    nullable: true,
  })
  matricula?: string;

  @Field((_type) => Date, {
    nullable: true,
  })
  dataIngresso?: Date;

  @Field((_type) => String, {
    nullable: true,
  })
  cpf?: string;

  @Field((_type) => String, {
    nullable: true,
  })
  emailInstitucional?: string | undefined;

  @Field((_type) => String, {
    nullable: true,
  })
  emailPessoal?: string | undefined;

  @Field((_type) => Int, {
    nullable: true,
  })
  orientadorId?: number;

  @Field((_type) => Int, {
    nullable: true,
  })
  coorientadorId?: number | undefined;

  @Field((_type) => Boolean, {
    nullable: true,
  })
  ativo?: boolean;
}

@ArgsType()
export class CustomUpdateAluno {
  @Field((_type) => FieldsUpdateAluno, {
    nullable: false,
  })
  data!: FieldsUpdateAluno;

  @Field((_type) => Int, {
    nullable: false,
  })
  alunoId!: number;
}

@ArgsType()
export class SendAlertaAluno {
  @Field((_type) => Int, {
    nullable: false,
  })
  alertaAlunoId!: number;
}

@ArgsType()
export class SendManyAlertaAluno {
  @Field((_type) => [Int], {
    nullable: false,
  })
  alertaAlunoIds!: Array<number>;
}