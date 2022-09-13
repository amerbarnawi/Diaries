import {
  INTERFACE_ID,
  RETURN_TO_APP_BUTTON_ID,
  SEARCH_BY_DATE_BUTTON_ID,
  SEARCH_BY_TITLE_BUTTON_ID,
  YEAR_SELECT_ID,
  MONTH_SELECT_ID,
  DAY_SELECT_ID,
  SEARCH_INPUT_ID,
} from "../../constant.js";
import { renderDataIntoSelect } from "../controller/renderData.js";
import { getDiaries } from "../controller/requestController.js";
import { createSearchPageElements } from "../views/searchView.js";
import { initWelcomePage } from "./welcomePage.js";

export function initSearchPage() {
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.innerHTML = createSearchPageElements();

  const yearSelect = document.getElementById(YEAR_SELECT_ID);
  const monthSelect = document.getElementById(MONTH_SELECT_ID);
  const daySelect = document.getElementById(DAY_SELECT_ID);
  const dateSelect = {
    yearSelect: yearSelect,
    monthSelect: monthSelect,
    daySelect: daySelect,
  };

  renderDataIntoSelect(dateSelect);

  const returnToAppButton = document.getElementById(RETURN_TO_APP_BUTTON_ID);
  returnToAppButton.addEventListener("click", () => {
    initWelcomePage();
  });

  const searchByDateButton = document.getElementById(SEARCH_BY_DATE_BUTTON_ID);
  searchByDateButton.addEventListener("click", async () => {
    const url = `http://localhost:3000/api/diaries/date?year=${yearSelect.value}&month=${monthSelect.value}&day=${daySelect.value}`;
    await getDiaries(url);
  });

  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  const searchByTitleButton = document.getElementById(
    SEARCH_BY_TITLE_BUTTON_ID
  );
  searchByTitleButton.addEventListener("click", async () => {
    const url = `http://localhost:3000/api/diaries/title?title=${searchInput.value}`;
    await getDiaries(url);
  });
}
