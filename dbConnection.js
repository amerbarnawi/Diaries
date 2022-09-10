import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

async function dbConnection(crudFunction) {
  const client = new MongoClient(process.env.MONGODB_URL);
  const diaryCollection = client
    .db("diaries_application")
    .collection("my_diaries");

  try {
    await client.connect();
    console.log("connection to database is done!");
    await crudFunction(diaryCollection);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export default dbConnection;
