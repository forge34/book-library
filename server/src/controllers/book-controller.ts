import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { prisma } from "../config/prisma";

const getAllBooks = expressAsyncHandler(async (req: Request, res: Response) => {
  const books = await prisma.book.findMany({});

  res.json(books);
});

const getOneBook = expressAsyncHandler(async (req: Request, res: Response) => {
  const isbn = req.params.isbn;
  const book = await prisma.book.findFirst({
    where: { id: isbn },
  });

  res.json(book);
});

export { getAllBooks, getOneBook };
