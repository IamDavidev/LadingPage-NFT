import '../layouts/Navbar.js';
import '../layouts/header.js'


class LadingPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{
        }
        .container{
            width: 100%;
            box-sizing: border-box;
            padding:.5rem 1rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:6rem;
        }
    

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${LadingPage.styles}</style>
    <div class='container'>
        <nav-bar></nav-bar>
        <header-layout></header-layout>
        <main>
            main
        </main>
        <footer>
            footer
        </footer>
    </div>
    `;
  }
}
customElements.define('lading-page', LadingPage);
