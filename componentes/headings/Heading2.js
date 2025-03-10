class Heading2 extends HTMLElement{
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
        .heading2 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 30px;
        }

        </style>
            <h1 class="heading2">${this.getAttribute('text')}</h1>
        `
    }
}

export {Heading2};