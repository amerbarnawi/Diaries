import {
  UPDATE_TITLE_ID,
  UPDATE_BODY_ID,
  UPDATE_DIARY_BUTTON_ID,
  UPDATE_DIARY_MESSAGE_ID,
  RETURN_TO_DIARY_BUTTON_ID,
} from "../../constant.JS";

export function createUpdateDiaryElements() {
  const updateDiaryElements = String.raw`
    
        <h1>Update your diary:</h1>

        <form>
            <label>Diary title:</label>
            <input id = ${UPDATE_TITLE_ID} type="text" name="title" required />
            <br>
            <label>My diary body:</label>
            <textarea ID = ${UPDATE_BODY_ID} rows="4" cols="50"></textarea>
            <br>
        </form>

        <button id = ${UPDATE_DIARY_BUTTON_ID} type="submit">Update</button>
        <br>
        <div id = ${UPDATE_DIARY_MESSAGE_ID}>Message</div>
        <br>
        <button id = ${RETURN_TO_DIARY_BUTTON_ID}>Return to diary</button>
    `;

  return updateDiaryElements;
}
