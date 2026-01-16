"use strict";

const container = document.getElementById('productsDetail');
const container2 = document.getElementById('relatedProducts');
const params = new URLSearchParams(window.location.search);
const pid = params.get("pid");
const products = window.ALL_PRODUCTS.find(p => p.pid === pid);

document.title = products.title

if (!products) {
    container.innerHTML = "<h2>NO SUCH PRODUCT</h2>";
    throw new Error("Invalid Product ID")
}

container.innerHTML = `
<img src="${products.image}" alt="${products.title}">

<div class="details">
<h1>${products.title}</h1>
<p>${products.description}</p>
<h3>N${products.price}.00 NGN</h3>

<label class="sex">Sex</label>
<select name="sex" id="sex">
<option value="" disabled selected>M</option>
<option value="male">M</option>
<option value="female">F</option>
</select>

<label>Quantity:</label>
<input type="number" min="1" value="1" id="qty">

<button onclick="addToCart('${products.pid}')">Add To Cart</button>
<button onclick="buyNow()" id="buyNow">Buy It Now</button>
</div>`;

function buyNow() {
    alert("Your order has been sent!");
}


//FOR RELATED PRODUCTS
let relatedProducts = window.ALL_PRODUCTS.filter(p => 
    p.team === products.team && p.pid !== products.pid).sort((a,b) => {
        let scoreA = 0;
        let scoreB = 0;

        if (a.team === products.team) scoreA ++ ;
        if (b.team === products.team) scoreB ++ ;

        if (a.type === products.type) scoreA +=2 ;
        if (b.type === products.type) scoreB +=2 ;

        return scoreB - scoreA;
    }).slice(0,4);

if (relatedProducts.length === 0) {
    relatedProducts = window.ALL_PRODUCTS.filter(p => p.pid !== products.pid).slice(0,4);
}

//ADDING RELATED PRODUCTS TO THE BOTTOM OF THE PAGE
const relatedHTML = relatedProducts.map(item => `
    <a href="product.html?pid=${item.pid}" class="product-link">
    <div class="card">
    <img class="images" src="${item.image}" alt="${item.title}">
    <h3>${item.title}</h3>
    <button id="buyButton">N${item.price}</button>
    </div>
    </a>
`).join('');

container2.innerHTML += `
<h2>Related Products</h2>
<div class="card-container">
${relatedHTML}
</div>
`;




// This stores the original details for restoration later
const originalDetailsHTML = document.querySelector(".details").innerHTML;

//SIMPLE CART LOGIC
function addToCart() {
    const qty = parseInt(document.getElementById("qty").value);
    const sex = document.getElementById("sex").value || "Male";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.pid === pid);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({pid, qty, sex});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    document.querySelector(".details").innerHTML = `
    <div id="addedCard">
        <h5>✔️Item addded to cart</h5>
        <div id="addedCardDetails">
            <img src="${products.image}" alt="${products.title}">
            <span id='deets'>
                <h4>${products.title}</h4>
                <p>Sex: ${sex === "male" ? "Male" : sex === "female" ? "Female" : sex}</p>
                <p>Quantity: ${qty}</p>
            </span>
        </div>

        <a href="cart.html"><button id="viewCart">View Cart</button></a>
        <button id="checkout">Checkout</button>
        <a href="allProducts.html">Continue Shopping</a>
        <p id="countdown" style="text-align: center; margin-top: 10px; font-weight: bold; color: var(--text-color);">Closing in 3...</p>
    </div>`

    let countdownValue = 3;
    const countdownEl = document.getElementById("countdown");
    
    const countdownInterval = setInterval(() => {
        countdownValue--;
        if (countdownValue > 0) {
            countdownEl.textContent = `Closing in ${countdownValue}...`;
        } else {
            clearInterval(countdownInterval);
            removeAddedCard();
        }
    }, 1000);

    function removeAddedCard() {
        document.querySelector(".details").innerHTML = originalDetailsHTML;
    }
}