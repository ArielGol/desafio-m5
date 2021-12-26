const ravenLostOneURL = require("url:../../assets/raven-lost1.png");
const ravenLostTwoURL = require("url:../../assets/raven-lost2.png");
const ravenLostThreeURL = require("url:../../assets/raven-lost3.png");

class RavenLost extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="wrapper-one"> </div>
      <div class="wrapper-two"> </div>
      <div class="wrapper-three"> </div>`;
    const style = document.createElement("style");
    style.innerHTML = `
    .wrapper-one {
      position: absolute;
      top:20%;
      left:50%;
      background: transparent url(${ravenLostOneURL}) 0 0 no-repeat;
      transform: translate(-50%, -50%);
      width:100px;
      height:162px;
      animation: raven-one 1s steps(2) infinite ;
    }
    @keyframes raven-one {
      100%{
        background-position: -167px 0;
      }
    }
    .wrapper-two {
      position: absolute;
      top:20%;
      left:50%;
      background: transparent url(${ravenLostTwoURL}) 0 0 no-repeat;
      transform: translate(-50%, -50%);
      width:117px;
      height:97px;
      display:none;
      animation: raven-two 1s steps(2) infinite;
    }
    @keyframes raven-two {
      100%{
        background-position: -232px 0;
      }
    }
  
  
    `;
    shadow.appendChild(style);
    shadow.appendChild(container);
    //aparece la animacion raven-two y desaparece raven-one
    setTimeout(() => {
      const wrapperOne = shadow.querySelector(".wrapper-one") as any;
      const wrapperTwo = shadow.querySelector(".wrapper-two") as any;
      wrapperTwo.style.display = "block";
      wrapperOne.style.display = "none";
    }, 1000);
  }
}
customElements.define("raven-lost", RavenLost);
