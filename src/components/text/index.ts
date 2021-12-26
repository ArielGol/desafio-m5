class TextEl extends HTMLElement {
  tags: string[] = ["h1", "p", "result"];
  tag: string = "p";
  constructor() {
    super();
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    if (this.tags.includes(this.getAttribute("tag"))) {
      this.tag = this.getAttribute("tag") || this.tag;
    }
    const rootEl = document.createElement(this.tag);
    rootEl.textContent = this.textContent;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
    .title-text{
      margin:0;
      font-family: 'Bayon', sans-serif;
      font-size:80px;
      line-height:80px;
      color: #864991;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #864991;
    }
    .text{
      font-weight: 600;
      font-size: 40px;
      margin:0;
      color:#E4A2F0;
      font-family: 'Roboto Mono', monospace;
    }
    .result{
      font-size: 55px;
      line-height: 61px;
      font-weight: 400;
      color: #FFFFFF;
      text-transform: uppercase;
    }
    
    
    `;
    shadow.appendChild(styleEl);
    if (this.tag == "h1") {
      rootEl.classList.add("title-text");
    } else {
      rootEl.classList.add("text");
    }
    if (this.tag == "result") {
      rootEl.classList.add("result");
    }

    shadow.appendChild(rootEl);
  }
}
customElements.define("text-el", TextEl);
