// let openShopping = document.querySelector('.iconCart');
// let cart = document.querySelector('.cart');
// let containerr = document.querySelector('.containerr');
// let close = document.querySelector('.close');


// openShopping.addEventListener('click',()=>{
//   if(cart.style.right=='-100%'){
//     cart.style.right='0';
//     containerr.style.transform = 'teanslateX(-400px)';
//   }
//   else{
//     cart.style.right='-100%';
//     containerr.style.transform = 'teanslateX(0)';
//   }
// })

// close.addEventListener('click',()=>{
//   cart.style.right='-100%';
//     containerr.style.transform = 'teanslateX(0)';
// })

// let products = null;

// //get data from file json
// fetch("product2.json")
// .then(response => response.json())
// .then(data => {
//   products= data ;
//   addDataToHTML();
// })

// //show data in list html

// function addDataToHTML(){
//   //remove datas default in html
//   let listProductHTML = document.querySelector('.listProduct');
//   listProductHTML.innerHTML='';

//   //add new datas
//   if (products != null){
//     products.forEach(product => {
//         let newProduct = document.createElement('div');
//         newProduct.classList.add('item');
//         newProduct.innerHTML = 
//          `<img src="${product.image}">
//          <h2>${product.name}</h2>
//          <div class="price">${product.price} MMK</div>
//          <button onclick="addCart(${product.id})">Order Food</button>`;
//         listProductHTML.appendChild(newProduct);

//     });
//   }
// }

// let listCart = [];
// //get cookie data cart
// function checkCart(){
//   var cookieValue = document.cookie
//   .split('; ')
//   .find (row => row.startsWith('listCart='));
//   if(cookieValue){
//     listCart = JSON.parse(cookieValue.split('=')[1]);
//   }
//   console.log(cookieValue);
// }
// checkCart();
// function addCart($idProduct){
//   let productCopy = JSON.parse(JSON.stringify(products));
//   //if product is not in the cart
//   if(!listCart[$idProduct]){
//     let dataProduct = productCopy.filter(
//       product => product.id == $idProduct
//     )[0];
//     //add data product in cart
//     listCart[$idProduct] = dataProduct;
//     listCart[$idProduct].quantity = 1;
//   }
//   else{
//     listCart[$idProduct].quantity++;
//   }
//   //save data cart in cookie
//   let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
//   document.cookie= "listCart"+JSON.stringify(listCart)+"; "+timeSave+ "; path=/";
//   addCartToHTML();
// }

// addCartToHTML();
// function addCartToHTML(){
//   //clear data default;
//   let listCartHTML = document.querySelector('.listCart');
//   listCartHTML.innerHTML ='';

//   let totalHTML = document.querySelector('.totalQuantity');
//   let totalQuantity = 0;

//   if(listCart){
//     listCart.forEach(product =>{
//       if(product){
//         let newCart = document.createElement('div');
//         newCart.classList.add('item');
//         newCart.innerHTML = `
//         <img src="${product.image}">
//         <div class="content">
//           <div class="name">${product.name}</div>
//           <div class="price">${product.price} MMK</div>
//         </div>
//         <div class="quantity">
//            <button onclick="changeQuantity(${product.id}, '-')">-</button>
//            <span class="value">${product.quantity}</span>
//            <button onclick="changeQuantity(${product.id}, '+')">+</button>
//         </div>`;
//         listCartHTML.appendChild(newCart);
//         totalQuantity = totalQuantity + product.quantity;
//       }
//     })
//   }
//   totalHTML.innerText =totalQuantity;
// }


// function changeQuantity($idProduct,$type){
//   switch ($type) {
//     case '+':
//       listCart[$idProduct].quantity++;
//       break;
//     case '-':
//         listCart[$idProduct].quantity--;
//         if(listCart[$idProduct].quantity <= 0){
//            delete listCart[$idProduct];
//         }
//         break;
// s
//     default:
//       break;
//   }
//   //save data in cookie
//   let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
//   document.cookie= "listCart"+JSON.stringify(listCart)+"; "+timeSave+ "; path=/";

//   //reload listCard
//   addCartToHTML();
// }




// // let btnio = document.querySelectorAll(" #btnio ");
// // var num = 0 ;

// // btnio.forEach(p => {
// //   p.onclick = () => {
// //     num++;
// //     quantity.innerText = num;
    
// //   }
// // })


// // let kll = document.querySelectorAll(" #kll ");

// // kll.forEach(p => {
// //   p.onclick= () => {
// //     num++;
// //     quantity.innerText = num;
// //   }
// // })


let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    loadCartItems();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updatetotal();
    saveCartItems();
    updateCartIcon();
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
    saveCartItems();
    updateCartIcon();
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
    saveCartItems();
    updateCartIcon();
}

function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsName = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsName.length; i++){
        if(cartItemsName[i].innerText == title){
            alert('You have already added this item to cart');
            return;
        }
    }
    var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" name="" id="" value="1" class="cart-quantity">
    </div>
    <i class="bx bx-trash-alt cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0]
    .addEventListener("change", quantityChanged);
    saveCartItems();
    updateCartIcon();
}

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    
    var i = 0;
    for ( i=0 ; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
            total += price * quantity;
    }
    
    total = Math.round(total *100) / 100;
            
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    localStorage.setItem('cartTotal', total);
}

function saveCartItems(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName('cart-product-title')[0];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg
        };
        cartItems.push(item);
    }
    // console.log(titleElement.innerText)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartItems(){
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);

        for(var i = 0; i < cartItems.length; i++){
            var item = cartItems[i];
            addProductToCart(item.title,item.price,item.productImg);

            var cartBoxes = document.getElementsByClassName('cart-box');
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem('cartTotal');
    if(cartTotal){
        document.getElementsByClassName('total-price')[0].innerText = "$" + cartTotal;
    }
    updateCartIcon();
}

function updateCartIcon(){
    var cartBoxes = document.getElementsByClassName('cart-box'); 
    var quantity = 0;

    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity', quantity);
    localStorage.setItem('quantity', quantity);
}

// Clear Cart Item After Successful Payment
function clearCart(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    cartContent.innerHTML = '';
    updatetotal();
    localStorage.removeItem('cartItems');
}


// const btn = document.querySelector(".btn-buy");
// btn.addEventListener('click', () => {
//     location.href = "./public/success.html";
// })