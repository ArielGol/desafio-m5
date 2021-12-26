class ButtonEl extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    //Creo un shadow root
    const shadow = this.attachShadow({ mode: "open" });
    //Creo un boton
    const buttonEl = document.createElement("button");
    //Le damos una clase
    buttonEl.classList.add("button");
    //Le damos un texto
    const name = this.getAttribute("name");
    buttonEl.textContent = name;
    //Creamos algo CSS para aplicar al shadow root dom
    const style = document.createElement("style");
    style.innerHTML = `
    .button{
      background-color:#8F0962 ;
      border: 10px solid #4A0733;
      box-sizing: border-box;
      border-radius: 10px;
      color:#F07DF6;
      text-transform: uppercase;
      font-family: 'Odibee Sans', cursive;
      height: 87px;
      font-size: 45px;
      width:100%;
      
    }
    .button:hover{
      background-color:#4A0733;
      color:#CC009F;
      cursor:pointer;
      transform: translate3d(0px, -2px, 0px);

    }
    

`;
    //Añadimos style al shadow root
    shadow.appendChild(style);
    //Añadimos el boton al shadow root
    shadow.appendChild(buttonEl);
  }
}
customElements.define("button-el", ButtonEl);
