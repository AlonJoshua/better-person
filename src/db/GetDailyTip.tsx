import { PrismaClient } from "@prisma/client/edge";

export const GetDailyTip = async () => {
  const prisma = new PrismaClient();
  const collectionData = await prisma.$runCommandRaw({
    collStats: "Tip"
  });

  const totalCount = collectionData.count as number;

  const dayDate = new Date();
  const dayOfYear = Math.floor(
    (Number(dayDate) - Number(new Date(dayDate.getFullYear(), 0, 0))) / 86400000
  );

  const response = await prisma.tip.findFirst({
    take: 1,
    skip: dayOfYear % totalCount,
  });

  return response;
};