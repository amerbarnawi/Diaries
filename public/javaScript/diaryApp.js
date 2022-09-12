import { initFooter } from "./src/pages/footerPage.js";
import { initHeader } from "./src/pages/headerPage.js";
import { initWelcomePage } from "./src/pages/welcomePage.js";

const loadApp = () => {
  initHeader();
  initFooter();
  initWelcomePage();
};

window.addEventListener("load", loadApp);
