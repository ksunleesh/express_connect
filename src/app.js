import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, (error) => {
  if (error) {
    console.Error(error);
  } else {
    console.log(`Server running on port: ${PORT}`);
  }
});
