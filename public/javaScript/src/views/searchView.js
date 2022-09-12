import {
  YEAR_SELECT_ID,
  MONTH_SELECT_ID,
  DAY_SELECT_ID,
  RETURN_TO_APP_BUTTON_ID,
} from "../../constant.js";

export function createSearchPageElements() {
  const searchElements = String.raw`
    
        <h2>Search for your diary:</h2>
        <br>
        <div>
            <p>Choose date:</p>
            <select name="year" id= ${YEAR_SELECT_ID}></select>
            <select name="month" id=${MONTH_SELECT_ID}></select>
            <select name="day" id= ${DAY_SELECT_ID}></select>
            <button>Search</button>
        </div>

        <div>
            <input type="text" placeholder="Diary title">
            <button>Search</button>
        </div>

        <button id = ${RETURN_TO_APP_BUTTON_ID}>Return</button>
    `;

  return searchElements;
}
