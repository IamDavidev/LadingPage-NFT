import imgHeader from '../assets/images/header.png';
class header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
  }

  static get styles() {
    return /*css*/ `
        :host{
      }
      .container{
          display:flex;
          justify-content:space-between;
          gap:5rem;
          padding:1rem 3rem;
          box-sizing:border-box;
      }
      .header__title{
        font-weight:bold;
        font-size:72px;
        line-height:1.2;
        color:var(--color-primary);
        margin:0;
      }
      .header__bio{
          font-size:1.5rem;
          margn-top:24px;
          margin-bottom:32px;
      }
      .header__btns{
            display:flex;
            align-items:center;
            gap:10px;
        }
        .header__btns > button{
          color:var(--text--color);
          border-radius:1rem;
          font-size:1.5rem;
          width:218px;
          font-weight:bold;
          height:60px;
          box-sizing:border-box;
      }
        .header__btns--explore{
            background:linear-gradient(
                90deg,
                var(--color--primary) ,
                var(--color--secondary)
            );
            border:none;
      }
      .header__btns--create{
        background:transparent;
        border:1px solid var(--text--color);
      }
      .card{
          padding:1rem;
          box-sizing:border-box;
          border:1px solid var(--color--secondary);
          border-radius:1rem;
          position:relative;
      }
      .card::before{
          content: '';
          position: absolute;
          top: -1rem;
          left: -1rem;
          z-index: 10;
          box-shadow:0px 0px 8rem 4rem var(--color--primary);
      }
      .card::after{
            content:'';
            bottom:-1rem;
            right:-1rem;
            position:absolute;
            z-index:10;
            box-shadow:0px 0px 8rem 4rem var(--color--secondary);
      }
      .card__footer{
            display:flex;
            align-items:center;
            gap:10px
      }
      .card__footer--user{
        width:52px;
        height:52px;
        border-radius:50%;
        object-fit:contain;
      }
      .card__footer--containerUser{
          display:flex;
          align-items:center;
          justify-content:space-between;
          width:100%;
          font-weight:bold;
      }
      
      .statistics{
          text-align:end;
          font-weight:bold;
      }
      @media (min-width:320px) and (max-width:1023px){
        .container{
          flex-direction:column;
          padding:0;
        }
        .header__title{
          font-size:42px;
        }
        .header__bio{
          text-align:center;
        }
        .header__btns{
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .header__btns > button{
          width:120px;
        }
        .containCard{
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .card--img{
          width:100%;
        }
      }

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${header.styles}</style>
     <div class='container'>
        <section class="header">
            <h1 class="header__title">
                Discover, collect, and charity in extraordinary <span>NFT</span> marketplace
            </h1>
            <p class="header__bio"> brings together artists and creators on the same platform. Buy exclusive premium NFTs created by the world's top artists.</p>
            <div class="header__btns"> 
                <button class="header__btns--explore">Explore</button>
                <button class="header__btns--create">Create</button>
            </div>
        </section>
        <section class="containCard">
            <div class="card">
                <img src="${imgHeader}" alt="header"  class="card--img"/>
                <div class="card__footer">
                    <img src="/Gaslur.svg" alt="profile" class="card__footer--user" />
                    <div class="card__footer--containerUser">
                        <div class="user">
                            <p class="user--name">
                                Gaslur
                            </p>
                            <p class="user--wallet">
                                0.21 ETH
                             </p>
                        </div>
                        <div class="statistics">
                           <p>
                            we are here 
                           </p> 
                            <p>
                                25
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </div>

    `;
  }
}
customElements.define('header-nft', header);
