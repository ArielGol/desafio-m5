import { state } from "../../state";

export function initResultsPage(params) {
  //Data from state
  const currentState = state.getState();
  const myPlay = currentState.currentGame.myPlay;
  const computerPlay = currentState.currentGame.computerPlay;
  const winner = state.whoWin(myPlay, computerPlay);

  if (currentState.winner == "player") {
    state.scoreResult("player");
  }
  if (currentState.winner == "computer") {
    state.scoreResult("computer");
  }
  const divEl = document.createElement("div");
  divEl.innerHTML = `
    <div class="container_results">
    <text-el tag="result" class="result">${currentState.result}</text-el>
    <star-result class="star-result" result="${currentState.result}"></star-result>  
    <div class="container_content">
  
    <div class="container_score">
    <h2 class="score-title">Score</h2>
    <p class="player-score">Vos: ${currentState.playerScore}</p>
    <p class="computer-score"> Máquina: ${currentState.computerScore}</p>
    </div>
    <button-el name="Volver a Jugar" class="playAgain"></button-el>
    </div>
  `;
  state.setState(currentState);
  const buttonEl = divEl.querySelector(".playAgain") as any;
  buttonEl.addEventListener("click", () => {
    currentState.currentGame.myPlay = "";
    params.goTo("/game-instructions/game-instructions1");
  });
  return divEl;
}
