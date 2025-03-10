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
        <style>
        .header-blur {
            width: 100%;
            height: 52px;
            display: flex;
            flex-direction: row;
            background-color: transparent;
            border-radius: 13px;
            border: 0.5px, solid rgb(226, 225, 225);
            box-shadow: 1px -1px 41px -8px rgba(0,0,0,0.37);
            -webkit-box-shadow: 1px -1px 41px -8px rgba(0,0,0,0.37);
            -moz-box-shadow: 1px -1px 41px -8px rgba(0,0,0,0.37);
            font-size: 14px;
            color: rgb(54, 52, 52);
            backdrop-filter: blur(30px);
            position: sticky;
            top: 40px;
        }

        .header-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            margin-left: 8px;
            width: 80%;
        }
        
        .header-text {
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
            }

        .header-text:hover {
            background-color: rgb(230, 230, 230);
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            }

        .header-right {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            margin-right: 10px;
            width: 20%;

        }

        #sign-up {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 36px;
            width: 72px;
            border: none;
            border-radius: 6px;
            background-color: rgb(24, 24, 24);
            font-size: 14px;
            color: white;

        }

        #sign-in {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 72px;
            border: none;
            font-size: 14px;
            color: rgb(54, 52, 52);
            border-radius: 6px;
            background-color: transparent;
            transition: 0.3s;
            margin-right: 4px;
        }
        
        #sign-in:hover {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 72px;
            border: none;
            font-size: 14px;
            color: rgb(54, 52, 52);
            border-radius: 6px;
            background-color: rgb(230, 230, 230);
            margin-right: 4px;
        }

        #logo {
            width: 130px;
            height: auto;
        }

        </style>


        <header class="header-blur">
        <div class="header-left">
        <img src="./images/sitemark-logo.svg" alt="" id="logo">
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