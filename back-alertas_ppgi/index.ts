import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./prisma/generated/type-graphql";
import { buildSchema } from "type-graphql";

import { customAlunoResolver } from "./resolvers/aluno/customAlunoResolver";

const main = async () => {
  const prisma = new PrismaClient();
  const createContext = ({ req }) => {
    const { headers } = req;

    return { prisma, headers };
  };

  const schema = await buildSchema({
    resolvers: [...resolvers, customAlunoResolver],
    validate: false,
  });

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
