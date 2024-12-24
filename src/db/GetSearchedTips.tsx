import { PrismaClient } from "@prisma/client";
import type { Tip } from "~/types";

export const GetSearchedTips = async (query = '', page = 0): Promise<Tip[]> => {
  const prisma = new PrismaClient();

  const pagination = page ? page * 6 : 0;

  console.log(query, pagination);

  if (!query) {
    const response = await prisma.tip.findMany({
      take: 6,
      skip: pagination,
    });

    return response;
  }

  const response = await prisma.tip.findMany({
    take: 6,
    skip: pagination,
    where: {
      OR: [
        {
          sentence: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          tags: {
            has: query,
          },
        },
      ],
    },
  });

  return response;
};