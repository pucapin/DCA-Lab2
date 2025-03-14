class Card2 extends HTMLElement{
    static get observedAttributes() {
		return ['category', 'title', 'description', 'img', 'author', 'date'];
	}

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {

        const authors = JSON.parse(this.getAttribute('authors') || "[]");

        const authorImages = authors.map(author => `
            <img src="${author.img}" alt="${author.name}" class="img-news">
        `).join('');

        const authorNames = authors.map(author => author.name).join(', ');

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/componentes/card-2/card2.css">
        
        <link rel="stylesheet" href="styles.css">

        <div class="card-2">
            <div class="img-container">
                <img class="img-card"src="${this.getAttribute('img')}" alt="">
            </div>
                <div class="text-container">
                <p class="category-card">${this.getAttribute('category')}</p>
                <h3 class="title-card">${this.getAttribute('title')}</h3>
                <p class="text-card">${this.getAttribute('description')}</p>

                <div class="card-2-info">
            <div class="author-images">
            ${authorImages}
            </div>
            <div class="writer-card">
            ${authorNames}
            </div>
            <p class="date-card">${this.getAttribute('date')}</p>
            </div>
            </div>
        </div>
            
            
           `
    }
}

export {Card2};