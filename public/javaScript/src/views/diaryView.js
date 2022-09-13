import {
  DIARY_TITLE_ID,
  DIARY_BODY_ID,
  RETURN_TO_SEARCH_BUTTON_ID,
} from "../../constant.js";

export function createDiaryElements(title, body, date) {
  const diaryElements = String.raw`
    
        <h1 id = ${DIARY_TITLE_ID}>${title}</h1>
        <p>${date}</p>
        <hr>
        <br>
        <p id = ${DIARY_BODY_ID}>${body}</p>
        <br>
        <button id = ${RETURN_TO_SEARCH_BUTTON_ID}>Return</button>
    `;

  return diaryElements;
}
