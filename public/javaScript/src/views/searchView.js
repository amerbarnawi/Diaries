import {
  YEAR_SELECT_ID,
  MONTH_SELECT_ID,
  DAY_SELECT_ID,
  RETURN_TO_APP_BUTTON_ID,
  SEARCH_RESULT_ID,
  SEARCH_BY_DATE_BUTTON_ID,
  SEARCH_BY_TITLE_BUTTON_ID,
  SEARCH_INPUT_ID,
  RESULT_CARD_CLASS,
} from "../../constant.js";

export function createSearchPageElements() {
  const searchElements = String.raw`
    
        <h2>Search for your diary:</h2>

      <div class="search-container">
          <div id="search-form">
              <form>
                    <select name="year" id= ${YEAR_SELECT_ID}>
                        <option value="" selected disabled hidden>Year</option>
                    </select>
                    <select name="month" id=${MONTH_SELECT_ID}>
                        <option value = "" selected disabled hidden>Month</option>
                    </select>
                    <select name="day" id= ${DAY_SELECT_ID}>
                        <option value = "" selected disabled hidden>Day</option>
                    </select> 
              </form>
              <button id = ${SEARCH_BY_DATE_BUTTON_ID}>Search</button>
          </div>

        <div class="title-search-div">
            <input id = ${SEARCH_INPUT_ID} type="text" placeholder="Diary title">
            <button ID = ${SEARCH_BY_TITLE_BUTTON_ID}>Search</button>
        </div>
      </div>

        <div id = ${SEARCH_RESULT_ID}></div>

        <button id = ${RETURN_TO_APP_BUTTON_ID}>Return</button>

        
    `;

  return searchElements;
}

export function createSearchResultCard(title, date) {
  const resultCardDiv = document.createElement("div");
  resultCardDiv.classList = RESULT_CARD_CLASS;
  const currentDate = new Date(date);
  resultCardDiv.innerHTML = String.raw`

        <h3>${title}</h3>
        <p>${currentDate.toDateString()}</p>
    `;
  return resultCardDiv;
}
