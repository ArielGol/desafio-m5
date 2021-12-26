import { state } from "../../state";

//Url images
const piedraUrl = require("url:../../assets/piedra.png");
const papelUrl = require("url:../../assets/papel.png");
const tijerasUrl = require("url:../../assets/tijeras.png");

export function initShowPlaysPage(params) {
  const divEL = document.createElement("div");
  divEL.innerHTML = `
    <div class="container_show-plays">
      <raven-fire action="" class="raven-fire"></raven-fire>
      <raven-lost class="raven-lost"></raven-lost>
      <div class="computer_container">
        <img src="${""}" class="computer-img"  />
        <img src="${""}" class="computer-img--win"  />
      </div>
    </div>

  `;
  //Computer options
  const computerChoice = state.getState().currentGame.computerPlay;
  const computerImg = divEL.querySelector(".computer-img") as any;
  const computerImgWin = divEL.querySelector(".computer-img--win") as any;
  /*if (computerChoice === "piedra") {
    computerImg.src = piedraUrl;
  } else if (computerChoice === "papel") {
    computerImg.src = papelUrl;
  } else {
    computerImg.src = tijerasUrl;
  }*/
  //raven-fire
  const playerChoice = state.getState().currentGame.myPlay;
  const ravenFireEl = divEL.querySelector(".raven-fire") as any;
  const ravenLostEl = divEL.querySelector(".raven-lost") as any;
  if (playerChoice === "piedra" && computerChoice === "tijeras") {
    ravenFireEl.setAttribute("action", "piedra");
    computerImg.src = tijerasUrl;
  } else if (playerChoice === "papel" && computerChoice === "piedra") {
    ravenFireEl.setAttribute("action", "papel");
    computerImg.src = piedraUrl;
  } else if (playerChoice === "tijeras" && computerChoice === "papel") {
    ravenFireEl.setAttribute("action", "tijeras");
    computerImg.src = papelUrl;
  } else if (playerChoice === "piedra" && computerChoice === "papel") {
    ravenLostEl.style.display = "block";
    ravenFireEl.style.display = "none";
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = papelUrl;
  } else if (playerChoice === "papel" && computerChoice === "tijeras") {
    ravenLostEl.style.display = "block";
    ravenFireEl.style.display = "none";
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = tijerasUrl;
  } else if (playerChoice === "tijeras" && computerChoice === "piedra") {
    ravenLostEl.style.display = "block";
    ravenFireEl.style.display = "none";
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = piedraUrl;
  } else if (playerChoice === "piedra" && computerChoice === "piedra") {
    ravenFireEl.setAttribute("action", "piedra");
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = piedraUrl;
  } else if (playerChoice === "papel" && computerChoice === "papel") {
    ravenFireEl.setAttribute("action", "papel");
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = papelUrl;
  } else if (playerChoice === "tijeras" && computerChoice === "tijeras") {
    ravenFireEl.setAttribute("action", "tijeras");
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = tijerasUrl;
  } else if (playerChoice === "" && computerChoice === "papel") {
    ravenLostEl.style.display = "block";
    ravenFireEl.style.display = "none";
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = papelUrl;
  } else if (playerChoice === "" && computerChoice === "tijeras") {
    ravenLostEl.style.display = "block";
    ravenFireEl.style.display = "none";
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = tijerasUrl;
  } else if (playerChoice === "" && computerChoice === "piedra") {
    ravenLostEl.style.display = "block";
    ravenFireEl.style.display = "none";
    computerImg.style.display = "none";
    computerImgWin.style.display = "block";
    computerImgWin.src = piedraUrl;
  }

  function goToResults() {
    setTimeout(() => {
      params.goTo("/results");
    }, 7000);
  }
  goToResults();

  return divEL;
}
