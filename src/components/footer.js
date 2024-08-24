class Footer extends HTMLElement {
  _style = null;
  _container = null;
  constructor() {
    super();
    this._container = this.attachShadow({ mode: "open" })
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render()
  }

  _updateStyle() {
    this._style.textContent = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    div {
      background: black;
      color: white;
      text-align: center;
      border: 2px solid green;
      min-height: 20px;
      padding: 10px;
    }

    `
  }

  _clearContent() {
    this._container.innerHTML = ""
  }

  render() {
    this._clearContent();
    this._updateStyle();
    this._container.appendChild(this._style)
    const div = document.createElement("div");
    div.innerHTML = `<p>Coded and Designed by <a href="#">Ardian</a></p>`;
    this._container.appendChild(div);
  }

}


customElements.define("footer-app", Footer)