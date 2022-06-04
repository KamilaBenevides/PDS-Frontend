import { ArgsType, Field, InputType, Int, ObjectType } from "type-graphql";

@InputType({
  isAbstract: true,
})
class FieldsCreateUser {
  @Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  nomeCompleto!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  password!: string;
}

@ArgsType()
export class CustomCreateUserArgs {
  @Field((_type) => FieldsCreateUser, {
    nullable: false,
  })
  data!: FieldsCreateUser;
}

@InputType({ isAbstract: true })
class FieldsLogin {
  @Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  password!: string;
}

@ArgsType()
export class CustomLoginArgs {
  @Field((_type) => FieldsLogin, {
    nullable: false,
  })
  data!: FieldsLogin;
}

@ObjectType("Login", {
  isAbstract: true,
})
export class LoginReturn {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  token!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  expiresIn!: string;
}
