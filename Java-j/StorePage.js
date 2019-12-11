/*
Mary Ashley Kovacevich
12-1-2019
StorePage.js
JavaScript used for store functionality and return to top and view cart button


*/
"use strict"
/*
==========
Return to Top
==========
*/
var backToTopButton = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", scrollUpFunction);

function scrollUpFunction() {
    if (window.pageYOffset > 300) {
        if (!backToTopButton.classList.contains("btnShow")) {
            backToTopButton.classList.remove("btnHide");
            backToTopButton.classList.add("btnShow");
            backToTopButton.style.display = "block";
        }

    } else {
        if (backToTopButton.classList.contains("btnShow")) {
            backToTopButton.classList.remove("btnShow");
            backToTopButton.classList.add("btnHide");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);

        }

    }
}

backToTopButton.addEventListener("click", scrollPageTop);

function scrollPageTop() {
    window.scrollTo(0, 0);
}

/*
=====================
Return to Top End
=====================
*/

/*
==========
Go to Cart
==========
*/

var ViewShoppingCart = document.getElementById("GoToCart");

ViewShoppingCart.addEventListener("click", scrollPageCart);

function scrollPageCart() {
    document.getElementById("containCart").scrollIntoView();
}

/*
==============
Go to Cart End
==============
*/


/*
==============================
Add to Cart, and Cart Checkout
==============================
*/

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready()
}

function ready() {

    var addItemBtn = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < addItemBtn.length; i++) {
        var button = addItemBtn[i]
        button.addEventListener("click", addToCartClicked)
    }

    var removeItemBtn = document.getElementsByClassName("remove-btn");
    for (var i = 0; i < removeItemBtn.length; i++) {
        var button = removeItemBtn[i]
        button.addEventListener("click", removeFromCart);
    }

    var moreLessQuantity = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < moreLessQuantity.length; i++) {
        var input = moreLessQuantity[i]
        input.addEventListener("change", quantityChanged);
    }


    document.getElementsByClassName("buy-btn")[0].addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
    alert("Thank you for your purchase")
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeFromCart(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("shop-item-portrait")[0].src;
    addToCart(title, price, imageSrc);
    updateCartTotal();
}

function addToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already in your cart");
            return;
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-portrait" src="${imageSrc}" width="65%" height="85%">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn remove-btn" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("remove-btn")[0].addEventListener("click", removeFromCart);
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}
/*
===================================
Add to Cart, and Cart Checkout End
===================================
*/
