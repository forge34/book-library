// import { createServer } from "http";
import { app } from "../src/app.ts";
import request from "supertest";
import prisma from "../src/config/prisma.ts";
import { Book } from "@prisma/client";

describe("get all books route", async () => {
  test("returns correct response", async () => {
    await prisma.book.deleteMany({});
    const response = await request(app)
      .get("/books")
      .set("Accept", "application/json");

    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject([]);
  });

  test("returns 1 book", async () => {
    await prisma.book.deleteMany({});
    await prisma.book.create({
      data: {
        id: "1",
        price: 20,
        name: "atomic",
        pages: 20,
      },
    });

    const response = await request(app)
      .get("/books")
      .set("Accept", "application/json");

    expect(response.body.length).toEqual(1);
  });
});

describe("get single book route", async () => {
  test("returns single book with id(isbn)", async () => {
    await prisma.book.deleteMany({});
    await prisma.book.create({
      data: {
        id: "1",
        price: 20,
        name: "atomic",
        pages: 20,
      },
    });

    const response = await request(app)
      .get("/books/1")
      .set("Accept", "application/json");

    const book = response.body as Book;
    expect(book.id).toMatch("1");
  });
});
