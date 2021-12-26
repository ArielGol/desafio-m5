import "./components/button";
import "./components/text";
import "./components/raven-intro";
import "./components/hands-button";
import "./components/countdown-timer";
import "./components/raven-fire";
import "./components/raven-lost";
import "./components/star-result";
import { state } from "./state";

import { initRouter } from "./router";

function main() {
  const root = document.querySelector(".root");
  initRouter(root);
  state.init();
}
main();
