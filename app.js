import express from "express";
import dbConnection from "./dbConnection.js";
import diariesRouter from "./routers/diariesRouter.js";

const app = express();

app.use(express.json());

app.get("/index", async (req, res) => {
  const client = dbConnection();
  res.json("Welcome to my applications.");
});

app.use("/diaries", diariesRouter);

export default app;
