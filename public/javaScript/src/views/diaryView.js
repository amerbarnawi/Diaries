import {
  DIARY_TITLE_ID,
  DIARY_BODY_ID,
  RETURN_TO_SEARCH_BUTTON_ID,
  DELETE_BUTTON_ID,
  UPDATE_BUTTON_ID,
  DELETE_UPDATE_MESSAGE_ID,
} from "../../constant.js";

export function createDiaryElements(diaryDetails) {
  const { title, body, date } = diaryDetails;
  const diaryElements = String.raw`
    
        <h1 id = ${DIARY_TITLE_ID}>${title}</h1>
        <p>${date}</p>
        <button id = ${DELETE_BUTTON_ID}>Delete</button>
        <button id = ${UPDATE_BUTTON_ID}>Update</button>
        <div id = ${DELETE_UPDATE_MESSAGE_ID}></div>
        <hr>
        <br>
        <div id = ${DIARY_BODY_ID}>
          <p>${body}</p>
        </div>
        <br>
        <hr>
        <br>
        <br>
        <button id = ${RETURN_TO_SEARCH_BUTTON_ID}>Return</button>
    `;

  return diaryElements;
}
