const ravenWinUrl = require("url:../../assets/raven_win.png");
const ravenLoseUrl = require("url:../../assets/raven_lose.png");
const ravenTieUrl = require("url:../../assets/raven_tie.png");

class Star extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
    <div class="star">
    <span class="star-one"></span>
    </div>
    <div class="star"></div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `
    .star {   
      position: absolute;
      width:250px;
      height:250px;
      clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%, 21% 91%, 32% 57%, 2% 35% ,39% 35%);
    }
    .star:nth-child(1){
    
    }
    .star:nth-child(2){
      background:linear-gradient(35deg, #ff0000,#00ff00,#b2f093,#ff3ce9,#006c08,#ff0000,#00ff00,#b2f093,#ff3ce9,#006c08);
      background-size: 300%;
      filter: blur(10px);
      z-index: -1;
      transform:scale(1.3);
      animation: star-animate 3s  infinite;
    }
    @keyframes star-animate {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 200% 0; 
      }
      100% {
        background-position: 0 0;
      }
    }
    .star-one{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      font-family:Odibee Sans;
      color: #fff;
    }

    
    `;
    const result = this.getAttribute("result");
    const ravenEl = container.querySelector(".star:nth-child(1)") as any;
    const ravenTwoEl = container.querySelector(".star:nth-child(2)") as any;

    if (result == "Ganastes") {
      ravenEl.style.background = `url(${ravenWinUrl}) no-repeat`;
      ravenEl.style.backgroundSize = "85%";
      ravenEl.style.backgroundPosition = "center";
    }
    if (result == "Perdistes") {
      ravenEl.style.background = `url(${ravenLoseUrl}) no-repeat`;
      ravenEl.style.backgroundSize = "85%";
      ravenEl.style.backgroundPosition = "center";
      ravenTwoEl.style.background =
        "linear-gradient(47deg, #ff0000,#ff000094,#4e3d3d,#511b7d)";
      ravenTwoEl.style.backgroundSize = "300%";
    }
    if (result == "Empate") {
      ravenEl.style.background = `url(${ravenTieUrl}) no-repeat`;
      ravenEl.style.backgroundSize = "33%";
      ravenEl.style.backgroundPosition = "center";
      ravenTwoEl.style.background =
        "linear-gradient(136deg, #1b00ff,#00ffa1,#a193f0,#3c66ff,#003f6c, #1b00ff,#00ffa1,#a193f0,#3c66ff,#003f6c)";
      ravenTwoEl.style.backgroundSize = "300%";
    }

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}
customElements.define("star-result", Star);
