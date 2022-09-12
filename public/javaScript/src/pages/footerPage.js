import { FOOTER_ID, INTERFACE_ID } from "../../constant.js";
import { createFooterElements } from "../views/footerView.js";

export function initFooter() {
  const userInterface = document.getElementById(INTERFACE_ID);
  const footer = document.createElement("div");
  footer.id = FOOTER_ID;

  footer.innerHTML = createFooterElements();
  userInterface.after(footer);
}
