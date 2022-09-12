import { HEADER_ID, INTERFACE_ID } from "../../constant.js";
import { createHeaderElements } from "../views/headerView.js";

export function initHeader() {
  const userInterface = document.getElementById(INTERFACE_ID);
  const header = document.createElement("div");
  header.id = HEADER_ID;

  header.innerHTML = createHeaderElements();
  userInterface.before(header);
}
