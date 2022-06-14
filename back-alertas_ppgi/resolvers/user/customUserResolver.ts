import bcrypt from "bcrypt";
import { ApolloError, UserInputError } from "apollo-server";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../utils/context";
import {
  CustomCreateUserArgs,
  CustomLoginArgs,
  LoginReturn,
} from "./customArgs";
import { createToken } from "./token";

@Resolver()
export class customUserResolver {
  @Mutation(() => Boolean)
  async customCreateUser(
    @Ctx() { prisma }: Context,
    @Args() args: CustomCreateUserArgs
  ) {
    const {
      data: { nomeCompleto, password, username },
    } = args;

    if (!nomeCompleto || nomeCompleto.trim().length < 5) {
      throw new UserInputError("Nome completo deve ter mais de 5 letras.");
    }

    if (!password || password.trim().length < 8) {
      throw new UserInputError("Senha deve ter mais de 8 letras ou números.");
    }

    if (!username || username.trim().length < 5) {
      throw new UserInputError(
        "Username deve ter mais de 5 letras ou números."
      );
    }

    const searchForUser = await prisma.user.findFirst({
      where: {
        username: { equals: username },
      },
    });

    if (searchForUser) {
      throw new UserInputError(
        "Este username não está mais disponível. Por favor, utilise outro."
      );
    }

    let salt: string, passwordHash: string;

    try {
      salt = await bcrypt.genSalt();

      passwordHash = await bcrypt.hash(password, salt);
    } catch (err) {
      console.error("[ERROR] Generating password -", err);
      throw new ApolloError("Não foi possível criar um usuário.");
    }

    await prisma.user.create({
      data: {
        nomeCompleto: nomeCompleto,
        passwordHash: passwordHash,
        username: username,
      },
    });

    return true;
  }

  @Mutation(() => LoginReturn)
  async customLogin(@Ctx() { prisma }: Context, @Args() args: CustomLoginArgs) {
    const defaultErrorText = "Seu usuário ou sua senha estão incorretos.";
    const {
      data: { password, username },
    } = args;

    if (!username || !password) {
      throw new UserInputError(defaultErrorText);
    }

    const user = await prisma.user.findFirst({
      where: { username: { equals: username } },
    });

    if (!user) {
      throw new UserInputError(defaultErrorText);
    }

    const result = await bcrypt.compare(password, user.passwordHash);

    if (!result) {
      throw new UserInputError(defaultErrorText);
    }

    return createToken(user);
  }
}
