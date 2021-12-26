import { state } from "../../state";

export function initChooseOptionsPage(params) {
  const divEl = document.createElement("div");
  divEl.innerHTML = `
  <div class="container_choose">
    <hands-button></hands-button>
    <timer-component seconds="5" alert="3"></timer-component>
  </div>
  `;
  //Computer options
  const computerOptions = ["piedra", "papel", "tijeras"];
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];
  //guardar el estado

  state.setComputerMove(computerChoice);

  function goToShowPlays() {
    setTimeout(() => {
      params.goTo("/show-plays");
    }, 8000);
  }
  goToShowPlays();

  return divEl;
}
