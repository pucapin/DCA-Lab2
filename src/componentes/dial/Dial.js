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
        
        <link rel="stylesheet" href="./src/componentes/dial/dial.css">
        
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