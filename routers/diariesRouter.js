import express from "express";
import { createDiary, readDiary } from "../controller/diariesController.js";

const diariesRouter = express.Router();

diariesRouter.use(express.urlencoded({ extended: false }));

// Create a diary:
diariesRouter.post("/", createDiary);

// Read a diary:
diariesRouter.get("/:title", readDiary);

export default diariesRouter;
