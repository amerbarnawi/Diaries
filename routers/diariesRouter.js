import express from "express";
import {
  createDiary,
  deleteDiary,
  queryByDate,
  queryByTitle,
  readDiary,
  updateDiary,
} from "../controller/diariesController.js";

const diariesRouter = express.Router();

diariesRouter.use(express.urlencoded({ extended: false }));

// Create a diary:
diariesRouter.post("/", createDiary);

// Reading a diary by title query:
diariesRouter.get("/title", queryByTitle);

// Finding a diary by year:
diariesRouter.get("/date", queryByDate);

// Read a diary by id:
diariesRouter.get("/:id", readDiary);

// Update a diary:
diariesRouter.put("/:id", updateDiary);

// Delete a diary:
diariesRouter.delete("/:id", deleteDiary);

export default diariesRouter;
