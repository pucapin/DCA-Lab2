import { createNews } from "../../data/newsData.js";
class LatestSection extends HTMLElement{

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
        .latest {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 40px;
    
        }
        </style>
        <div class="latest">
        
        </div>
        `;

        const latest = this.shadowRoot.querySelector('.latest');
        const data = createNews();

        data.forEach(news => {
            const newsCard = this.ownerDocument.createElement('news-card');0
            newsCard.setAttribute('category', news.category);
            newsCard.setAttribute('title', news.title);
            newsCard.setAttribute('description', news.description);
            newsCard.setAttribute("authors", JSON.stringify(news.authors));
            newsCard.setAttribute('date', news.date);
            latest.appendChild(newsCard);
        });
    }
}
export {LatestSection};