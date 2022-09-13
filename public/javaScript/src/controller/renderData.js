import { SEARCH_RESULT_ID } from "../../constant.js";
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
