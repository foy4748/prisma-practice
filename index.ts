import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

async function main() {
  // Creating Author, then its books
  /*
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
  */
  // Creating Books, then its authors
  /*
  const response = await prismaClient.book.create({
    data: {
      name: "Book 1",
      Author_Book: {
        create: [
          {
            author: {
              create: {
                name: "Author 1",
              },
            },
          },
          {
            author: {
              create: {
                name: "Author 2",
              },
            },
          },
          {
            author: {
              create: {
                name: "Author 3",
              },
            },
          },
        ],
      },
    },
  });
  */
}

main();
