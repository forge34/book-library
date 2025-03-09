import request from "supertest";
import prisma from "../src/config/prisma";
import { app } from "../src/app";

describe("user signup function", async () => {
  test("signs up and user is added to database", async () => {
    await prisma.user.deleteMany();

    const response = await request(app)
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
    console.log(user);
    console.log(response.body);

    expect(response.status).toEqual(200);
    expect(user).toBeDefined();
  });
});
