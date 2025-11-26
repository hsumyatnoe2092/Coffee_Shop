let total = localStorage.getItem('cartTotal');
let quantity = localStorage.getItem('quantity');

const tq = document.querySelector(".totalQuantity");
const pri = document.querySelector('.totalPrice');

// tq.innerText = quantity;
// pri.innerText = total;

const btne = document.querySelector(".buttonCheckout");
btne.addEventListener('click', () => {
  location.href = "./public/success.html";
})