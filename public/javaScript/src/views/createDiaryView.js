import {
  CREATE_BODY_ID,
  CREATE_DIARY_ID,
  CREATE_NEW_DIARY_MESSAGE_ID,
  CREATE_TITLE_ID,
  RETURN_TO_APP_BUTTON_ID,
  SUBMIT_NEW_DIARY_BUTTON_ID,
} from "../../constant.js";

export function createDiaryElements() {
  const createDiaryElements = String.raw`
    
        <h1>Create your new diary:</h1>

        <form id = ${CREATE_DIARY_ID}>
            <label>My diary title:</label>
            <input id = ${CREATE_TITLE_ID} type="text" name="title" placeholder="Diary title" required />
            <br>
            <label>My diary body:</label>
            <textarea ID = ${CREATE_BODY_ID}  placeholder="Diary body" rows="4" cols="50"></textarea>
            <br>
        </form>

        <button id = ${SUBMIT_NEW_DIARY_BUTTON_ID} type="submit">Submit</button>
        <br>
        <div id = ${CREATE_NEW_DIARY_MESSAGE_ID}>Message</div>
        <br>
        <button id = ${RETURN_TO_APP_BUTTON_ID}>Return</button>
    `;

  return createDiaryElements;
}
