import dbConnection from "../dbConnection.js";
import { ObjectId } from "mongodb";

export async function isDiaryAvailable(req, res, next) {
  const id = req.params.id;

  try {
    async function readData(diaryCollection) {
      const result = await diaryCollection.findOne({ _id: ObjectId(id) });

      if (!result) {
        res
          .status(400)
          .json({ message: "Sorry, can not find diary by this id!" });
      } else {
        next();
      }
    }
    await dbConnection(readData);
  } catch (error) {
    console.log(error);
  }
}
