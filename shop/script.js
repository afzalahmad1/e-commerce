/*
const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
*/

var mens = [];
var womens = [];
var electronics = [];
var jewelery = [];
var cartItems = [];
var productsArr = [];
var innerHtml;

(() => {
  // whenever page loads this function is called
  // fetching the data from localstorage
  if(JSON.parse(localStorage.getItem("currUser"))==null){
    window.location.href = "../login/login.html"
    return;
  }
  // show the tasks
})();






let search = document.getElementById("search");
let mensData = document.getElementById("mens-clothing");
let womensData = document.getElementById("womens-clothing");
let electronicsData = document.getElementById("electronics");
let jeweleryData = document.getElementById("jewelery");

let mensTitle = document.getElementById("mens-title");
let womensTitle = document.getElementById("womens-title");
let electronicsTitle = document.getElementById("electronics-title");
let jeweleryTitle = document.getElementById("jewelery-title");

function getDataFromAPI() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data", data);

      //save products in localstorage
      localStorage.setItem("Products",JSON.stringify(data));
      innerHtml = "";
      mens = data.filter((item) => {
        return item.category == "men's clothing";
      });
      womens = data.filter((item) => {
        return item.category == "women's clothing";
      });
      electronics = data.filter((item) => {
        return item.category == "electronics";
      });

      jewelery = data.filter((item) => {
        return item.category == "jewelery";
      });

      mensCategoryShow();
      womensCategoryShow();
      electronicscategoryshow();
      jeweleryCategoryShow();
    })
    .catch((err) => {});
}
getDataFromAPI();

function mensCategoryShow() {
  innerHtml = "";
  mens.forEach((item) => {
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
          <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
     </div>`;
  });
  mensData.innerHTML = innerHtml;
}

function womensCategoryShow() {
  innerHtml = "";
  womens.forEach((item) => {
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
            <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
       </div>`;
  });
  womensData.innerHTML = innerHtml;
}

function electronicscategoryshow() {
  innerHtml = "";
  electronics.forEach((item) => {
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
            <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
       </div>
       `;
  });
  electronicsData.innerHTML = innerHtml;
}

function jeweleryCategoryShow() {
  innerHtml = "";
  jewelery.forEach((item) => {
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
            <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
       </div>`;
  });
  jeweleryData.innerHTML = innerHtml;
}
 function showAllData(productsArr){


  jeweleryData.style.display = "grid"
  womensData.style.display = "grid"
  electronicsData.style.display = "grid"
  mensData.style.display = "grid"

  jeweleryTitle.style.display = "block"
  womensTitle.style.display = "block"
  electronicsTitle.style.display = "block"
  mensTitle.style.display = "block"
      mensCategoryShow();
      womensCategoryShow();
      electronicscategoryshow();
      jeweleryCategoryShow();
 }

 function showMensData(){
  mensData.style.display = "grid"
  jeweleryData.style.display = "none"
  womensData.style.display = "none"
  electronicsData.style.display = "none"

  mensTitle.style.display = "block"
  jeweleryTitle.style.display = "none"
  womensTitle.style.display = "none"
  electronicsTitle.style.display = "none"
  mensCategoryShow(mens);
 }

 function showWomensData(){
  womensData.style.display = "grid"
  jeweleryData.style.display = "none"
  mensData.style.display = "none"
  electronicsData.style.display = "none"

  womensTitle.style.display = "block"
  jeweleryTitle.style.display = "none"
  mensTitle.style.display = "none"
  electronicsTitle.style.display = "none"
  womensCategoryShow();

 }

 function showJeweleryData(){
   jeweleryData.style.display = "grid"
  womensData.style.display = "none"
  mensData.style.display = "none"
  electronicsData.style.display = "none"

  jeweleryTitle.style.display = "block"
  womensTitle.style.display = "none"
  mensTitle.style.display = "none"
  electronicsTitle.style.display = "none"
  jeweleryCategoryShow();

 }


 function showElectronicsData(){
   electronicsData.style.display = "grid"
  jeweleryData.style.display = "none"
 womensData.style.display = "none"
 mensData.style.display = "none"
 
 electronicsTitle.style.display = "block"
 jeweleryTitle.style.display = "none"
 womensTitle.style.display = "none"
 mensTitle.style.display = "none"

 electronicscategoryshow();

}


// store cart items to localstorage
function addToCart(id){
 let productsArr = JSON.parse(localStorage.getItem('Products') || []);
 cartItems = JSON.parse(localStorage.getItem('CartItems'));
 // console.log(productsArr)
  productsArr.forEach((product)=>{
    if(product.id == id){
      cartItems.push(product);
    }
  })
  localStorage.setItem('CartItems',JSON.stringify(cartItems));
}



let searchedProduct;;
search.addEventListener("input", () => {
  var arr = JSON.parse(localStorage.getItem("Products"));
  var newArr = arr.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.value.trim().toLowerCase())
  );
 /* mensData.innerHTML = "";
  womensData.innerHTML = "";
  electronicsData.innerHTML = "";
  jeweleryData.innerHTML = "";
  searchedProduct = "";
  newArr.forEach((item) => {
    searchedProduct += `
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
          <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
     </div>`;
  });
  mensData.innerHTML = searchedProduct;*/
});


function alertMessage(){
  alert("Please Logout first")
  return;
}















//All data showing
      /*
      data.forEach((item) => {
        innerHtml += `
        <div class="item">
              <img src="${item.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price" id="price">${item.price}</div>
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
              <button id="addBtn">Add to Cart</button>
         </div>`;
      });
      document.getElementById("mens-clothing").innerHTML = innerHtml;
      */
