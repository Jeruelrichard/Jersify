"use strict"

const product = [
    {
        id: 1,
        image: "../images/nigeria-jersey.webp",
        title: "The Iconic Nigeria Jersey",
        price: 35000
    },
    {
        id: 1,
        image: "../images/PSG-Home-2025-26.webp",
        title: "PSG 2025/26 Home Jersey",
        price: 55000
    },
    {
        id: 1,
        image: "../images/FCB-2020-21-away.webp",
        title: "Barcelona Away Jersey 2020/21",
        price: 15000
    },
    {
        id: 1,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 1,
        image: "../images/Nigeria-New-Nike-Kit.webp",
        title: "Nigeria's New Nike Kit",
        price: 5000
    },
    {
        id: 1,
        image: "../images/Madrid-2025-26-home.webp",
        title: "Madrid 2025/26 Home Jersey",
        price: 35000
    },
    {
        id: 1,
        image: "../images/Manchester-United-Home-2025-26.webp",
        title: "United 2025/26 Home Jersey",
        price: 25000
    },
    {
        id: 1,
        image: "../images/Liverpool-FC-Away-2025-26.webp",
        title: "Liverpool 2025/26 Away Jersey",
        price: 30000
    },
    {
        id: 1,
        image: "../images/Messi-2020-21-barcelona.webp",
        title: "Messi 2020/21 Barcelona",
        price: 55000
    },
    {
        id: 1,
        image: "../images/Nigeria-2020-Stadium-Away.webp",
        title: "Nigeria 2020 Away Jersey",
        price: 7000
    },
    {
        id: 1,
        image: "../images/AlNassr-25-26-home.webp",
        title: "Al Nassr 2025/26 Home Jersey",
        price: 9000
    },
    {
        id: 1,
        image: "../images/Argentina-Home-Jersey-2022-Custom.webp",
        title: "Messi 2022 WC Jersey",
        price: 62000
    },
    {
        id: 1,
        image: "../images/Barcelona-Third-Shirt-2021-2022.webp",
        title: "Barcelona 3rd Jersey 2021/2022",
        price: 20000
    },
    {
        id: 1,
        image: "../images/Chelsea-FC-Home-2024-25.webp",
        title: "Chelsea 2024/25 Home Jersey",
        price: 35000
    },
    {
        id: 1,
        image: "../images/Green-Madrid-Away-Jersey.webp",
        title: "Green Madrid Away Jersey",
        price: 12000
    },
    {
        id: 1,
        image: "../images/Argentina-2026.webp",
        title: "Argentina 2026 WC Jersey",
        price: 46000
    },
    {
        id: 2,
        image: "../images/PSG-stylish-white.webp",
        title: "PSG Stylish White",
        price: 15000
    },
    {
        id: 2,
        image: "../images/Tottenham-25-26-Away.webp",
        title: "Tottenham 2025/26 Away",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Tottenham-25-26-home.webp",
        title: "Tottenham 2025/26 Home",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Yamal-25-26-Barcelona-third.webp",
        title: "Yamal 2025/26 Barcelona",
        price: 8000
    },
    {
        id: 2,
        image: "../images/Yamal-25-26-Barcelona-Home.webp",
        title: "Yamal 2025/26 Barcelona Home",
        price: 13000
    },
    {
        id: 2,
        image: "../images/Vinicius-24-25-Brazil.webp",
        title: "Vinicius 2024 Brazil",
        price: 7500
    },
    {
        id: 2,
        image: "../images/SouthAfrica-jersey.webp",
        title: "South Africa Jersey",
        price: 4000
    },
    {
        id: 2,
        image: "../images/Salah-25-26-third-jersey.webp",
        title: "Salah 2025/26 Liverpool",
        price: 9500
    },
    {
        id: 2,
        image: "../images/Pedri-25-26-Barcelona-Away.webp",
        title: "Pedri 2025/26 Barcelona",
        price: 9000
    },
    {
        id: 2,
        image: "../images/Musiala-25-26-Bayern-Home.webp",
        title: "Musiala 25/26 Bayern Home",
        price: 3500
    },
    {
        id: 2,
        image: "../images/Musiala-2026-Germany.webp",
        title: "Musiala 2026 Germany",
        price: 15000
    },
    {
        id: 2,
        image: "../images/Nike-Nigeria-white.webp",
        title: "Nigeria White Jersey",
        price: 8000
    },
    {
        id: 2,
        image: "../images/PSG-24-25-Home.webp",
        title: "PSG 2024/25 Home",
        price: 20000
    },
    {
        id: 2,
        image: "../images/Ronaldo-WC-jersey.webp",
        title: "Ronaldo 2022 WC Jersey",
        price: 22000
    },
    {
        id: 2,
        image: "../images/Neymar-22-23-Brazil.webp",
        title: "Neymar 2022 WC Jersey",
        price: 18000
    },
    {
        id: 2,
        image: "../images/Messi-InterMiamiBlack.webp",
        title: "Messi Inter Miami Black",
        price: 29000
    },
    {
        id: 3,
        image: "../images/Messi-2012-Barcelona-Home.webp",
        title: "Messi 2012 Barcelona Home",
        price: 60000
    },
    {
        id: 3,
        image: "../images/Mbappe-Madrid-Home-jersey.webp",
        title: "Mbappe Madrid Debut Jersey",
        price: 30000
    },
    {
        id: 3,
        image: "../images/Mbappe-24-25-France-Away.webp",
        title: "Mbappe 2024/25 France",
        price: 4500
    },
    {
        id: 3,
        image: "../images/ManCity-Puma.webp",
        title: "Man City Home Jersey",
        price: 12500
    },
    {
        id: 3,
        image: "../images/ManCity-25-26-Away.webp",
        title: "Man City 2025/26 Away",
        price: 10000
    },
    {
        id: 3,
        image: "../images/Liverpool-25-26-Home.webp",
        title: "Liverpool 2025/26 Home",
        price: 19500
    },
    {
        id: 3,
        image: "../images/Liverpool-24-25-Home.webp",
        title: "Liverpool 2024/25 Home",
        price: 9500
    },
    {
        id: 3,
        image: "../images/Lewandowski-25-26-Barcelona-third.webp",
        title: "Lewandowski 2025/26 Barcelona",
        price: 13500
    },
    {
        id: 3,
        image: "../images/KDB-2022-23-City-Home.webp",
        title: "De Bruyne 2022/23 City Home",
        price: 8500
    },
    {
        id: 3,
        image: "../images/Hazard-Chelsea-jersey.webp",
        title: "Hazard Chelsea Home Jersey",
        price: 5500
    },
    {
        id: 3,
        image: "../images/Haaland-25-26-City-third.webp",
        title: "Haaland 2025/26 City",
        price: 10000
    },
    {
        id: 3,
        image: "../images/Ghana-Home-jersey.webp",
        title: "Ghana Home Jersey",
        price: 3500
    },
    {
        id: 3,
        image: "../images/Ghana-GK-jersey.webp",
        title: "Ghana Goalkeeper",
        price: 3000
    },
    {
        id: 3,
        image: "../images/Ghana-2025-Away.webp",
        title: "Ghana 2025 Away",
        price: 4000
    },
    {
        id: 3,
        image: "../images/France-24-25-Home.webp",
        title: "France 2024/25 Home",
        price: 12000
    },
    {
        id: 3,
        image: "../images/France-2022-WC.webp",
        title: "France 2022 WC Jersey",
        price: 25000
    },
    {
        id: 4,
        image: "../images/Brazil-home.webp",
        title: "Brazil Home Jersey",
        price: 7000
    },
    {
        id: 4,
        image: "../images/Brazil-2018WC.webp",
        title: "Brazil 2018 WC Jersey",
        price: 15000
    },
    {
        id: 4,
        image: "../images/Bellingham-Euros24-jersey.webp",
        title: "Bellingham Euros 2024",
        price: 15000
    },
    {
        id: 4,
        image: "../images/Barcelona-25-26-Home.webp",
        title: "Barcelona 2025/26 Home",
        price: 29500
    },
    {
        id: 4,
        image: "../images/Bayern-24-25-Home.webp",
        title: "Bayern 2024/25 Home",
        price: 15000
    },
    {
        id: 4,
        image: "../images/B-Fernandes-25-26-United.webp",
        title: "B.Fernandes 2025/26 United",
        price: 13000
    },
    {
        id: 4,
        image: "../images/Atletico-25-26-Home.webp",
        title: "Atletico 2025/26 Home",
        price: 8500
    },
    {
        id: 4,
        image: "../images/Arsenal-FC-Home-2024-25.webp",
        title: "Arsenal 2024/25 Home",
        price: 12500
    },
    {
        id: 4,
        image: "../images/ACMilan-23-24-Home.webp",
        title: "AC Milan 2023/24 Home",
        price: 9000
    },
    {
        id: 4,
        image: "../images/AC-Milan-Home.webp",
        title: "AC Milan Home Jersey",
        price: 12000
    },
];
const categories = product; // use the product list directly

const displayItem = (items)=> {
    document.querySelector('.card-container').innerHTML = items.map((item)=>{
        const {image, title, price} = item;
        return (`<div class="card">
            <img class="images" src="${image}" alt="${title}">
            <h3>${title}</h3>
            <button id="buyButton">N${price}</button>
            </div>`)
    }).join("");
};

// show first page (id === 1) by default
let currentPage = 1;
const totalPages = 4;

function flterItems(page) {
    currentPage = page;
    const filtered = categories.filter(item => item.id == page);
    displayItem(filtered);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function prevPage() {
    if (currentPage > 1) {
        flterItems (currentPage - 1);
    }
}

function nextPage () {
    if (currentPage < totalPages) {
        flterItems(currentPage + 1)
    }
}

document.getElementById('btns').innerHTML =
`<button class='fil-p' onclick="prevPage()"><</button>
<button class='fil-p' onclick="flterItems(1)">1</button>
<button class='fil-p' onclick="flterItems(2)">2</button>
<button class='fil-p' onclick="flterItems(3)">3</button>
<button class='fil-p' onclick="flterItems(4)">4</button>
<button class='fil-p' onclick="nextPage()">></button>`;

// render the first page immediately so the page shows products on load
flterItems(currentPage);





/*displayItem(categories.filter(i => i.id === 1));

const btns = [
    {
        id: 1,
        name: "<"
    },
    {
        id: 1,
        name: "1"
    },
    {
        id: 2,
        name: "2"
    },
    {
        id: 3,
        name: "3"
    },
    {
        id: 3,
        name: ">"
    },
]

// remove duplicate button objects and render buttons with correct onclick
const filters = btns;

document.getElementById('btns').innerHTML = filters.map((btn)=> {
    const {name, id} = btn;
    return (`<button class="fil-p" onclick="flterItems(${id})">${name}</button>`)
}).join('');

// filter and display items for a given page id
function flterItems(a) {
    const flterCategories = categories.filter(value => value.id == a);
    displayItem(flterCategories);
}
*/