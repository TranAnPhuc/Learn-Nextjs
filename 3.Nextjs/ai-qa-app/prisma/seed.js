import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.question.createMany({
    data: [
      { title: "Next.js là gì?", view: 120 },
      { title: "Prisma dùng thế nào?", view: 45 },
      { title: "SQL Server là gì?", view: 89 },
    ],
  });

  const list = await prisma.question.findMany();
  console.log(list);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
