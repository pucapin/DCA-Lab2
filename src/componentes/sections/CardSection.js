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
        const bigCardData = cards.filter(news => news.type === 'big');

        bigCardData.forEach(card => {
            const cardElement = this.ownerDocument.createElement('card1-big');
            cardElement.setAttribute('category', card.category);
            cardElement.setAttribute('title', card.title);
            cardElement.setAttribute('description', card.description);
            cardElement.setAttribute('img', card.img); 
            cardElement.setAttribute('authors', JSON.stringify(card.authors));
            cardElement.setAttribute('date', card.date);
            highlightCardSection.appendChild(cardElement);
        });
    }
}

export { Cardsection };