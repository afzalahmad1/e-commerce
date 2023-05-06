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
var color = [];
var mens = [];
var womens = [];
var electronics = [];
var jewelery = [];
var cartItems = [];
var productsArr = [];
var innerHtml;

(() => {

    getDataFromAPI();
  if(JSON.parse(localStorage.getItem("currUser"))==null){
    
    window.location.href = "../login/login.html"
    return;
  }
})();







let searchData = document.getElementById("searched-data");
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

      //set size
      data.forEach((item)=>{
        let size=sizeSelection();
       // console.log("out",size);
        item.sizes = size;
      })

      //set color
      data.forEach((item)=>{
        let color=colorSlection();
        //console.log("in",color);
        item.colors = color;
      })
      localStorage.setItem("Products",JSON.stringify(data));
      //innerHtml = "";
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



//extractig data from api and showing on page
function mensCategoryShow() {
  innerHtml = "";
  mens.forEach((item) => {
    innerHtml += `
  <div class="item">
          <img src="${item.image}" alt="Item" />
          <div class="info">
            <div class="row">
              <div class="price" id="price">$${item.price}</div>
              <div class="sized">${item.sizes}</div>
            </div>
            <div class="colors">
              Colors:
              <div class="row">
                <div class="circle" style="background-color: ${item.colors[0]}"></div>
                <div class="circle" style="background-color: ${item.colors[1]}"></div>
                <div class="circle" style="background-color: ${item.colors[2]}"></div>
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
              <div class="sized">${item.sizes}</div>
            </div>
            <div class="colors">
              Colors:
              <div class="row">
                <div class="circle" style="background-color: ${item.colors[0]}"></div>
                <div class="circle" style="background-color: ${item.colors[1]}"></div>
                <div class="circle" style="background-color: ${item.colors[2]}"></div>
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
              <div class="sized">${item.sizes}</div>
            </div>
            <div class="colors">
              Colors:
              <div class="row">
                <div class="circle" style="background-color: ${item.colors[0]}"></div>
                <div class="circle" style="background-color: ${item.colors[1]}"></div>
                <div class="circle" style="background-color: ${item.colors[2]}"></div>
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
              <div class="sized">${item.sizes}</div>
            </div>
            <div class="colors">
              Colors:
              <div class="row">
                <div class="circle" style="background-color: ${item.colors[0]}"></div>
                <div class="circle" style="background-color: ${item.colors[1]}"></div>
                <div class="circle" style="background-color: ${item.colors[2]}"></div>
              </div>
            </div>
            <div class="row">Rating: ${item.rating.rate}</div>
          </div>
          <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
     </div>`;
  });
  jeweleryData.innerHTML = innerHtml;
}


//filtering by category
 function showAllData(){


   jeweleryData.style.display = "grid"
   searchData.style.display = "none"
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
   searchData.style.display = "none"
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
  searchData.style.display = "none"
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
   searchData.style.display = "none"
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
   searchData.style.display = "none"
  jeweleryData.style.display = "none"
 womensData.style.display = "none"
 mensData.style.display = "none"
 
 electronicsTitle.style.display = "block"
 jeweleryTitle.style.display = "none"
 womensTitle.style.display = "none"
 mensTitle.style.display = "none"

 electronicscategoryshow();

}


//adding in cart
function addToCart(id){
 let productsArr = JSON.parse(localStorage.getItem('Products') || []);
 cartItems = JSON.parse(localStorage.getItem('CartItems'));
 if(cartItems == null){
  cartItems = [];
 }
  console.log(cartItems)
  productsArr.forEach((product)=>{
    if(product.id == id){
      cartItems.push(product);
    }
  })
  localStorage.setItem('CartItems',JSON.stringify(cartItems));
}


// search functionality
var arr = JSON.parse(localStorage.getItem("Products"));
let searchedProduct="";

document.getElementById("search").addEventListener("input", () => {
  var newArr = arr.filter((item) =>
    item.title
      .toLowerCase()
      .includes(document.getElementById("search").value.trim().toLowerCase())
  );
  console.log("before",mens);
  displayData(newArr);
});

function searchByPrice(minVal,maxVal){
  let priceRange = [];
  for(let item in arr){
    if(arr[item].price >= minVal && arr[item].price <= maxVal){
      priceRange.push(arr[item]);
  }
}
displayData(priceRange);
}

function displayData(arr){
  searchData.style.display = "grid";
  mensData.style.display = "none";
  womensData.style.display = "none";
  electronicsData.style.display = "none";
  jeweleryData.style.display = "none";

  mensTitle.style.display = "none"
  jeweleryTitle.style.display = "none"
  womensTitle.style.display = "none"
  electronicsTitle.style.display = "none"

  searchedProduct = "";
  arr.forEach((item) => {
    searchedProduct += `
    <div class="item">
    <img src="${item.image}" alt="Item" />
    <div class="info">
      <div class="row">
        <div class="price" id="price">$${item.price}</div>
        <div class="sized">${item.sizes}</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color: ${item.colors[0]}"></div>
          <div class="circle" style="background-color: ${item.colors[1]}"></div>
          <div class="circle" style="background-color: ${item.colors[2]}"></div>
        </div>
      </div>
      <div class="row">Rating: ${item.rating.rate}</div>
    </div>
    <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>
</div>`;
  });
  //console.log( "data",searchedProduct)
  console.log("after",mens);
  searchData.innerHTML = searchedProduct;
};


function alertMessage(){
  alert("Please Logout first")
  return;
}

let slider = document.getElementById("range");
slider.addEventListener("change",()=>{
  console.log(arr);
  let newArr = arr.filter((item)=>{
    return Math.floor(item.rating.rate) == slider.value
  })
  displayData(newArr)
})

function sizeSelection() {
    let size=[]
   let s = ["S", "M", "L", "XL"];
   let i,j,k;
     i = Math.floor(Math.random() * s.length);
     size.push(s[i]);
     s.splice(i,1)
     j = Math.floor(Math.random() * s.length);
     size.push(s[j]);
     s.splice(j,1)
     k = Math.floor(Math.random() * s.length);
     size.push(s[k]);
     s.splice(k,1)
    // console.log(size)
     return size;
}



function colorSlection() {
    let color=[]
    let s = ["Red", "Blue", "Green", "Black"];
    let i,j,k;
      i = Math.floor(Math.random() * s.length);
      color.push(s[i]);
      s.splice(i,1)
      j = Math.floor(Math.random() * s.length);
      color.push(s[j]);
      s.splice(j,1)
      k = Math.floor(Math.random() * s.length);
      color.push(s[k]);
      s.splice(k,1)
     // console.log(size)
      return color;
}


function getColorValue(val){
   // console.log(val);
    let newArr = arr.filter((item)=>{
        let color = item.colors;
        return color.includes(val);
    })
    displayData(newArr)
}
function getSizeValue(val){
    //console.log(val);
    let newArr = arr.filter((item)=>{
        let size = item.sizes;
        return size.includes(val);
    })
    displayData(newArr)
}
/*
document.querySelector('[name="color"]').addEventListener("change",()=>{
  let newArr = arr.filter((item)=>{
    let color = item.colors;
    return color.includes(val);
})
displayData(newArr)
})

*/





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

