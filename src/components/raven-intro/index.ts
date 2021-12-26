const imageURL = require("url:../../assets/raven-intro.png");

class AnimationRaven extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const style = document.createElement("style");
    style.innerHTML = `
      .wrapper {
        position: absolute;
        top:59%;
        left:50%;
        background: transparent url(${imageURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%) scale(0.5);
        width:370px;
        height:290px;
        animation: move-raven 1s steps(4) infinite;
      }
    
      @keyframes move-raven {
        100% {
          background-position: -1501px, 0;
        }
      }
      
      `;
    container.appendChild(style);
    container.appendChild(wrapper);
    shadow.appendChild(container);
  }
}
customElements.define("raven-animation", AnimationRaven);
