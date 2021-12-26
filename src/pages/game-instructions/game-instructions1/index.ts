export function initGameInstructionsOnePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="container_game-instructions">
      <text-el
        >Presioná jugar y ayuda a Raven a vencer al demonio humano...</text-el
      >
      <button-el class="button-next"name="Siguiente"></button-el>
    </div>
  `;
  // go to game instructions 2
  const buttonEl = div.querySelector(".button-next");
  buttonEl.addEventListener("click", () => {
    params.goTo("/game-instructions/game-instructions2");
  });

  return div;
}
