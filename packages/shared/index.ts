import type {
  User,
  Book,
  Cart,
  Category,
  CartItem,
} from "../server/node_modules/@prisma/client/default";

import { Prisma } from "../server/node_modules/@prisma/client/";

const bookWithAuthor = Prisma.validator<Prisma.BookDefaultArgs>()({
  include: {
    author: true,
    categories: true,
  },
});

type bookWithAuthor = Prisma.BookGetPayload<typeof bookWithAuthor>;

export type { User, Book, Cart, CartItem, Category, bookWithAuthor };
