import { ObjectId } from "mongodb";
import dbConnection from "../dbConnection.js";

// Creating a diary function:
export async function createDiary(req, res) {
  const { title, body } = req.body;

  try {
    async function writeData(diaryCollection) {
      await diaryCollection.insertOne({
        title: title,
        date: new Date(),
        body: body,
      });
    }

    await dbConnection(writeData);

    res.json("Creating the diary is done!");
  } catch (error) {
    console.log(error);
  }
}

// Finding a diary by id:
export async function readDiary(req, res) {
  const id = req.params.id;

  try {
    async function readData(diaryCollection) {
      const result = await diaryCollection.findOne({ _id: ObjectId(id) });

      res.send(result);
    }
    await dbConnection(readData);
  } catch (error) {
    console.log(error);
  }
}

// Updating a diary:
export async function updateDiary(req, res) {
  const { title, body } = req.body;
  const id = req.params.id;

  try {
    async function updateData(diaryCollection) {
      await diaryCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: { title: title, body: body } }
      );

      res.json("Updating the diary is done!");
    }

    await dbConnection(updateData);
  } catch (error) {
    console.log(error);
  }
}

// Deleting a diary function:
export async function deleteDiary(req, res) {
  const id = req.params.id;

  try {
    async function deleteData(diaryCollection) {
      await diaryCollection.deleteOne({ _id: ObjectId(id) });

      res.json("Deleting the diary is done!");
    }

    await dbConnection(deleteData);
  } catch (error) {
    console.log(error);
  }
}

// Finding a diary by title query:
export async function queryByTitle(req, res) {
  const title = req.query.title;

  try {
    async function readData(diaryCollection) {
      const pipeline = [
        {
          $match: {
            title: new RegExp(".*" + title + ".*"),
          },
        },
        {
          $sort: {
            date: -1,
          },
        },
        {
          $limit: 100,
        },
      ];

      const aggCursor = diaryCollection.aggregate(pipeline);

      const aggResult = await aggCursor.toArray();

      res.json(aggResult);
    }
    await dbConnection(readData);
  } catch (error) {
    console.log(error);
  }
}

// Finding a diary by month:
export async function queryByDate(req, res) {
  const { year, month, day } = req.query;
  let startDate = "";
  let endDate = "";

  if (year && !month && !day) {
    startDate = (+year - 1).toString();
    endDate = (+year + 1).toString();
  } else if (year && month && !day) {
    startDate = `${year}-${month}-01`;
    endDate = `${year}-${month}-31`;
  } else if (year && month && day) {
    startDate = `${year}-${month}-${+day}`;
    endDate = `${year}-${month}-${+day + 1}`;
  }
  try {
    async function readData(diaryCollection) {
      const pipeline = [
        {
          $match: {
            date: {
              $gt: new Date(`${startDate}`),
              $lt: new Date(`${endDate}`),
            },
          },
        },
        {
          $sort: {
            date: -1,
          },
        },
      ];

      const aggCursor = diaryCollection.aggregate(pipeline);

      const aggResult = await aggCursor.toArray();

      res.json(aggResult);
    }
    await dbConnection(readData);
  } catch (error) {
    throw new error(error);
  }
}
