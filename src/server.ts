import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import createHttpError from "http-errors";
import cors from "cors";
import { join, resolve } from "path";
import pino from "pino";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import { usersRouter } from "./routes/users";
import "./passport-config";

dotenv.config();
const logger = pino();
const app: express.Application = express();
const httpServer = createServer(app);
const serverPort = process.env.PORT || 3000;

app.use(
  cors()
  //   {
  //   origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  //   credentials: true,
  // }
);

mongoose.connect(process.env.MONGO_URI, {
    socketTimeoutMS: 60000,
    serverSelectionTimeoutMS: 60000
}).catch(error => console.error(error));
const clientPromise = mongoose.connection.asPromise().then((connection) => connection.getClient());

app.use(
  session({
    name: "ledgercoin-server.sid",
    resave: false,
    saveUninitialized: false,
    secret: "ledgercoin-secret",
    cookie: {
      maxAge: 36000000,
      httpOnly: false,
      secure: false,
    },
    store: MongoStore.create({
      clientPromise,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(join(__dirname, "/public")));

// app.use("/joinPath1", express.static(join(__dirname, "/public")));
// app.use("/joinPath2", express.static(join(__dirname, "./public")));
// app.use("/joinPath3", express.static(join(__dirname, "public")));
// app.use("/resolvePath1", express.static(resolve(__dirname, "/public")));
// app.use("/resolvePath2", express.static(resolve(__dirname, "../public")));
// app.use("/resolvePath3", express.static(resolve(__dirname, "./public")));
// app.use("/resolvePath4", express.static(resolve(__dirname, "public")));

app.use("/users", usersRouter);

app.get("*", (req, res, next) => {
  next(createHttpError(404));
});

httpServer.listen(serverPort, () => {
  logger.info(`Server listening on port ${serverPort}`);
});
