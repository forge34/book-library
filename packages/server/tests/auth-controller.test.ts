import request from "supertest";
import prisma from "../src/config/prisma";
import { app } from "../src/app";

const server = request.agent(app);

describe("user signup function", async () => {
  test("signs up and user is added to database", async () => {
    await prisma.user.deleteMany();

    const response = await server
      .post("/signup")
      .send({
        firstname: "forge",
        lastname: "forge",
        username: "forge",
        email: "at@gmail.com",
        password: "forge12345",
        confirmPassword: "forge12345",
      })
      .set("Accept", "application/json");

    const user = await prisma.user.findFirst({
      where: {
        email: "at@gmail.com",
      },
    });

    expect(response.status).toEqual(200);
    expect(user).toBeDefined();
  });
});

describe("user login middleware", async () => {
  test("logs in signed up user", async () => {
    const response = await server
      .post("/login")
      .send({ username: "forge", password: "forge12345" })
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
  });
});
