import { Author, PrismaClient } from "@prisma/client";

const books = [
  {
    id: "OL45804W",
    name: "Fantastic Mr. Fox",
    price: 12,
    description:
      "A clever fox outsmarts three farmers to provide food for his family.",
    coverImage: "https://covers.openlibrary.org/b/id/240727-M.jpg",
    author: "Roald Dahl",
  },
  {
    id: "OL7353617M",
    name: "The Great Gatsby",
    price: 10,
    description: "A novel about the American dream and the roaring twenties.",
    coverImage: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
    author: "F. Scott Fitzgerald",
  },
  {
    id: "OL82563W",
    name: "To Kill a Mockingbird",
    price: 8,
    description:
      "A story of racial injustice and childhood innocence in the Deep South.",
    coverImage: "https://covers.openlibrary.org/b/id/8225265-M.jpg",
    author: "Harper Lee",
  },
  {
    id: "OL232780W",
    name: "1984",
    price: 9,
    description: "A dystopian novel about totalitarianism and surveillance.",
    coverImage: "https://covers.openlibrary.org/b/id/153541-M.jpg",
    author: "George Orwell",
  },
  {
    id: "OL39427W",
    name: "Pride and Prejudice",
    price: 11,
    description: "A romantic novel that critiques the British landed gentry.",
    coverImage: "https://covers.openlibrary.org/b/id/8091016-M.jpg",
    author: "Jane Austen",
  },
  {
    id: "OL27448W",
    name: "Moby-Dick",
    price: 13,
    description:
      "The narrative of Captain Ahab's obsessive quest to kill a giant white whale.",
    coverImage: "https://covers.openlibrary.org/b/id/5551236-M.jpg",
    author: "Herman Melville",
  },
  {
    id: "OL20694W",
    name: "War and Peace",
    price: 15,
    description:
      "A novel that intertwines the lives of families during the Napoleonic Wars.",
    coverImage: "https://covers.openlibrary.org/b/id/8231991-M.jpg",
    author: "Leo Tolstoy",
  },
  {
    id: "OL68020W",
    name: "The Catcher in the Rye",
    price: 9,
    description: "A story about teenage rebellion and angst.",
    coverImage: "https://covers.openlibrary.org/b/id/8231992-M.jpg",
    author: "J.D. Salinger",
  },
  {
    id: "OL36209W",
    name: "The Hobbit",
    price: 10,
    description: "A fantasy novel about the adventures of Bilbo Baggins.",
    coverImage: "https://covers.openlibrary.org/b/id/8231993-M.jpg",
    author: "J.R.R. Tolkien",
  },
  {
    id: "OL15379W",
    name: "Crime and Punishment",
    price: 14,
    description: "A psychological novel exploring morality and redemption.",
    coverImage: "https://covers.openlibrary.org/b/id/8231994-M.jpg",
    author: "Fyodor Dostoevsky",
  },
  {
    id: "OL263319W",
    name: "The Brothers Karamazov",
    price: 16,
    description: "A philosophical novel about faith, doubt, and free will.",
    coverImage: "https://covers.openlibrary.org/b/id/8231995-M.jpg",
    author: "Fyodor Dostoevsky",
  },
  {
    id: "OL40984W",
    name: "Brave New World",
    price: 12,
    description:
      "A dystopian novel about a technologically advanced future society.",
    coverImage: "https://covers.openlibrary.org/b/id/8231996-M.jpg",
    author: "Aldous Huxley",
  },
];

const authors = [
  {
    id: "OL34184A",
    name: "Roald Dahl",
    dateOfBirth: new Date("1916-09-13T00:00:00Z"),
  },
  {
    id: "OL262283A",
    name: "F. Scott Fitzgerald",
    dateOfBirth: new Date("1896-09-24T00:00:00Z"),
  },
  {
    id: "OL31765A",
    name: "Harper Lee",
    dateOfBirth: new Date("1926-04-28T00:00:00Z"),
  },
  {
    id: "OL38298A",
    name: "George Orwell",
    dateOfBirth: new Date("1903-06-25T00:00:00Z"),
  },
  {
    id: "OL15136A",
    name: "Jane Austen",
    dateOfBirth: new Date("1775-12-16T00:00:00Z"),
  },
  {
    id: "OL18319A",
    name: "Herman Melville",
    dateOfBirth: new Date("1819-08-01T00:00:00Z"),
  },
  {
    id: "OL18923A",
    name: "Leo Tolstoy",
    dateOfBirth: new Date("1828-09-09T00:00:00Z"),
  },
  {
    id: "OL24636A",
    name: "J.D. Salinger",
    dateOfBirth: new Date("1919-01-01T00:00:00Z"),
  },
  {
    id: "OL26320A",
    name: "J.R.R. Tolkien",
    dateOfBirth: new Date("1892-01-03T00:00:00Z"),
  },
  {
    id: "OL23497A",
    name: "Fyodor Dostoevsky",
    dateOfBirth: new Date("1821-11-11T00:00:00Z"),
  },
  {
    id: "OL21620A",
    name: "Aldous Huxley",
    dateOfBirth: new Date("1894-07-26T00:00:00Z"),
  },
];

console.log(authors);

const prisma = new PrismaClient();

async function createBooks() {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const author_name = book.author;
    const author = authors.find((a) => {
      return a.name == book.author;
    }) as Author;

    await prisma.book.create({
      data: {
        ...book,
        author: {
          connectOrCreate: {
            create: { ...author },
            where: {
              id: author.id,
              name: author_name,
            },
          },
        },
      },
    });
  }
}

createBooks()
