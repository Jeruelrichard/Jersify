"use strict"

const container = document.querySelector(".cartContainer");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function calculateTotal() {
    return cart.reduce((total, item) => {
        const product = window.ALL_PRODUCTS.find(p => p.pid === item.pid);
        return total + (product ? product.price * item.qty : 0);
    }, 0);
}

if (cart.length === 0) {

container.innerHTML =`
    <h1>Your cart is empty</h1>
    <a href="allProducts.html"><button>Continue Shopping</button></a><br>
    <h3>Have an Account?</h3>
    <p><a href="#">Login</a> To check out faster</p>
    </div>
`
} else {
    const cartItemsHTML = cart.map(item => {
        const product = window.ALL_PRODUCTS.find(p => p.pid === item.pid);
        return `
        <div class="cartItemCard">
            <div id="dash"></div>
            <div id="main">
                <div id="cartItemDeets">
                <a href="product.html?pid=${item.pid}" class="product-link">
                    <img src="${product.image}" alt="${product.title}"></a>
                    <span id="deets">
                        <h3>${product.title}</h3>
                        <p>N${product.price}.00</p>
                        <p>Sex: ${item.sex === "male" ? "Male" : item.sex === "female" ? "Female" : item.sex}</p>
                    </span>
                </div>
                <div id="cartItemQty">
                    <p>Quantity: ${item.qty}</p>
                    <i class="fa-regular fa-trash-can" onclick="deleteCartItem('${item.pid}')"></i>
                </div>
                <span id="cartItemPrice">
                    <p><b>N${product.price * item.qty}.00</b></p>
                </span>
            </div>
        </div>
        `;
    }).join('');

    const total = calculateTotal();

    container.innerHTML = `
    <h1>Your Cart</h1>
    ${cartItemsHTML}
    <div id="estimatedTotal">
    <div id="esTotalDash"></div>
        <h3>Estimated Total: <span>N${total}.00</span></h3>
    </div>
    <button id="finalCheck" onclick="buyNow()">Checkout</button>

    <a href="allProducts.html" id="finalHref">Continue Shopping</a>
    `;
}

function buyNow() {
    alert("Your order has been sent!");
}

function deleteCartItem(pid) {
    //removing item from cart array
    const index = cart.findIndex(item => item.pid === pid);
    if (index > -1) {
        cart.splice(index, 1);
    }
    
    //updating localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // refresh the page to show updated cart
    location.reload();
}