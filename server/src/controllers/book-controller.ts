import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { prisma } from "../config/prisma";

const getAllBooks = expressAsyncHandler(async (req: Request, res: Response) => {
  const books = await prisma.book.findMany({});

  res.json(books);
});

export { getAllBooks };
