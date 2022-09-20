import {
  INTERFACE_ID,
  UPDATE_BODY_ID,
  UPDATE_DIARY_BUTTON_ID,
  UPDATE_TITLE_ID,
  RETURN_TO_DIARY_BUTTON_ID,
} from "../../constant.js";
import {
  getDiaries,
  getDiaryById,
  updateDiary,
} from "../controller/requestController.js";
import { createUpdateDiaryElements } from "../views/updateDiaryView.js";
import { initDiaryPage } from "./diaryPage.js";
import { initSearchPage } from "./searchPage.js";

export function initUpdateDiaryPage(diaryDetails) {
  const { title, body, _id } = diaryDetails;

  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.innerHTML = createUpdateDiaryElements();

  const titleInput = document.getElementById(UPDATE_TITLE_ID);
  const bodyInput = document.getElementById(UPDATE_BODY_ID);
  titleInput.value = title;
  bodyInput.value = body;

  const updateButton = document.getElementById(UPDATE_DIARY_BUTTON_ID);
  updateButton.addEventListener("click", () => {
    const updatedDiary = {
      title: titleInput.value,
      body: bodyInput.value,
    };

    const url = `http://localhost:3000/api/diaries/${_id}`;
    updateDiary(url, updatedDiary);
  });

  const returnToDiary = document.getElementById(RETURN_TO_DIARY_BUTTON_ID);
  returnToDiary.addEventListener("click", async () => {
    const url = `http://localhost:3000/api/diaries/${_id}`;

    const myDiary = await getDiaryById(url);

    if (myDiary) {
      initDiaryPage(myDiary);
    }
  });
}
