import express from "express";
import diariesRouter from "./routers/diariesRouter.js";
import viewRouter from "./routers/viewRouter.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.use("/", viewRouter);
app.use("/api/diaries", diariesRouter);

export default app;
