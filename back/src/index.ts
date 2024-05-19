import express from "express";
import mongoose from "mongoose";

import { router } from "./router";


mongoose.connect("mongodb://127.0.0.1:27017")
.then(() => {
    const app = express();
    const port = 3001;

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173/");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Origin", "*");

      next();
    });
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`👍 server up on http://localhost:${port}`);
    });


  })
  .catch((e) => console.log(`erro: ${e}`));

