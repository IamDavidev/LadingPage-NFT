import auctions1 from '../assets/images/auctions1.png';
import auctions2 from '../assets/images/auctions2.png';
import auctions3 from '../assets/images/auctions3.png';
import auctions4 from '../assets/images/auctions4.png';

import discover1 from '../assets/images/discover1.png'
import discover2 from '../assets/images/discover2.png'
import discover3 from '../assets/images/discover3.png'
import discover4 from '../assets/images/discover4.png'
import discover5 from '../assets/images/discover5.png'
import discover6 from '../assets/images/discover6.png'
import discover7 from '../assets/images/discover7.png'
import discover8 from '../assets/images/discover8.png'

const nfts = {
    auctions1,
    auctions2,
    auctions3,
    auctions4,
    discover1,
    discover2,
    discover3,
    discover4,
    discover5,
    discover6,
    discover7,
    discover8
};

class CardAuctions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/ `
        :host{

      }
      .container{
          width:298px;
          height:auton;
          display:flex;
          flex-direction:column;
          gap:0.5rem;
          align-items:center;
          justify-content:center;
      }
      .auctions--img{
          width:100%;
          height:313px;
          object-fit:cover;
      }
      .auctions__header{
          width:100%;
          display:flex;
          justify-content:space-between;
            align-items:center;
            position:relative;
      }
      .auctions__header::after{
          content:'';
          position:absolute;
          width:100%;
          height:2px;
          background-color:var(--color--primary);
          bottom:0;
      }
      .auctions__footer{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
      }
      .auctions__footer--btn{
          background: transparent;
          border:1px solid var(--text--color);
            color:var(--text--color);
          font-weight:bold;
          padding:0.7rem 1.5rem;
          border-radius:8px;

      }
      
      .auctions__footer--ends > span{
            font-weight:bold;
      }

    `;
    }

    connectedCallback() {
        this.name = this.getAttribute('name');
        this.price = this.getAttribute('price');
        this.ends = this.getAttribute('ends');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
        <style>${CardAuctions.styles}</style>
     <div class='container'>
        <img 
            src="${nfts[this.name]}" 
            alt="${this.name}" 
            class="auctions--img"
            />
        <div class='auctions__header'>
            <p class="auctions__header--name">
                nft lorem
            </p>
            <span class="auctions__header--price">${this.price} weth</span>
        </div>
        <div class="auctions__footer">
            <p class="auctions__footer--ends">ends in <span>${this.ends}</span></p>
            <button class="auctions__footer--btn"> bid </button>
        </div>
     </div>
    `;
    }
}
customElements.define('card-nft', CardAuctions);
