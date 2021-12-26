export function initWelcomePage(params) {
  const div = document.createElement("div");
  const piedraUrl = require("url:../../assets/piedra.png");
  const papelUrl = require("url:../../assets/papel.png");
  const tijerasUrl = require("url:../../assets/tijeras.png");
  div.innerHTML = `
  <div class="container_welcome">
      <text-el class="title_welcome" tag="h1">Piedra, Papel o Tijeras</text-el>
      <raven-animation class="raven_welcome"></raven-animation>
      <div class="container-image_welcome">
        <img src="${piedraUrl}" alt="piedra" />
        <img src="${papelUrl}" alt="papel" />
        <img src="${tijerasUrl}" alt="tijeras" />
      </div>
      <button-el class="button_welcome" name="Empezar"></button-el>
    </div>
  `;
  //router
  const buttonEl = div.querySelector(".button_welcome");
  buttonEl.addEventListener("click", () => {
    params.goTo("/game-instructions/game-instructions1");
  });

  return div;
}
