class NewsCard extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
            .card-3 {
                min-width: 320px;
                max-width: 520px;
                
            }
            .category-card {
                font-size: 13px;
                color: rgb(54, 52, 52);
            }

            .text-card {
            font-size: 15px;
            color:rgb(82, 81, 81);
            margin-bottom: 0px;
            }

            .card-3-info {
                margin-top: 0px;
                display: flex;
                flex-direction: row;
            }

            .writer-card {
                margin-top: 0px;
                margin-right: 50%;
                font-size: 13px;
            }

            .date-card {
                font-size: 14px;

            }
            </style>
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