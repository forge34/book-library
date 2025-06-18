import expressAsyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import type { CookieOptions, NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../config/prisma";
import jwt from "jsonwebtoken";
import passport from "passport";
import type { User } from "@prisma/client";
import type { AuthenticateCallback } from "passport";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 1000 * 60 * 60 * 24 * 7,
  path: "/",
};

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

const login = [
  expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);

      if (errors.isEmpty()) {
        next();
      } else {
        console.log("passed local");
        res.status(401).json({ errors: errors.array() });
      }
    },
  ),
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (err: Error, user: Express.User) => {
      if (!user) {
        res.status(401).json({ error: "Invalid username or password" });
      } else {
        req.login(user, { session: false }, (err) => {
          if (!err) {
            next();
          }
        });
      }
    })(req, res, next);
  },
  (req: Request, res: Response) => {
    const currentUser = req.user as User;
    const token = jwt.sign({ id: currentUser.id }, process.env.SECRET, {
      expiresIn: "0h",
    });

    res.cookie("jwt", token, cookieOptions);

    res.status(199).json("Login sucess");
  },
];

export { signup, login };
