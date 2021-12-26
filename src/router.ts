import { initWelcomePage } from "./pages/welcome";
import { initGameInstructionsOnePage } from "./pages/game-instructions/game-instructions1";
import { gameInstructionsTwoPage } from "./pages/game-instructions/game-instructions2";
import { initChooseOptionsPage } from "./pages/choose-options";
import { initShowPlaysPage } from "./pages/show-plays";
import { initResultsPage } from "./pages/results";

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/desafio-m5/,
    component: initWelcomePage,
  },
  {
    path: /\/game-instructions\/game-instructions1/,
    component: initGameInstructionsOnePage,
  },
  {
    path: /\/game-instructions\/game-instructions2/,
    component: gameInstructionsTwoPage,
  },
  {
    path: /\/choose-options/,
    component: initChooseOptionsPage,
  },
  {
    path: /\/show-plays/,
    component: initShowPlaysPage,
  },
  {
    path: /\/results/,
    component: initResultsPage,
  },
];

export function initRouter(container: Element) {
  function goTo(path: any) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (let r of routes) {
      if (r.path.test(route)) {
        const el: Element = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/" || location.pathname == "/desafio-m5") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
