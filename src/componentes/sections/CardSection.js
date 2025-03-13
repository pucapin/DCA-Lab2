import { createCards } from "../../data/cardData.js";   

class Cardsection extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
            .highlight-card {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                margin-block-start: 1em;
                margin-block-end: 1em;
               
            }
            </style>

            <section class="highlight-card">
            </section>
        `;

        const highlightCardSection = this.shadowRoot.querySelector('.highlight-card');
        const cards = createCards();

        cards.forEach(card => {
            const cardElement = this.ownerDocument.createElement('card1-big');
            cardElement.setAttribute('category', card.category);
            cardElement.setAttribute('title', card.title);
            cardElement.setAttribute('description', card.description);
            cardElement.setAttribute('img', 'https://fastly.picsum.photos/id/487/800/450.jpg?hmac=N9Ljze_4tFShaEEhHXGnJ9oDplCx-GYwdSQIrRQf-04'); 
            cardElement.setAttribute('authors', JSON.stringify(card.authors));
            cardElement.setAttribute('date', card.date);
            highlightCardSection.appendChild(cardElement);
        });
    }
}

export { Cardsection };