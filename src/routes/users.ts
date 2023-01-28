import passport from "passport";
import { NextFunction, Request, Response, Router } from "express";
import { User, hashUserPassword } from "../models/User";

const addUserToDatabase = async (request: Request, response: Response) => {
  const user = new User({
    email: request.body.email,
    username: request.body.username,
    password: hashUserPassword(request.body.password),
    creationDate: Date.now(),
  });

  try {
    const createResponse = await user.save();
    return response.status(201).json(createResponse);
  } catch (error) {
    return response.status(501).json(error);
  }
};

const isValidUser = async (request: Request, response: Response, next: NextFunction) => {
  if (request.isAuthenticated()) next();
  else return response.status(401).json({ message: "Unauthorized Request" });
};

export const usersRouter = Router();
usersRouter.post("/register", addUserToDatabase);

usersRouter.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureMessage: true }), (request: Request, response: Response) => {
  return response.status(200).json({ message: "Login Success" });
});

usersRouter.get("/user", isValidUser, (request: Request, response: Response, next: NextFunction) => {
  return response.status(200).json(request.user);
});

usersRouter.get("/logout", isValidUser, (request: Request, response: Response, next: NextFunction) => {
  request.logout((error) => {
    if (error) {
      return response.status(501).json(error);
    }
  });
  return response.status(200).json({ message: "Logout Success" });
});
