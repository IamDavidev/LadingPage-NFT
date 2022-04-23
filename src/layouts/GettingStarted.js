import posuere from '../assets/icons/archive-24.svg'
import semper from '../assets/icons/file-media-24.svg'
import lectus from '../assets/icons/rocket-24.svg'
import connect from '../assets/icons/shield-check-24.svg'


class GettingStarted extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
      .container{
          margin-top:10rem;
      }
      .started{
          display:flex;
          justify-content:center;
          align-items:center;
          width: 100%;
          flex-direction:column;
      }
      .started--title{
        font-size:3rem;
      }
      .started--description{
          font-size:1.5rem;
      }
      .options{
          list-style:none;
          display:flex;
          justify-content:center;
            flex-wrap:wrap;
            gap:5rem;
            position:relative;
      }
      .options::before{
          content: '';
        position: absolute;
        box-shadow: 0px 0px 9rem 1rem var(--color--primary);
        width: 100%;
        top: 50px;
        z-index: 10;
      }
      .cardOptions{
          width:161px;
          display:flex;
          align-items:center;
          flex-direction:column;
          padding:1rem;
          box-sizing:border-box;
        }
        
        .cardOptions > figure{
        border-radius:1.5rem;
        background-color: rgba(155, 155, 155, 0.09);
        width:150px;
        height:138px;
        margin:0;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow:inset 0px 4px  4px  0px rgba(255,255,255,0.25),
            inset 0px 4px 4px 0px rgba(255,255,255,0.25);
      }
      .cardOptions--title{
          text-align:center;
      }
      @media (min-width:320px) and (max-width:768px){
          .starte--description{
              text-align:center;
          }
          .options::before{
              height: 100%;
              width:auto;
          }
      }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${GettingStarted.styles}</style>
     <div class='container'>
        <div class="started">
            <h2 class="started--title"> Getting started</h2>
            <p class="starte--description">
                You'd have to have been living under a rock not to have heard about the recent NFT (non-fungible token) hype. Celebrities, digital artists, and creatives are all gearing up to put their artwork on the blockchain.
            </p>
        </div>
        <div class="renderOption">
            <ul class="options">
                <li>
                    <div class="cardOptions">
                        <figure >
                            <img src="${connect}" alt="connect" class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">Connect your wallet</p>
                    </div>
                </li>
                <li>
                    <div class="cardOptions">
                        <figure>
                            <img src="${posuere}" alt="create"  class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">posuere urna, sit amet molestie leo</p>
                    </div>
                </li>
                <li>
                    <div class="cardOptions">
                        <figure>
                            <img src="${semper}" alt="bid"  class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">Semper pretium libero sed quam ac integer ut</p>
                    </div>                            
                </li>
                <li>
                    <div class="cardOptions">
                        <figure>
                            <img src="${lectus}" alt="win"  class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">lectus volutpat magna vitae in arcu</p>
                    </div> 
                </li>
            </ul>
        </div>
     </div>
    `;
    }
}
customElements.define('getting-started', GettingStarted);