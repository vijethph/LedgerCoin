import { CallbackError, HydratedDocument } from "mongoose";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { isPasswordValid, IUser, User } from "./models/User";

type SerializedUser = {
  _id?: number;
};

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (username: string, password: string, done) => {
      User.findOne({ email: username }, (error: CallbackError, user: HydratedDocument<IUser>) => {
        if (error) {
          return done(error);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (!isPasswordValid(password, user.password)) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user: SerializedUser, done) => {
  // eslint-disable-next-line no-underscore-dangle
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (error: CallbackError, user: typeof User) => {
    done(error, user);
  });
});
