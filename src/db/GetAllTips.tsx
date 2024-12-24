import { PrismaClient } from "@prisma/client/edge";

export const GetAllTips = async () => {
  const prisma = new PrismaClient();
  const response = await prisma.tip.findMany();
  return response;
};