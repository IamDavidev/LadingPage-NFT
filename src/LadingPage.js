import './layouts/Discover.js';
import './layouts/Navbar.js';
import './layouts/header.js';
import './layouts/auctions.js';
import './layouts/GettingStarted.js';
import './layouts/Footer.js';

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
        main {
          display:flex;
          padding:0 3rem;
          flex-direction:column;
          box-sizing:border-box;
          width:100%;
        }
        @media (min-width:320px)and (max-width:480px){
          main{
            padding: 0;
          }
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
        <header-nft ></header-nft>
        <main>
          <hot-auctions></hot-auctions>
          <getting-started></getting-started>
          <discover-nft></discover-nft>
          </main>
        <footer-nft></footer-nft>
    </div>
    `;
  }
}
customElements.define('lading-page', LadingPage);
