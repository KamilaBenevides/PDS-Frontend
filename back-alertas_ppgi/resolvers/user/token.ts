import { PrismaClient } from "@prisma/client";
import { AuthenticationError } from "apollo-server";
import jwt from "jsonwebtoken";
import { User } from "../../prisma/generated/type-graphql";
import { LoginReturn } from "./customArgs";

const JWT_SECRET = "eueueuha12121213hhhshshsoiqooqppahshasho";

type jwtBody = {
  id: number;
  username: string;
};

export const createToken = (user: User): LoginReturn => {
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return {
    token,
    id: user.id,
    expiresIn: "7d",
  };
};

export const validateTokenAndUser = async (
  prisma: PrismaClient,
  token: string
) => {
  if (!token) {
    return new AuthenticationError("No token provided");
  }

  let valid: jwtBody;
  try {
    valid = jwt.verify(token, JWT_SECRET) as jwtBody;

    if (!valid.username) {
      return new AuthenticationError("Invalid token");
    }
  } catch {
    return new AuthenticationError("Invalid token");
  }

  const user = await prisma.user.findFirst({
    where: {
      AND: [
        { id: { equals: valid.id } },
        { username: { equals: valid.username } },
      ],
    },
  });

  return user ? true : new AuthenticationError("Invalid token");
};
