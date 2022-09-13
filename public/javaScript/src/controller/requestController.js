import {
  CREATE_NEW_DIARY_MESSAGE_ID,
  SEARCH_RESULT_ID,
} from "../../constant.js";
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

    message.innerHTML = String.raw`<h2>${response.message}<h2>`;
  } catch (error) {
    message.innerHTML = String.raw`<h2>${error}<h2>`;
  }
}

export async function getDiaries(url) {
  const searchResultDiv = document.getElementById(SEARCH_RESULT_ID);

  try {
    const response = await fetchData(url);

    if (response.message) {
      searchResultDiv.innerHTML = String.raw`<h3>${response.message}</h3>`;
    } else {
      console.log(response);
    }
  } catch (error) {
    searchResultDiv.innerHTML = String.raw`<h3>${error}</h3>`;
  }
}
