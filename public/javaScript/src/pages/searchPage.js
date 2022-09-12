import { INTERFACE_ID, RETURN_TO_APP_BUTTON_ID } from "../../constant.js";
import { renderDataIntoSelect } from "../controller/renderData.js";
import { createSearchPageElements } from "../views/searchView.js";
import { initWelcomePage } from "./welcomePage.js";

export function initSearchPage() {
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.innerHTML = createSearchPageElements();

  renderDataIntoSelect();

  const returnToAppButton = document.getElementById(RETURN_TO_APP_BUTTON_ID);
  returnToAppButton.addEventListener("click", () => {
    initWelcomePage();
  });
}
