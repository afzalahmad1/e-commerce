let cartItems = JSON.parse(localStorage.getItem("CartItems"));
let cart = document.getElementById("cart");
let checkout = document.getElementById("checkout");
let innerHtml = "";
let checkoutDetails = "";
var price = 0;
var total = 0;
/*
window.addEventListener("load", () => {
  displayCartItemsList();
  displayCheckoutItems();
});
*/
(() => {
  displayCartItemsList();
  displayCheckoutItems();
})();

function removeItem(id) {
  cartItems = JSON.parse(localStorage.getItem("CartItems"));
  /*cartItems.forEach((item,idx)=>{
    if(item.id === id){
      console.log(item)
      cartItems.splice(idx,1);
     // localStorage.removeItem("item")
     localStorage.setItem('CartItems',JSON.stringify(cartItems));
     displayCartItemsList();
     displayCheckoutItems();
    }
  })*/
  for (let item=0;item<cartItems.length;item++) {
    if (cartItems[item].id == id) {
      console.log(cartItems[item].id);
      cartItems.splice(item, 1);
      // localStorage.removeItem("item")
      localStorage.setItem("CartItems", JSON.stringify(cartItems));
      displayCartItemsList();
      displayCheckoutItems();
      break;
    }
  }
}

function displayCartItemsList() {
  innerHtml = "";
  cartItems.forEach((item) => {
    innerHtml += `
    <div class="item">
          <img src="${item.image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price" id="price">$${item.price}</div>
              <div class="sized">S,M,L</div>
            </div>
            <div class="colors">
              Colors:
              <div class="row">
                <div class="circle" style="background-color: #000"></div>
                <div class="circle" style="background-color: #4938af"></div>
                <div class="circle" style="background-color: #203d3e"></div>
              </div>
            </div>
            <div class="row">Rating: ${item.rating.rate}</div>
          </div>
          <button id="addBtn" onclick="removeItem(${item.id})">Remove Item</button>
        </div>`;
  });
  cart.innerHTML = innerHtml;
}

function displayCheckoutItems() {
  total=0;
  price=0;
  checkoutDetails = "";
  cartItems.forEach((item, idx) => {
    checkoutDetails += `
    <div class="item-prices">
      <span class="index"><p>${idx + 1}.</p><p>${item.title}</p></span>
      <span>$${item.price}</span>
    </div>`;

    price = `${item.price}`;
    total += parseFloat(price)
    
  });
  checkout.innerHTML = checkoutDetails;
  document.getElementById("total").innerText = '$'+total.toFixed(2);
}

function checkoutPage(){
  localStorage.setItem("totalPrice",JSON.stringify(total));
  window.location.href = "../razorpay/index.html"

}


function alertMessage(){
  alert("Logout first")
}