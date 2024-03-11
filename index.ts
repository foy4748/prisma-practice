import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

async function main() {
  const response = await prismaClient.author.create({
    data: {
      name: "Author 1",
      Author_Book: {
        create: [
          {
            book: {
              create: {
                name: "Book 1",
              },
            },
          },
          {
            book: {
              create: {
                name: "Book 11",
              },
            },
          },
          {
            book: {
              create: {
                name: "Book 111",
              },
            },
          },
        ],
      },
    },
  });
}

main();
