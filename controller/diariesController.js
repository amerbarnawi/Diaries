import dbConnection from "../dbConnection.js";

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

export async function readDiary(req, res) {
  const diaryTitle = req.params.title;

  try {
    async function readData(diaryCollection) {
      const result = await diaryCollection.findOne({ title: diaryTitle });

      res.send(result);
    }
    await dbConnection(readData);
  } catch (error) {
    console.log(error);
  }
}
