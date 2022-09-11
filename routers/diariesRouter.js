import express from "express";
import {
  createDiary,
  deleteDiary,
  readDiary,
  readDiaryByTitleQuery,
  updateDiary,
} from "../controller/diariesController.js";

const diariesRouter = express.Router();

diariesRouter.use(express.urlencoded({ extended: false }));

// Create a diary:
diariesRouter.post("/", createDiary);

// Read a diary by id:
diariesRouter.get("/:id", readDiary);

// Update a diary:
diariesRouter.put("/:id", updateDiary);

// Delete a diary:
diariesRouter.delete("/:id", deleteDiary);

// Reading a diary by query:
diariesRouter.get("/", readDiaryByTitleQuery);

export default diariesRouter;
