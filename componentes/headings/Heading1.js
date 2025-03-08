class Heading1 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ['text'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        .heading1 {
        font-size: 50px;
        font-weight: 600;
        margin-bottom: 10px;
        }

        </style>
            <h1 class="heading1">${this.getAttribute('text')}</h1>
        `
    }
}

export {Heading1};