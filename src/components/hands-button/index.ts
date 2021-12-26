import { state } from "../../state";

const rockNormalImageURL = require("url:../../assets/rock_normal.png");
const rockClickedImageURL = require("url:../../assets/rock_clicked.png");
const paperNormalImageURL = require("url:../../assets/paper_normal.png");
const paperClickedImageURL = require("url:../../assets/paper_clicked.png");
const scissorsNormalImageURL = require("url:../../assets/scissors_normal.png");
const scissorsClickedImageURL = require("url:../../assets/scissors_clicked.png");

class Hands extends HTMLElement {
  shadowRoot: ShadowRoot;
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {
    const rock = this.shadowRoot.getElementById("piedra");
    const paper = this.shadowRoot.getElementById("papel");
    const scissors = this.shadowRoot.getElementById("tijeras");
    const rockImage = this.shadowRoot.getElementById("piedra-image") as any;
    const paperImage = this.shadowRoot.getElementById("papel-image") as any;
    const scissorsImage = this.shadowRoot.getElementById(
      "tijeras-image"
    ) as any;

    const mouseOverEvent = this.getAttribute("mouseover");
    if (mouseOverEvent === "true") {
      rock.addEventListener("mouseover", function () {
        rockImage.src = rockClickedImageURL;
      });
      rock.addEventListener("mouseout", function () {
        rockImage.src = rockNormalImageURL;
      });
      paper.addEventListener("mouseover", function () {
        paperImage.src = paperClickedImageURL;
      });
      paper.addEventListener("mouseout", function () {
        paperImage.src = paperNormalImageURL;
      });
      scissors.addEventListener("mouseover", function () {
        scissorsImage.src = scissorsClickedImageURL;
      });
      scissors.addEventListener("mouseout", function () {
        scissorsImage.src = scissorsNormalImageURL;
      });
    }
    const lastState = state.getState();
    //Agregar eventos a los botones
    rock.addEventListener("click", () => {
      rockImage.src = rockClickedImageURL;
      paperImage.src = paperNormalImageURL;
      scissorsImage.src = scissorsNormalImageURL;
      state.getState().currentGame.myPlay = "";
      state.setMove("piedra");
      state.setState({ ...lastState });
    });
    paper.addEventListener("click", () => {
      rockImage.src = rockNormalImageURL;
      paperImage.src = paperClickedImageURL;
      scissorsImage.src = scissorsNormalImageURL;
      state.getState().currentGame.myPlay = "";
      state.setMove("papel");
      state.setState({ ...lastState });
    });
    scissors.addEventListener("click", () => {
      rockImage.src = rockNormalImageURL;
      paperImage.src = paperNormalImageURL;
      scissorsImage.src = scissorsClickedImageURL;
      state.getState().currentGame.myPlay = "";
      state.setMove("tijeras");
      state.setState({ ...lastState });
    });
  }
  render() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    //Contenedor de los botones que son las imagenes de las manos
    const container = document.createElement("div");
    container.classList.add("hands-container");
    //Botones de las manos
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    //Imagenes de las manos
    const rockImage = document.createElement("img");
    const paperImage = document.createElement("img");
    const scissorsImage = document.createElement("img");
    //Agregar imagenes a los botones
    rock.appendChild(rockImage);
    paper.appendChild(paperImage);
    scissors.appendChild(scissorsImage);
    //Agregar imagenes a los botones
    rockImage.src = rockNormalImageURL;
    paperImage.src = paperNormalImageURL;
    scissorsImage.src = scissorsNormalImageURL;
    //Agregar clases a los botones
    rock.classList.add("hands-button");
    paper.classList.add("hands-button");
    scissors.classList.add("hands-button");
    //Agregar clases a las imagenes
    rockImage.classList.add("hands-image");
    paperImage.classList.add("hands-image");
    scissorsImage.classList.add("hands-image");
    //Agregar id a los botones
    rock.id = "piedra";
    paper.id = "papel";
    scissors.id = "tijeras";
    //Agregar id a las imagenes
    rockImage.id = "piedra-image";
    paperImage.id = "papel-image";
    scissorsImage.id = "tijeras-image";
    const style = document.createElement("style");
    style.innerHTML = `
      .hands-container {
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      .hands-button {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        padding: 0;
      }
      .hands-image {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }

    `;

    //Agregar botones a el contenedor
    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);
    //Agregar contenedor a shadowRoot
    shadowRoot.appendChild(style);

    shadowRoot.appendChild(container);
  }
}
customElements.define("hands-button", Hands);
