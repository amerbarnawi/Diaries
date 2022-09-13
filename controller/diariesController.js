import { ObjectId } from "mongodb";
import dbConnection from "../dbConnection.js";

// Creating diary function:
export async function createDiary(req, res) {
  const { title, body } = req.body;

  if (!title || !body) {
    res
      .status(400)
      .json({ message: "Please, send all data to create a new diary!" });
    return;
  }

  try {
    async function writeData(diaryCollection) {
      await diaryCollection.insertOne({
        title: title,
        date: new Date(),
        body: body,
      });
    }

    await dbConnection(writeData);

    res.status(201).json({ message: "Creating the diary is done!" });
  } catch (error) {
    console.log(error);
  }
}

// Deleting diary function:
export async function deleteDiary(req, res) {
  const id = req.params.id;

  try {
    async function deleteData(diaryCollection) {
      await diaryCollection.deleteOne({ _id: ObjectId(id) });

      res.status(200).json({ message: "Deleting the diary is done!" });
    }

    await dbConnection(deleteData);
  } catch (error) {
    console.log(error);
  }
}

// Finding diary by id:
export async function readDiary(req, res) {
  const id = req.params.id;

  try {
    async function readData(diaryCollection) {
      const result = await diaryCollection.findOne({ _id: ObjectId(id) });

      if (result) {
        res.status(200).json(result);
      } else {
        res
          .status(404)
          .json({ message: "Sorry, can not find diaries by this id!" });
      }
    }
    await dbConnection(readData);
  } catch (error) {
    console.log(error);
  }
}

// Updating diary function:
export async function updateDiary(req, res) {
  const { title, body } = req.body;
  const id = req.params.id;

  if (!title || !body) {
    res.status(400).json({ message: "Please, send the title and the body." });
  }

  try {
    async function updateData(diaryCollection) {
      await diaryCollection.updateOne(
        { _id: ObjectId(id) },
        { $set: { title: title, body: body } }
      );

      res.status(201).json({ message: "Updating the diary is done!" });
    }

    await dbConnection(updateData);
  } catch (error) {
    console.log(error);
  }
}

// Finding diary by title:
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

      if (aggResult.length >= 1) {
        res.json(aggResult);
      } else {
        res
          .status(404)
          .json({ message: "Sorry, can not find any diary by this title!" });
      }
    }
    await dbConnection(readData);
  } catch (error) {
    console.log(error);
  }
}

// Finding diary by date:
export async function queryByDate(req, res) {
  const { year, month, day } = req.query;
  let startDate = "";
  let endDate = "";

  console.log(year, typeof month, day);

  if (+year === 0 && +month === 0 && +day === 0) {
    res.status(400).json({ message: "Please, choose date!" });
    return;
  } else if (year && +month === 0 && +day === 0) {
    startDate = (+year - 1).toString();
    endDate = (+year + 1).toString();
  } else if (year && month && +day === 0) {
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

      if (aggResult.length >= 1) {
        res.json(aggResult);
      } else {
        res
          .status(400)
          .json({ message: "Sorry, can not find diaries by this date!" });
      }
    }
    await dbConnection(readData);
  } catch (error) {
    throw new error(error);
  }
}
