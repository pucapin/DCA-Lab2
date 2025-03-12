class Category extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `  
        <link rel="stylesheet" href="./src/componentes/category/category.css">
        
        <section class="category">
        <nav class="category-nav">
        <button class="category-btn">All categories</button>
        <button class="category-btn2">Company</button>
        <button class=" category-btn2">Product</button>
        <button class=" category-btn2">Design</button>
        <button class=" category-btn2">Engineering</button>
        </nav>
        <div class="search-container">
        <input type="text" placeholder="Search..." class="search-input">
        </div>
        </section>  `
    }
}

export {Category};