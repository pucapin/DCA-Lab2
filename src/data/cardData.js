export function createCards() {
    return [
        {   
            category: "Engineering",
            title: "Revolutionizing software development with cutting-edge tools",
            description: "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape...",
            img: "https://picsum.photos/800/450?random=${getPersistentRandom(1)}",
            authors: [
                { name: "Remy Sharp", img: "https://mui.com/static/images/avatar/1.jpg" },
                { name: "Travis Howard", img: "https://mui.com/static/images/avatar/2.jpg" }
            ],
            date: "July 14, 2021",
            type: "big"
        },
        {  
            category: "Product",
            title: "Innovative product features that drive success",
            description: "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out...",
            img: "https://picsum.photos/800/450?random=${getPersistentRandom(2)}",
            authors: [
                { name: "Erika Johns", img: "https://mui.com/static/images/avatar/6.jpg" },
            ],
            date: "July 14, 2021",
            type: "big"
        },
        {  
            category: "Design",
            title: "Designing for the future: trends and insights",
            description: "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise...",
            img: "https://picsum.photos/800/450?random=${getPersistentRandom(3)}",
            authors: [
                { name: "Kate Morrison", img: "https://mui.com/static/images/avatar/7.jpg" },
            ],
            date: "July 14, 2021",
            type: "small-image"
        },
        {  
            category: "Product",
            title: "Maximizing efficiency with our latest product updates",
            description: "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a...",
            img: "https://picsum.photos/800/450?random=${getPersistentRandom(4)}",
            authors: [
                { name: "Travis Howard", img: "https://mui.com/static/images/avatar/2.jpg" },
            ],
            date: "July 14, 2021",
            type: "small-image"
        },
        {  
            category: "Company",
            title: "Our company's journey: milestones and achievements",
            description: "Take a look at our company's journey and the milestones we've achieved along the way. From...",
            img: "",
            authors: [
                { name: "Cindy Baker", img: "https://mui.com/static/images/avatar/3.jpg" },
            ],
            date: "July 14, 2021",
            type: "text"
        },
        {  
            category: "Engineering",
            title: "Pioneering sustainable engineering solutions",
            description: "Learn about our commitment to sustainability and the innovative engineering solutions we're...",
            img: "https://picsum.photos/800/450?random=${getPersistentRandom(4)}",
            authors: [
                { name: "Agnes Walker", img: "https://mui.com/static/images/avatar/4.jpg" },
                { name: "Trevor Henderson", img: "https://mui.com/static/images/avatar/5.jpg" },
            ],
            date: "July 14, 2021",
            type: "text"
        },

    ];
}

