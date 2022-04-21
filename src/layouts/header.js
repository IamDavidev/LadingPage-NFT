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
        width:50px;
        height:50px;
        border-radius:50%;
        border:1px solid var(--color--primary);
        padding:3px;
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
                discover, collect, and charity in extraordinary <span>NFT</span> marketplace
            </h1>
            <p class="header__bio"> brings together artists and creators on the same platform. Buy exclusive premium NFTs created by the world's top artists.</p>
            <div class="header__btns"> 
                <button class="header__btns--explore">Explore</button>
                <button class="header__btns--create">Create</button>
            </div>
        </section>
        <section>
            <div class="card">
                <img src="${imgHeader}" alt="header"  class="card--img"/>
                <div class="card__footer">
                    <img src="/Gaslur.svg" alt="profile" class="card__footer--user" />
                    <div class="card__footer--containerUser">
                        <div class="user">
                            <p class="user--name">
                                Laura
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
customElements.define('header-layout', header);
