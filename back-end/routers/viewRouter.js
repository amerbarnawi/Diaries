import express from "express";
const viewRouter = express.Router();

viewRouter.get("/", (req, res) => {
  res.render("index");
});

viewRouter.get("/my-diary", (req, res) => {
  res.render("my-diary");
});

export default viewRouter;
