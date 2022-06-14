import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { applyMiddleware } from "graphql-middleware";

import { resolvers } from "./prisma/generated/type-graphql";
import { customAlunoResolver } from "./resolvers/aluno/customAlunoResolver";
import { sendAlertaAlunoResolver } from "./resolvers/aluno/sendAlertaAluno";
import { customUserResolver } from "./resolvers/user/customUserResolver";
import { permissions } from "./resolvers/utils/shield";
import { Context } from "./resolvers/utils/context";

const main = async () => {
  const prisma = new PrismaClient();
  const createContext = ({ req }): Context => {
    const { headers } = req;

    return { prisma, headers };
  };

  const schema = applyMiddleware(
    await buildSchema({
      resolvers: [
        ...resolvers,
        customAlunoResolver,
        sendAlertaAlunoResolver,
        customUserResolver,
      ],
      validate: false,
    }),
    permissions
  );

  // const schema = await buildSchema({
  //   resolvers: [
  //     ...resolvers,
  //     customAlunoResolver,
  //     sendAlertaAlunoResolver,
  //     customUserResolver,
  //   ],
  //   validate: false,
  // });

  const server = new ApolloServer({ schema: schema, context: createContext });

  const fastInitDB = async () => {
    await prisma.alerta.findFirst();
    console.warn("DB iniciado!");
  };

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    fastInitDB();
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
