class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
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
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Navbar.styles}</style>
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
    `;
    }
}
customElements.define('nav-bar', Navbar);