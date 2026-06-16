import express from "express";
import {env} from "./config/env.js";

const app = express();

app.listen(env.PORT, (err) => {
  if (err) {
    console.Error(err);
    process.exit(1);
  }
  console.log(`Server running on port: ${env.PORT}`);
});
