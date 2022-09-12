import {
  YEAR_SELECT_ID,
  MONTH_SELECT_ID,
  DAY_SELECT_ID,
} from "../../constant.js";

export function renderDataIntoSelect() {
  const yearSelect = document.getElementById(YEAR_SELECT_ID);
  const monthSelect = document.getElementById(MONTH_SELECT_ID);
  const daySelect = document.getElementById(DAY_SELECT_ID);

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
