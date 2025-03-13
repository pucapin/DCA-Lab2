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
            description: "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences...",
            img: "https://picsum.photos/800/450?random=3",
            authors: [
                { name: "Kate Morrison", img: "https://mui.com/static/images/avatar/7.jpg" },
            ],
            date: "July 14, 2021",
            type: "smallImage"
        },
    ];
}

