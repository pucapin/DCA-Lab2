import { createCards } from "../../data/cardData.js";   

class Cardsection2 extends HTMLElement {
    
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
            .section2 {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: row;
                gap: 10px;
               
            }
            .text-cards {
                width: 30%;
                height: auto;
                display: flex;
                flex-direction: column;
                gap: 5px;
               
            }
                
            </style>

            <section class="section2">
            <div class="img-card">
            </div>
            <div class="text-cards">
            </div>
            <div class="img-card">
            </div>

            </section>
        `;

        const imageCardSection = this.shadowRoot.querySelector('.img-card');
        const textCardSection = this.shadowRoot.querySelector('.text-cards');
        const cards = createCards();
        const smallCards = cards.filter(news => news.type === "small-image");
        const textCards = cards.filter(news => news.type === "text");

        
        smallCards.forEach(card => {
            const cardElement = this.ownerDocument.createElement('card2-small');
            cardElement.setAttribute('category', card.category);
            cardElement.setAttribute('title', card.title);
            cardElement.setAttribute('description', card.description);
            cardElement.setAttribute('img', card.img); 
            cardElement.setAttribute('authors', JSON.stringify(card.authors));
            cardElement.setAttribute('date', card.date);
            imageCardSection.appendChild(cardElement);
        });
        textCards.forEach(card => {
            const cardElement = this.ownerDocument.createElement('card3-text');
            cardElement.setAttribute('category', card.category);
            cardElement.setAttribute('title', card.title);
            cardElement.setAttribute('description', card.description);
            cardElement.setAttribute('img', card.img); 
            cardElement.setAttribute('authors', JSON.stringify(card.authors));
            cardElement.setAttribute('date', card.date);
            textCardSection.appendChild(cardElement);
        });
    }
}

export { Cardsection2 };