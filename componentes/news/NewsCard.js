class NewsCard extends HTMLElement{
    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./componentes/news/news.css">
        
            <link rel="stylesheet" href="styles.css">
            <div class="card-3">
            <p class="category-card">${this.getAttribute('category')}</p>
            <h3 class="title-card">${this.getAttribute('title')}</h3>
            <p class="text-card">${this.getAttribute('description')}</p>
            <img src="" alt="">
            <div class="card-3-info">
            <p class="writer-card">${this.getAttribute('author')}</p>
            <p class="date-card">${this.getAttribute('date')}</p>
            </div>
            </div>
        `;
    }


}
export {NewsCard};