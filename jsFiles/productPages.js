"use strict"

const product = window.ALL_PRODUCTS;
const categories = product; // uses the product list directly

const displayItem = (items)=> {
    document.querySelector('.card-container').innerHTML = items.map((item)=>{
        const {image, title, price} = item;
        return (`<a href="product.html?pid=${item.pid}" class="product-link">
            <div class="card">
            <img class="images" src="${image}" alt="${title}">
            <h3>${title}</h3>
            <button id="buyButton">N${price}</button>
            </div>
            </a>`)
    }).join("") /*joins everything into one big HTML string*/;
};

//The below is the search functionality on the products page
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get('q');

let searchResults = window.ALL_PRODUCTS;

if (searchQuery) {
    searchResults = window.ALL_PRODUCTS.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    displayItem(searchResults);
}

//PAGINATION FUNCTIONALITY

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

// FILTER BUTTONS FUNCTIONALITY
const filterButtons = document.querySelectorAll('.filter-btn');
let activeFilter = null; // track which filter is active

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterType = button.dataset.filter;
        
        // toggle filter (click again to clear)
        if (activeFilter === filterType) {
            activeFilter = null;
            button.style.background = 'var(--bg-color)';
            button.style.color = 'var(--text-color)';
        } else {
            // deactivate previous filter button
            filterButtons.forEach(btn => {
                btn.style.background = 'var(--bg-color)';
                btn.style.color = 'var(--text-color)';
            });
            
            activeFilter = filterType;
            button.style.background = 'var(--accent1)';
            button.style.color = 'var(--bg-color)';
        }
        
        // filter and display products
        let filtered = window.ALL_PRODUCTS;
        
        if (activeFilter) {
            filtered = filtered.filter(item => item.type === activeFilter);
        }
        
        displayItem(filtered);
        currentPage = 1; // reset to page 1 when filtering
    });
});