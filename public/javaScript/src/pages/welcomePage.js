import { INTERFACE_ID } from "../../constant.js";
import { createWelcomeElements } from "../views/welcomeView.js";

export function initWelcomePage() {
  const userInterface = document.getElementById(INTERFACE_ID);
  userInterface.innerHTML = "";

  const welcomeElements = createWelcomeElements();

  userInterface.innerHTML = welcomeElements;
}
