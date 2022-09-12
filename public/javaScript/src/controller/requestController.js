import { CREATE_NEW_DIARY_MESSAGE_ID } from "../../constant.js";
import { fetchData } from "../fetchData/fetchData.js";

export async function createDiaryByPostRequest(diary) {
  const url = "http://localhost:3000/api/diaries";

  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(diary),
  };

  const message = document.getElementById(CREATE_NEW_DIARY_MESSAGE_ID);

  try {
    const response = await fetchData(url, requestOptions);

    message.innerHTML = String.raw`<h2>${response}<h2>`;
  } catch (error) {
    message.innerHTML = String.raw`<h2>${error}<h2>`;
  }
}
