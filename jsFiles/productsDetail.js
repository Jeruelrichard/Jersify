"use strict";

const container = getElementById("productsDetail");
const params = new URLSearchParams(window.location.search);
const pid = params.get("pid");
const products = window.ALL_PRODUCTS.find(p => p.pid === pid);

if (!products) {
    container.innerHTML = "<h2>NO SUCH PRODUCT</h2>";
    throw new Error("Invalid Product ID")
}

container.innerHTML = `
<img src="${products.image}" alt="${title}">

<div class="details">
<h1>${products.title}</h1>
<p></p>
<h3>N${price}</h3>

<label>Quantity:
<input type="number" min="1" value="1" id="qty">
</label>
<button onclick="addToCart('${products.pid}')">Add To Cart</button>
</div>`//Add product.despcription for p