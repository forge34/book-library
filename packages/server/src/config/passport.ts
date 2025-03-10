import passport from "passport";
import passportLocal from "passport-local";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import passportJwt from "passport-jwt";
import type { Request } from "express";
import type { User } from "@prisma/client";

const localVerify: passportLocal.VerifyFunction = async (
  username,
  password,
  done,
) => {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) {
    return done("User not found", false);
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return done(null, user);
  } else if (!match) {
    return done("Invalid username or password", false);
  }
};

const cookieExtractor = (req: Request) => {
  let jwt = null;
  if (req && req.cookies) {
    jwt = req.cookies["jwt"];
  }

  return jwt;
};

const jwtOptions: passportJwt.StrategyOptionsWithSecret = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.SECRET,
};

const configLocal = () => {
  const localStrategy = new passportLocal.Strategy(localVerify);

  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    done(null, user);
  });
  passport.use(localStrategy);
};

const configJwt = () => {
  const jwtStrategy = new passportJwt.Strategy(
    jwtOptions,
    async (payload, done) => {
      const user = await prisma.user.findFirst({
        where: {
          id: payload.id,
        },
      });

      if (user) {
        return done(null, user);
      } else if (!user) {
        done(null, false);
      }
    },
  );

  passport.use(jwtStrategy);
};

export { configLocal, configJwt };
