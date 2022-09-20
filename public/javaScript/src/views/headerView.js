import {
  SEARCH_PAGE_BUTTON_ID,
  WELCOME_PAGE_BUTTON_ID,
} from "../../constant.js";

export function createHeaderElements() {
  const headerElements = String.raw`
  
    <h1>My Diary</h1>
    <div id="header-navbar">
        <button id=${SEARCH_PAGE_BUTTON_ID}>SEARCH</button>
        <button id=${WELCOME_PAGE_BUTTON_ID}>WELCOME</button>
    </div>
  `;

  return headerElements;
}
