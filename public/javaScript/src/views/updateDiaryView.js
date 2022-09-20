import {
  UPDATE_TITLE_ID,
  UPDATE_BODY_ID,
  UPDATE_DIARY_BUTTON_ID,
  UPDATE_DIARY_MESSAGE_ID,
  RETURN_TO_DIARY_BUTTON_ID,
} from "../../constant.JS";

export function createUpdateDiaryElements() {
  const updateDiaryElements = String.raw`
    
        <h1 class="heading">Update your diary</h1>

        <div id = ${UPDATE_DIARY_MESSAGE_ID}>Message</div>

        <form>
            <input id = ${UPDATE_TITLE_ID} type="text" name="title" required />
            <textarea ID = ${UPDATE_BODY_ID} rows="12" cols="120"></textarea>
        </form>

        <div class="update-buttons-div">
          <button id = ${UPDATE_DIARY_BUTTON_ID} type="submit">Update</button>
          <button id = ${RETURN_TO_DIARY_BUTTON_ID}>Return to diary</button>
        </div>
        
        
    `;

  return updateDiaryElements;
}
