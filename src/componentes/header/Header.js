class Header extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/componentes/header/header.css">

        <header class="header-blur">
        <div class="header-left">
        <img src="./src/images/sitemark-logo.svg" alt="" id="logo">
        <p class="header-text">Features</p>
        <p class="header-text">Testimonials</p>
        <p class="header-text">Highlights</p>
        <p class="header-text">Pricing</p>
        <p class="header-text">FAQ</p>
        <p class="header-text">Blog</p>
        </div>
        <div class="header-right">
            <button id="sign-in">Sign in</button>
            <button id="sign-up">Sign up</button>
        </div>  
        </header>    
        `
    }
}

export {Header};