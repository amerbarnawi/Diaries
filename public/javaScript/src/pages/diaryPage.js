import { INTERFACE_ID, RETURN_TO_SEARCH_BUTTON_ID } from "../../constant.js";
import { createDiaryElements } from "../views/diaryView.js";
import { initSearchPage } from "./searchPage.js";

export function initDiaryPage(title, body, date) {
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.innerHTML = createDiaryElements(title, body, date);

  const returnToSearchButton = document.getElementById(
    RETURN_TO_SEARCH_BUTTON_ID
  );

  returnToSearchButton.addEventListener("click", () => {
    initSearchPage();
  });
}
