//THIS IS SOLELY FOR THE INDEX.HTML FILE

"use strict"

const product = window.ALL_PRODUCTS;
const categories = product; // uses the product list directly

const displayItem = (items)=> {
    document.querySelector('.card-container').innerHTML = items.map((item)=>{
        const {image, title, price} = item;
        return (`<a href="../htmlFiles/product.html?pid=${item.pid}" class="product-link">
            <div class="card">
            <img class="images" src="${image}" alt="${title}">
            <h3>${title}</h3>
            <button id="buyButton">N${price}</button>
            </div>
            </a>`)
    }).join("") /*joins everything into one big HTML string*/;
};

//The below is the search functionality on this page
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get('q');

let searchResults = window.ALL_PRODUCTS;

if (searchQuery) {
    searchResults = window.ALL_PRODUCTS.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    displayItem(searchResults);
}

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
};

flterItems(currentPage);