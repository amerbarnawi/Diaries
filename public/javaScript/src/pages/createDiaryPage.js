import {
  CREATE_BODY_ID,
  CREATE_TITLE_ID,
  INTERFACE_ID,
  RETURN_TO_APP_BUTTON_ID,
  SUBMIT_NEW_DIARY_BUTTON_ID,
} from "../../constant.js";
import { createDiaryByPostRequest } from "../controller/requestController.js";
import { createDiaryElements } from "../views/createDiaryView.js";
import { initWelcomePage } from "./welcomePage.js";

export function initWriteDiaryPage() {
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.innerHTML = createDiaryElements();

  const submitNewDiaryButton = document.getElementById(
    SUBMIT_NEW_DIARY_BUTTON_ID
  );

  submitNewDiaryButton.addEventListener("click", async () => {
    const titleInput = document.getElementById(CREATE_TITLE_ID);
    const bodyInput = document.getElementById(CREATE_BODY_ID);
    const diary = {
      title: titleInput.value,
      body: bodyInput.value,
    };
    await createDiaryByPostRequest(diary);
  });

  const returnToAppButton = document.getElementById(RETURN_TO_APP_BUTTON_ID);
  returnToAppButton.addEventListener("click", () => {
    initWelcomePage();
  });
}
