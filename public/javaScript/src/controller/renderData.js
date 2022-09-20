import {
  DELETE_UPDATE_MESSAGE_ID,
  SEARCH_RESULT_ID,
  CONFIRM_DELETION_BUTTON_ID,
} from "../../constant.js";
import { initDiaryPage } from "../pages/diaryPage.js";
import { createSearchResultCard } from "../views/searchView.js";

export function renderDataIntoSelect(dateSelect) {
  const { yearSelect, monthSelect, daySelect } = dateSelect;

  insertData(2020, 2026, yearSelect);
  insertData(0, 13, monthSelect);
  insertData(0, 32, daySelect);
}

function insertData(min, max, selectName) {
  for (let i = min; i < max; i++) {
    const option = document.createElement("option");
    option.innerText = i;
    selectName.appendChild(option);
  }
}

export function renderSearchResult(results) {
  const searchResultDiv = document.getElementById(SEARCH_RESULT_ID);
  searchResultDiv.innerHTML = "";

  results.forEach((result) => {
    const { title, date, body, _id } = result;

    const resultCard = createSearchResultCard(title, date);

    searchResultDiv.appendChild(resultCard);

    resultCard.addEventListener("click", () => {
      initDiaryPage(result);
    });
  });
}

export function confirmDeletion() {
  const diaryPageMessage = document.getElementById(DELETE_UPDATE_MESSAGE_ID);

  diaryPageMessage.innerHTML = String.raw`
  
    <h3>Click on <span>"Confirm"</span> to delete this diary </h3>
    <button id = ${CONFIRM_DELETION_BUTTON_ID}>Confirm</button>
  `;
}
