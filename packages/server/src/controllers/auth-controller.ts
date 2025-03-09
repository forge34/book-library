import expressAsyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../config/prisma";

const nameValidation = (field: string) =>
  body(field)
    .trim()
    .isLength({ min: 1 })
    .withMessage(`${field} length too short`)
    .escape();

const signup = [
  body("email").trim().escape(),
  nameValidation("username"),
  nameValidation("firstname"),
  nameValidation("lastname"),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters")
    .escape(),

  body("confirmPassword")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .escape(),

  expressAsyncHandler(async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (!err) {
          await prisma.user.create({
            data: {
              username: req.body.username,
              firstname: req.body.firstname,
              lastname: req.body.firstname,

              email: req.body.email,
              password: hash,
            },
          });
          res.status(200).json("created user");
        } else {
          res.status(401);
        }
      });
    } else {
      res.status(401).json({ errors: errors.array() });
    }
  }),
];

export { signup };
