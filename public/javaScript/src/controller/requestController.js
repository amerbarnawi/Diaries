import {
  CREATE_NEW_DIARY_MESSAGE_ID,
  UPDATE_DIARY_MESSAGE_ID,
  SEARCH_RESULT_ID,
  DELETE_UPDATE_MESSAGE_ID,
} from "../../constant.js";
import { fetchData } from "../fetchData/fetchData.js";
import { renderSearchResult } from "./renderData.js";

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
      searchResultDiv.innerHTML = String.raw`<h2>${response.message}</h2>`;
    } else {
      renderSearchResult(response);
    }
  } catch (error) {
    searchResultDiv.innerHTML = String.raw`<h2>${error}</h2>`;
  }
}

export async function deleteDiary(url) {
  const messageDiv = document.getElementById(DELETE_UPDATE_MESSAGE_ID);

  const requestOptions = {
    method: "DELETE",
  };

  try {
    const response = await fetchData(url, requestOptions);

    if (response.message) {
      messageDiv.innerHTML = String.raw`<h3>${response.message}</h3>`;
    }
  } catch (error) {
    messageDiv.innerHTML = String.raw`<h3>${error}</h3>`;
  }
}

export async function updateDiary(url, diary) {
  const messageDiv = document.getElementById(UPDATE_DIARY_MESSAGE_ID);

  const requestOptions = {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(diary),
  };

  try {
    const response = await fetchData(url, requestOptions);

    messageDiv.innerHTML = String.raw`<h2>${response.message}<h2>`;
  } catch (error) {
    messageDiv.innerHTML = String.raw`<h2>${error}<h2>`;
  }
}

export async function getDiaryById(url) {
  const message = document.getElementById(UPDATE_DIARY_MESSAGE_ID);

  try {
    const response = await fetchData(url);
    if (response.message) {
      message.innerHTML = String.raw`<h2>${response.message}<h2>`;
      return;
    } else if (response) {
      return response;
    }
  } catch (error) {
    message.innerHTML = String.raw`<h3>${error}</h3>`;
  }
}
