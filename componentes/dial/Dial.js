class Dial extends HTMLElement{
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
        
        .dial {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 40px;
        }

        .dial-number {
        width: 30px;
        height: 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-radius: 100px;
        transition: 0.4s;
        }

        .dial-number1 {
        width: 30px;
        height: 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        border-radius: 100px;
        }

        .dial-number:hover {
        width: 30px;
        height: 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(240, 242, 247);
        border-radius: 100px;
        }

        </style>
            
        <div class="dial">
        <p class="dial-number1">1</p>
        <p class="dial-number">2</p>
        <p class="dial-number">3</p>
        <p class="dial-number">4</p>
        <p class="dial-number">5</p>
        <p class="dial-number">6</p>
        <p class="dial-number">7</p>
        <p class="dial-number">8</p>
        <p class="dial-number">9</p>
        <p class="dial-number">10</p>
        </div>

        `
    }
}

export {Dial};