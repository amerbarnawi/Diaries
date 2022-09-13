import {
  YEAR_SELECT_ID,
  MONTH_SELECT_ID,
  DAY_SELECT_ID,
  RETURN_TO_APP_BUTTON_ID,
  SEARCH_RESULT_ID,
  SEARCH_BY_DATE_BUTTON_ID,
  SEARCH_BY_TITLE_BUTTON_ID,
  SEARCH_INPUT_ID,
} from "../../constant.js";

export function createSearchPageElements() {
  const searchElements = String.raw`
    
        <h2>Search for your diary:</h2>
        <br>
        <div>
            <p>Choose date:</p>
            <p>Year:</p>
            <select name="year" id= ${YEAR_SELECT_ID}>
                <option value="" selected disabled hidden>Year</option>
            </select>
            <p>Month:</p>
            <select name="month" id=${MONTH_SELECT_ID}>
                <option value = "" selected disabled hidden>Month</option>
            </select>
            <p>Day:</p>
            <select name="day" id= ${DAY_SELECT_ID}>
                <option value = "" selected disabled hidden>Day</option>
            </select>
            <button id = ${SEARCH_BY_DATE_BUTTON_ID}>Search</button>
        </div>

        <br>

        <div>
            <input id = ${SEARCH_INPUT_ID} type="text" placeholder="Diary title">
            <button ID = ${SEARCH_BY_TITLE_BUTTON_ID}>Search</button>
        </div>

        <div id = ${SEARCH_RESULT_ID}></div>

        <button id = ${RETURN_TO_APP_BUTTON_ID}>Return</button>

        
    `;

  return searchElements;
}
