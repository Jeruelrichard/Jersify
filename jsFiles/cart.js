"use strict"

const container = document.querySelector(".cartContainer");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

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
                    <img src="${product.image}" alt="${product.title}">
                    <span id="deets">
                        <h3>${product.title}</h3>
                        <p>Sex: ${item.sex === "male" ? "Male" : item .sex === "female" ? "Female" : item.sex}</p>
                    </span>
                </div>
                <div id="cartItemQty">
                    <p>Quantity: ${item.qty}</p>
                    <i class="fa-regular fa-trash-can" onclick="deleteCartItem()"></i>
                </div>
                <span id="cartItemPrice">
                    <p>Price: N${product.price * item.qty}</p>
                </span>
            </div>
        </div>
        `;
    }).join('');

    container.innerHTML = `
    <h1>Your Cart</h1>
    ${cartItemsHTML}
    <h3>Estimated Total: </h3>
    <button>Checkout</button>
    `;
}
