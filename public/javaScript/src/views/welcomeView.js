import {
  SEARCH_DIARY_BUTTON_ID,
  WRITE_DIARY_BUTTON_ID,
} from "../../constant.js";

export function createWelcomeElements() {
  const welcomeElements = String.raw`
  
    
    
    <div class="welcome-buttons-container">
      <h1>Welcome to my Diary!</h1>
      <button id =${WRITE_DIARY_BUTTON_ID}>Write new diary</button>
      <button ID = ${SEARCH_DIARY_BUTTON_ID}>Search for diary</button>
    </div>
    
    
  `;

  return welcomeElements;
}
