"use strict";

const container = document.getElementById('productsDetail');
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

<label>Sex</label>
<select name="sex" id="sex">
<option value="" disabled selected>M</option>
<option value="male">M</option>
<option value="female">F</option>
</select>

<label>Quantity:</label>
<input type="number" min="1" value="1" id="qty">

<button onclick="addToCart('${products.pid}')">Add To Cart</button>
</div>`