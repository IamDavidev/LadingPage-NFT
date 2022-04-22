class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/ `
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

    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
        <style>${Footer.styles}</style>
     <footer class='container'>
     
        <div class="footer__reference">
            <p class="footer__reference--text">
                Esta es un lading page de prueba 
                que utilize solo para maquetar la estructura
                de la pagina.
                No me atribuyo el diseño de esta pagina.
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
    `;
    }
}
customElements.define('footer-nft', Footer);
