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
    
        <h1 class="heading">Create your new diary</h1>

        <div id = ${CREATE_NEW_DIARY_MESSAGE_ID}>Message</div>

        <form id = ${CREATE_DIARY_ID}>
            <input id = ${CREATE_TITLE_ID} type="text" name="title" placeholder="Diary title" required />
            <textarea ID = ${CREATE_BODY_ID}  placeholder="Diary body" rows="12" cols="120"></textarea>
        </form>
        <div class="create-diary-buttons-div">
        <button id = ${SUBMIT_NEW_DIARY_BUTTON_ID} type="submit">Submit</button>
        <button id = ${RETURN_TO_APP_BUTTON_ID}>Return</button>
        </div>
    `;

  return createDiaryElements;
}
