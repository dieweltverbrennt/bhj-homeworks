const products = Array.from(document.querySelectorAll(".product"));
const cart = document.querySelector(".cart__products");
let idInCart = [];

products.forEach(item => {
    const quantityDec = item.querySelector(".product__quantity-control_dec");
    const quantityInc = item.querySelector(".product__quantity-control_inc");
    let productValue = item.querySelector(".product__quantity-value");
    const productAdd = item.querySelector(".product__add");
    const productId = item.getAttribute("data-id");
    const productImage = item.querySelector(".product__image").getAttribute("src");

    quantityDec.addEventListener("click", () => {
        if(parseInt(productValue.textContent) != 0) {
            productValue.textContent = productValue.textContent = parseInt(productValue.textContent) - 1;
        }
    })

    quantityInc.addEventListener("click", () => productValue.textContent = parseInt(productValue.textContent) + 1);

    let quantityCounter = 0;

    productAdd.addEventListener("click", () => {
        quantityCounter += parseInt(productValue.textContent);
        productAddToCart = 
        `<div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${quantityCounter}</div>
        </div>`;
        if(!idInCart.includes(productId)) {
            idInCart.push(productId);
            cart.insertAdjacentHTML("beforeend", productAddToCart);
        }
        else {
            const productsInCart = Array.from(cart.querySelectorAll(".cart__product"));
            const inCartProductQuantity = productsInCart.find(item => item.getAttribute("data-id") == productId).lastElementChild;
            inCartProductQuantity.innerText = quantityCounter;
        }
    })

})