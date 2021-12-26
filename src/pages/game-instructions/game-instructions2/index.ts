export function gameInstructionsTwoPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="container_game-instructions--two">
      <hands-button mouseover="true"></hands-button>
      <text-el>Elegí: piedra, papel o tijeras antes de que pasen los 5 segundos.</text-el>
      <button-el class="button-play" name="¡Jugar!"></button-el>
    </div>
  `;

  // go to choose an option
  const buttonEl = div.querySelector(".button-play");
  buttonEl.addEventListener("click", () => {
    params.goTo("/choose-options");
  });
  return div;
}
