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
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 3,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
    },
    {
        id: 2,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000
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
displayItem(categories.filter(i => i.id === 1));

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