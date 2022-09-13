export function renderDataIntoSelect(dateSelect) {
  const { yearSelect, monthSelect, daySelect } = dateSelect;

  insertData(2020, 2026, yearSelect);
  insertData(1, 13, monthSelect);
  insertData(1, 32, daySelect);
}

function insertData(min, max, selectName) {
  for (let i = min; i < max; i++) {
    const option = document.createElement("option");
    option.innerText = i;
    selectName.appendChild(option);
  }
}
