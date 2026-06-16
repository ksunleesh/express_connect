import express from "express";
import {env} from "./config/env.js";
import {notFoundMiddleware} from "./middlewares/not-found.middleware.js";
import {errorMiddleware} from "./middlewares/error.middleware.js";
import morgan from "morgan";

const app = express();

app.use(express.json()); // needed to read

app.use(morgan("dev"));

app.use(notFoundMiddleware);

app.use(errorMiddleware);

app.listen(env.PORT, (err) => {
  if (err) {
    console.Error(err);
    process.exit(1);
  }
  console.log(`Server running on port: ${env.PORT}`);
});
