import '../components/Cardnft.js'

class auctions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
        .renderTitle{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:100%;
        }
        .renderTitle > h2{
            font-size:48px;
        }
        .renderCards{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            align-items:center;
            width:100%;

        }
        @media (min-width:320px)and (max-width:768px){
            .renderTitle{
                flex-direction:column;
                margin:1rem 0 ;
            }
            .renderCards{
                justify-content:center;
            }
        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${auctions.styles}</style>
     <div class='container'>
        <div class="renderTitle"> 
           <h2>Hot actions</h2>
           <span>view all </span>
        </div>
        <div class="renderCards">
        <card-nft 
        price="1.20" 
        ends="01.34.45" 
        name="auctions1"
        ></card-nft>
        <card-nft 
            price="0.21" 
            ends="01.34.45" 
            name="auctions2"
            ></card-nft>
        <card-nft
            price="0.01" 
            ends="56.44.45" 
            name="auctions3"
            ></card-nft>
        <card-nft 
            price="0.55" 
            ends="01.34.45" 
            name="auctions4"
            ></card-nft>           
        </div>
     </div>
    `;
    }
}
customElements.define('hot-auctions', auctions);