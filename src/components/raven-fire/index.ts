const ravenFireOneURL = require("url:../../assets/raven-fire1.png");
const ravenFireTwoURL = require("url:../../assets/raven-fire2.png");
const ravenFireThreeURL = require("url:../../assets/raven-fire3.png");
const portalURL = require("url:../../assets/portal.png");
const piedraURL = require("url:../../assets/piedra-fire.png");
const tijerasURL = require("url:../../assets/tijeras-fire.png");
const papelURL = require("url:../../assets/papel-fire.png");

class RavenFire extends HTMLElement {
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
      <div class="wrapper-three"> </div>
      <div class="portal"> </div>
      <div class="piedra"> </div>
      <div class="tijeras"> </div>
      <div class="papel"> </div>    
    `;

    const style = document.createElement("style");
    style.innerHTML = `
      .wrapper-one {
        position: absolute;
        top:10%;
        left:50%;
        background: transparent url(${ravenFireOneURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%);
        width:133px;
        height:117px;
        animation: raven-one 0.8s steps(6);
     
      }
      @keyframes raven-one {
        100%{
          background-position: -765px 0;
        }
      }
      .wrapper-two {
        position: absolute;
        top:10%;
        left:50%;
        background: transparent url(${ravenFireTwoURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%);
        width:133px;
        height:115px;
        display:none;
        animation: raven-two 1s steps(4);
      }
      @keyframes raven-two {
        100%{
          background-position: -474px 0;
        }
      }
      .wrapper-three {
        position: absolute;
        top:10%;
        left:50%;
        background: transparent url(${ravenFireThreeURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%);
        width:133px;
        height:116px;
        display:none;
        animation: raven-three 1s steps(5) infinite;
      }
      @keyframes raven-three {
        100%{
          background-position: -592px 0;
        }
      }
      .portal {
        position: absolute;
        top:30%;
        left:50%;       
        background: transparent url(${portalURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%);
        width:295px;
        height:108px;
        display:none;
        animation: portal 1s steps(3) infinite;
      }
      @keyframes portal {
        100%{
          background-position: -882px 0;
        }
      }
      .piedra {
        position: absolute;
        top:40%;
        left:50%;
        background: transparent url(${piedraURL});
        transform: translate(-50%, -50%) scale(0.5);
        width:242px;
        height:239px;
        display:none;
        animation: piedra 1s ;
        }
      @keyframes piedra {
        100%{
          transform: translate(-50%, 50%) scale(0.5);
        }
      }
      .tijeras {
        position: absolute;
        top:40%;
        left:50%;
        background: transparent url(${tijerasURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%) scale(0.5);
        width:265px;
        height:344px;
        display:none;
        animation: tijeras 1s steps(2) ;
      }
      @keyframes tijeras {
        100%{
          transform: translate(-50%, 50%) scale(0.5);
          background-position:-497px 0;
          
        }
      }
      .papel {
        position: absolute;
        top:40%;
        left:50%;
        background: transparent url(${papelURL}) 0 0 no-repeat;
        transform: translate(-50%, -50%) scale(0.5);
        width:275px;
        height:339px;
        display:none;
        animation: papel 1s steps(3);
      }
      @keyframes papel {
        100%{

          transform: translate(-50%, 50%) scale(0.5);
          background-position:-825px 0;

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
    //aparece la animacion raven-three y desaparece raven-two
    setTimeout(() => {
      const wrapperTwo = shadow.querySelector(".wrapper-two") as any;
      const wrapperThree = shadow.querySelector(".wrapper-three") as any;

      wrapperThree.style.display = "block";
      wrapperTwo.style.display = "none";
      setTimeout(() => {
        const portal = shadow.querySelector(".portal") as any;
        portal.style.display = "block";

        setTimeout(() => {
          const action = this.getAttribute("action");

          if (action == "piedra") {
            const piedra = shadow.querySelector(".piedra") as any;
            piedra.style.display = "block";
          }
          if (action == "tijeras") {
            const tijeras = shadow.querySelector(".tijeras") as any;
            tijeras.style.display = "block";
          }
          if (action == "papel") {
            const papel = shadow.querySelector(".papel") as any;
            papel.style.display = "block";
          }
        }, 1000);
      }, 1000);
    }, 2000);
  }
}
customElements.define("raven-fire", RavenFire);
