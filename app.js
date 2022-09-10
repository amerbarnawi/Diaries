import express from "express";
import readRouter from "./routers/readRouter.js";
import writeRouter from "./routers/writeRouter.js";

const app = express();

app.use(express.json());

app.use("/api/read", readRouter);
app.use("/api/write", writeRouter);

export default app;
