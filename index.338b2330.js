const f=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}};f();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${r.styles}</style>
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
    `}}customElements.define("discover-nft",r);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
        :host{
            width: 100%;
        }
        .container{
            width: 100%;
        }
        .nav{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .nav__figure{
            width:134px;
            height:22px;
        }
        .nav__navigation{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:1rem;
            list-style:none
        }
        .nav__navigation--link{
            text-decoration:none;
            text-transform:uppercase;
            letter-spacing:.1rem;
            transition:all .5s ease-in-out;
            border:1px solid var(--bg--color)
        }
        .nav__navigation--link:hover{
            background:linear-gradient(
                to right,
                var(--color--primary),
                var(--color--secondary)
            );
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            border-bottom:1px solid var(--color--primary);
        }

        .nav__buttons{
            display:flex;
            gap:1rem;
            align-items:center;
        }
        .nav__buttons > button{
            text-transform:uppercase;
            height:45px;
            width:126px;
            background:transparent;
            color:var(--text--color);
        }

        
        .nav__buttons--create{
            border-radius:1rem;
            border:1px solid var(--text--color);
        }
        .nav__buttons--signin{
            border:none;
        }
        @media (min-width:300px) and (max-width:768px){
            .nav{
                flex-direction:column;
            }
        }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${a.styles}</style>
     <div class='container'>
        <nav class="nav">
            <figure class="nav__figure">
                <img src="/Gaslur.svg" alt="gaslur" class="nav__figure--img" />
            </figure>
            <ul class="nav__navigation">
                <li class="nav__navigation--link">Home</li>
                <li class="nav__navigation--link">My Profile</li>
                <li class="nav__navigation--link">Activity</li>
                <li class="nav__navigation--link">How it Works</li>
            </ul>
            <div class="nav__buttons">
                <button class="nav__buttons--create">Create</button>
                <button class="nav__buttons--signin">sign in</button>
            </div>
        </nav>
     </div>
    `}}customElements.define("nav-bar",a);var u="/ladingpage-nft/header.ddbe918f.png";class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${s.styles}</style>
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
                <img src="${u}" alt="header"  class="card--img"/>
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

    `}}customElements.define("header-nft",s);var h="/ladingpage-nft/auctions1.04678622.png",v="/ladingpage-nft/auctions2.269ebd7f.png",b="/ladingpage-nft/auctions3.90437022.png",x="/ladingpage-nft/auctions4.1aa2483f.png",_="/ladingpage-nft/discover1.93022e84.png",y="/ladingpage-nft/discover2.d996ea2c.png",w="/ladingpage-nft/discover3.88b6d257.png",k="/ladingpage-nft/discover4.2e6d56eb.png",T="/ladingpage-nft/discover5.3d77e2a1.png",j="/ladingpage-nft/discover6.d623dcd4.png",z="/ladingpage-nft/discover7.7dbfe61b.png",L="/ladingpage-nft/discover8.82447850.png";const H={auctions1:h,auctions2:v,auctions3:b,auctions4:x,discover1:_,discover2:y,discover3:w,discover4:k,discover5:T,discover6:j,discover7:z,discover8:L};class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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

    `}connectedCallback(){this.name=this.getAttribute("name"),this.price=this.getAttribute("price"),this.ends=this.getAttribute("ends"),this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${o.styles}</style>
     <div class='container'>
        <img 
            src="${H[this.name]}" 
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
    `}}customElements.define("card-nft",o);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${c.styles}</style>
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
    `}}customElements.define("hot-auctions",c);var C="/ladingpage-nft/archive-24.0a8da568.svg",E="/ladingpage-nft/file-media-24.a7eb84b4.svg",M="/ladingpage-nft/rocket-24.016b6886.svg",O="/ladingpage-nft/shield-check-24.5435d37a.svg";class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${d.styles}</style>
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
                            <img src="${O}" alt="connect" class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">Connect your wallet</p>
                    </div>
                </li>
                <li>
                    <div class="cardOptions">
                        <figure>
                            <img src="${C}" alt="create"  class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">posuere urna, sit amet molestie leo</p>
                    </div>
                </li>
                <li>
                    <div class="cardOptions">
                        <figure>
                            <img src="${E}" alt="bid"  class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">Semper pretium libero sed quam ac integer ut</p>
                    </div>                            
                </li>
                <li>
                    <div class="cardOptions">
                        <figure>
                            <img src="${M}" alt="win"  class="cardOptions--img"/>
                        </figure>
                        <p class="cardOptions--title">lectus volutpat magna vitae in arcu</p>
                    </div> 
                </li>
            </ul>
        </div>
     </div>
    `}}customElements.define("getting-started",d);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
        :host{
            width:100%;
       } 
       ul{
              list-style:none;

       }
       .container{
           padding:1rem 4rem;
            box-sizing: border-box;
            display:flex;
            justify-content:space-between;
       }
       .container::before{
              content:'';
              position: absolute;
              width:100%;
              height:1px;
              background: var(--color--primary);
              right: 0;
       }
       .footer__reference{
              width:40%;
       }
       .footer__reference--text{
           font-size:2.5rem; 
           margin:0;
       }
       .footer{
            display:flex;
            justify-content:center;
            gap:40px
       }
        .footer__marketplace--title,
        .footer__company--title,
        .footer__contact--title{
            font-size:2.5rem;
            font-weight:bold;
            margin:0;
        }
        li{
            margin:1rem 0;
            font-size:1.5rem
        }
        @media (min-width:320px) and (max-width:768px){

            .container{
                padding:0;
                flex-direction:column;
                gap:10rem;
            }

            .footer__reference{
                width:100%;
            }
            
            .footer{
                flex-direction:column;
            }
        }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${l.styles}</style>
     <footer class='container'>
     
        <div class="footer__reference">
            <p class="footer__reference--text">
                Esta es un lading page de prueba 
                que utilize solo para maquetar la estructura
                de la pagina.
                No me atribuyo el dise\xF1o de esta pagina.
            </p>
        </div>
        <div class="footer">
            <div class="footer__marketplace">
                <h3 class="footer__marketplace--title">Marketplace</h3>
                <ul class="footer__marketplace--list">
                    <li class="item">Home</li>
                    <li class="item">Activity</li>
                    <li class="item">Disvocer</li>
                    <li class="item">Learn More</li>
                </ul>
            </div>
            <div class="footer__company">
                <h3 class="footer__company--title">Company</h3>
                <ul class="footer__company--list">
                    <li class="item">About Us</li>
                    <li class="item">Services</li>
                    <li class="item">porfolio</li>
                </ul>
            </div>
            <div class="footer__contact">
                <h3 class="footer__contact--title">Contact</h3>
                <ul class="footer__contact--list">
                    <li class="item">Facebook</li>
                    <li class="item">Instagram</li>
                    <li class="item">Twitter</li>
                    <li class="item">Email</li>
                </ul>
            </div>

        </div>
     </footer>
    `}}customElements.define("footer-nft",l);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${p.styles}</style>
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
    `}}customElements.define("lading-page",p);
