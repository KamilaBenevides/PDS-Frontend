import { shield, allow, deny, rule } from "graphql-shield";
import { validateTokenAndUser } from "../user/token";
import { Context } from "./context";

const isLogged = rule({ cache: "no_cache" })(
  async (parent, args, ctx: Context, info) => {
    const token = ctx.headers?.authorization;

    return validateTokenAndUser(ctx.prisma, token);
  }
);

export const permissions = shield(
  {
    Query: {
      "*": isLogged,
    },
    Mutation: {
      "*": isLogged,
      customLogin: allow,
    },
  },
  {
    allowExternalErrors: true,
  }
);
