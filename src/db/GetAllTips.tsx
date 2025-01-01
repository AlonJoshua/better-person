import { PrismaClient } from "@prisma/client";

export const GetAllTips = async () => {
  const prisma = new PrismaClient();
  const response = await prisma.tip.findMany();
  return response;
};