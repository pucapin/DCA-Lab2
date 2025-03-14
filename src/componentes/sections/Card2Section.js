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
                align-items: flex-start;
                gap: 10px;
               
            }
            .img-card {
                width: 31%;

               
            }
            .text-cards {
                width: 38%;
                height: auto;
                display: flex;
                flex-direction: column;
                gap: 5px;
               
            }
            .img-card2 {
                width: 31%;               
            }
                
            </style>

            <section class="section2">
            <div class="img-card">
            </div>
            <div class="text-cards">
            </div>
            <div class="img-card2">
            </div>

            </section>
        `;

        const imageCardSection = this.shadowRoot.querySelector('.img-card');
        const imageCardSection2 = this.shadowRoot.querySelector('.img-card2');
        const textCardSection = this.shadowRoot.querySelector('.text-cards');
        const cards = createCards();
        const smallCards = cards.filter(news => news.type === "small-image");
        const textCards = cards.filter(news => news.type === "text");

        const imageCard1 = this.ownerDocument.createElement('card2-small');
        imageCard1.setAttribute('category', smallCards[0].category);
        imageCard1.setAttribute('title', smallCards[0].title);
        imageCard1.setAttribute('description', smallCards[0].description);
        imageCard1.setAttribute('img', smallCards[0].img); 
        imageCard1.setAttribute('authors', JSON.stringify(smallCards[0].authors));
        imageCard1.setAttribute('date', smallCards[0].date);
        imageCardSection.appendChild(imageCard1);
        
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

        const imageCard2 = this.ownerDocument.createElement('card2-small');
        imageCard2.setAttribute('category', smallCards[1].category);
        imageCard2.setAttribute('title', smallCards[1].title);
        imageCard2.setAttribute('description', smallCards[1].description);
        imageCard2.setAttribute('img', smallCards[1].img); 
        imageCard2.setAttribute('authors', JSON.stringify(smallCards[1].authors));
        imageCard2.setAttribute('date', smallCards[1].date);
        imageCardSection2.appendChild(imageCard2);
    }
}

export { Cardsection2 };