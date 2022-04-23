class Discover extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
        .discovery{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .discovery--title{
            font-size:48px;
        }
        .discovery__options{
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:40px;

        }
        .discovery__options--opt{
            font-size:1.5rem;
            font-weight:bold;
        }
        .discovery__options--btn{
            background:linear-gradient(
                90deg,
                var(--color--primary) ,
                var(--color--secondary)
            );
            width:;
            border:none;
            padding:0.5rem 2.5rem ;
            font-size:1.5rem;
            font-weight:bold;
            border-radius:10px; 
        }
        .discovery__cards{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:100%;
            flex-wrap:wrap;
        }
        .dicovery__load{
            width: 100%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top:80px
        }
        .discovery__load--more{
            background:transparent;
            border:1px solid var(--text--color);
            color:var(--text--color);
            font-weight:bold;
            padding:1rem 2.5rem;
            border-radius:10px;
        }
        @media (min-width:320px) and (max-width:768px){
            .discovery{
                flex-direction:column;
                margin:2rem 0;
            }
            .discovery__options{
                flex-wrap:wrap;
            }
            .discovery__cards{
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
        <style>${Discover.styles}</style>
     <div class='container'>
        <div class="discovery">
            <h2 class="discovery--title">Discover</h2>
            <div class="discovery__options">
                <span class="discovery__options--opt">Category</span>
                <span class="discovery__options--opt">Cheapest</span>
                <span class="discovery__options--opt">Newest</span>
                <button class="discovery__options--btn">Fillter</button> 
            </div>
        </div>
        <div class="discovery__cards">
            <card-nft 
                price="1.20" 
                ends="01.34.45" 
                name="discover1"
            ></card-nft>
            <card-nft 
                price="0.21" 
                ends="56.44.45" 
                name="discover2"
            ></card-nft>
            <card-nft 
                price="0.01" 
                ends="01.34.45" 
                name="discover3"
            ></card-nft>
            <card-nft 
                price="0.55" 
                ends="01.34.45" 
                name="discover4"
            ></card-nft>
            <card-nft 
                price="1.20" 
                ends="01.34.45" 
                name="discover5"
            ></card-nft>
            <card-nft 
                price="0.21" 
                ends="01.34.45" 
                name="discover6"
            ></card-nft>
            <card-nft 
                price="0.01" 
                ends="56.44.45" 
                name="discover7"
            ></card-nft>
            <card-nft 
                price="0.55" 
                ends="01.34.45" 
                name="discover8"
            ></card-nft>
        </div>
        <div class="dicovery__load">
            <button class="discovery__load--more">Load more</button>
        </div>
     </div>
    `;
    }
}
customElements.define('discover-nft', Discover);