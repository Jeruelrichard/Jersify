"use strict"

const container = document.querySelector(".cartContainer");
//const products = window.ALL_PRODUCTS.find(p => p.pid === pid);

/*if (!products) {*/
    container.innerHTML =`
            <h1>Your cart is empty</h1>
            <a href="allProducts.html"><button>Continue Shopping</button></a><br>
            <h3>Have an Account?</h3>
            <p><a href="#">Login</a> To check out faster</p>
            </div>
            `;
