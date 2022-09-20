import {
  HEADER_ID,
  INTERFACE_ID,
  SEARCH_PAGE_BUTTON_ID,
  WELCOME_PAGE_BUTTON_ID,
} from "../../constant.js";
import { createHeaderElements } from "../views/headerView.js";
import { initSearchPage } from "./searchPage.js";
import { initWelcomePage } from "./welcomePage.js";

export function initHeader() {
  const userInterface = document.getElementById(INTERFACE_ID);
  const header = document.createElement("div");
  header.id = HEADER_ID;

  header.innerHTML = createHeaderElements();
  userInterface.before(header);

  const searchPageButton = document.getElementById(SEARCH_PAGE_BUTTON_ID);
  const welcomePageButton = document.getElementById(WELCOME_PAGE_BUTTON_ID);

  searchPageButton.addEventListener("click", () => {
    initSearchPage();
  });
  welcomePageButton.addEventListener("click", () => {
    initWelcomePage();
  });
}
