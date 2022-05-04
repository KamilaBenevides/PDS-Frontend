import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./prisma/generated/type-graphql";
import { buildSchema } from "type-graphql";

const main = async () => {
  const prisma = new PrismaClient();
  const createContext = ({ req }) => {
    const { headers } = req;

    return { prisma, headers };
  };

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({ schema: schema, context: createContext });

  const fastInitDB = async () => {
    const alunos = await prisma.aluno.findMany();

    if (!alunos?.length) {
      await prisma.aluno.create({
        data: {
          cpf: "123.446.789-92",
          dataIngresso: new Date(),
          dataLimite: new Date(),
          matricula: "121212",
          nomeCompleto: "Olha meu nome gente!",
          ativo: true,
          emailInstitucional: "wplb@ic.ufal.br",
          emailPessoal: "tenho não",
          orientador: {
            create: {
              nomeCompleto: "Orientador 1",
            },
          },
        },
      });
    }

    console.warn("DB iniciado!");
  };

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    fastInitDB();
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
