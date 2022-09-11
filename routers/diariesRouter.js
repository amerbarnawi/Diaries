import express from "express";
import {
  createDiary,
  deleteDiary,
  queryByDate,
  queryByTitle,
  readDiary,
  updateDiary,
} from "../controller/diariesController.js";
import { isDiaryAvailable } from "../helper/middleware.js";

const diariesRouter = express.Router();

diariesRouter.use(express.urlencoded({ extended: false }));

// Create diary:
diariesRouter.post("/", createDiary);

// Finding diary by title:
diariesRouter.get("/title", queryByTitle);

// Finding diary by date:
diariesRouter.get("/date", queryByDate);

// Find diary by id:
diariesRouter.get("/:id", readDiary);

// Update diary:
diariesRouter.put("/:id", isDiaryAvailable, updateDiary);

// Delete diary:
diariesRouter.delete("/:id", isDiaryAvailable, deleteDiary);

export default diariesRouter;
