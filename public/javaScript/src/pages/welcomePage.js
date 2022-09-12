import {
  INTERFACE_ID,
  SEARCH_DIARY_BUTTON_ID,
  WRITE_DIARY_BUTTON_ID,
} from "../../constant.js";
import { createWelcomeElements } from "../views/welcomeView.js";
import { initWriteDiaryPage } from "./createDiaryPage.js";
import { initSearchPage } from "./searchPage.js";

export function initWelcomePage() {
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  const welcomeElements = createWelcomeElements();

  userInterface.innerHTML = welcomeElements;

  const writeDiaryButton = document.getElementById(WRITE_DIARY_BUTTON_ID);
  writeDiaryButton.addEventListener("click", () => {
    initWriteDiaryPage();
  });

  const searchDiaryButton = document.getElementById(SEARCH_DIARY_BUTTON_ID);
  searchDiaryButton.addEventListener("click", () => {
    initSearchPage();
  });
}
