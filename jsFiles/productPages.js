const product = [
    {
        id: 1,
        image: "../images/Nigeria jersey.webp",
        title: "The Iconic Nigeria Jersey",
        price: 35000
    },
    {
        id: 1,
        image: "../images/PSG Home 2025-26.webp",
        title: "PSG 2025/26 Home Jersey",
        price: 55000
    },
    {
        id: 1,
        image: "../images/Nike FC Barcelona 20_21  Fan Edition Jersey 'Black Gold' CD4231-011.webp",
        title: "Barcelona Away Jersey 2020/21",
        price: 15000
    },
    {
        id: 1,
        image: "../images/Inter Miami 🇺🇸.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 1,
        image: "../images/Nigeria's New Nike Kit.webp",
        title: "Nigeria's New Nike Kit",
        price: 5000
    },
    {
        id: 1,
        image: "../images/Real Madrid 2025_26 Men's Authentic Home Jersey.webp",
        title: "Madrid 2025/26 Home Jersey",
        price: 35000
    },
    {
        id: 1,
        image: "../images/Manchester United Home 2025-26.webp",
        title: "United 2025/26 Home Jersey",
        price: 25000
    },
    {
        id: 1,
        image: "../images/Liverpool FC Away 2025-26.webp",
        title: "Liverpool 2025/26 Away Jersey",
        price: 30000
    },
    {
        id: 1,
        image: "../images/Lionel Messi Barcelona Fanatics Authentic Autographed 2020-2021 Home Jersey.webp",
        title: "Messi 2020/21 Barcelona",
        price: 55000
    },
    {
        id: 1,
        image: "../images/Nigeria 2020 Stadium Away.webp",
        title: "Nigeria 2020 Away Jersey",
        price: 7000
    },
    {
        id: 1,
        image: "../images/Al Nassr 2025_26 Home Kit💛__The wait is over! The brand-new Al Nassr 25_26 Home Kit is here – inspired by the golden.webp",
        title: "Al Nassr 2025/26 Home Jersey",
        price: 9000
    },
    {
        id: 1,
        image: "../images/Argentina Home Jersey 2022 Custom.webp",
        title: "Messi 2022 WC Jersey",
        price: 62000
    },
    {
        id: 1,
        image: "../images/Barcelona Third Shirt 2021_2022.webp",
        title: "Barcelona 3rd Jersey 2021/2022",
        price: 20000
    },
    {
        id: 1,
        image: "../images/Chelsea FC Home 2024-25.webp",
        title: "Chelsea 2024/25 Home Jersey",
        price: 35000
    },
    {
        id: 1,
        image: "../images/download (1).webp",
        title: "Green Madrid Away Jersey",
        price: 12000
    },
    {
        id: 1,
        image: "../images/download (2).webp",
        title: "Argentina 2026 WC Jersey",
        price: 46000
    },
];

const categories = [...new Set (product.map((item)=>{
    return item
}))]

const displayItem = (items)=> {
    document.getElementById('root').innerHTML = items.map((item)=>{
        var {image, title, price} = item;
        return (
            `<div class="box">
            <div class="img-box">
            <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <h3>${title}</h3>
            <button>N${price}</button>
            </div>
            </div>`
        )
    }).join("");
};

const flterFirstCategories = categories.filter(item);
function item(value) {
    if (value.id == 1) {
        return (
            value.id
        )
    }
}

displayItem(flterFirstCategories)