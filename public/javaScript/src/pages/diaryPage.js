import {
  DELETE_BUTTON_ID,
  INTERFACE_ID,
  RETURN_TO_SEARCH_BUTTON_ID,
  UPDATE_BUTTON_ID,
} from "../../constant.js";
import { deleteDiary } from "../controller/requestController.js";
import { createDiaryElements } from "../views/diaryView.js";
import { initSearchPage } from "./searchPage.js";
import { initUpdateDiaryPage } from "./updateDiaryPage.js";

export function initDiaryPage(diaryDetails) {
  const { title, body, date, _id } = diaryDetails;
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.innerHTML = createDiaryElements(diaryDetails);

  const deleteButton = document.getElementById(DELETE_BUTTON_ID);
  deleteButton.addEventListener("click", async () => {
    const url = `http://localhost:3000/api/diaries/${_id}`;
    await deleteDiary(url);
  });

  const updateButton = document.getElementById(UPDATE_BUTTON_ID);
  updateButton.addEventListener("click", () => {
    initUpdateDiaryPage(diaryDetails);
  });

  const returnToSearchButton = document.getElementById(
    RETURN_TO_SEARCH_BUTTON_ID
  );
  returnToSearchButton.addEventListener("click", () => {
    initSearchPage();
  });
}
