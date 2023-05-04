
let form = document.getElementById("form");
let message = document.getElementById("message");
var usersList = [];
var currUser = {};
(() => {
    // whenever page loads this function is called
    // fetching the data from localstorage
    usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    if(localStorage.getItem("currUser")!==null){
        window.location.href = "../shop/index.html"
    }
})();
function generateToken(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var token = '';
    for (var i = 0; i < length; i++) {
      token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
  }
  
  var token = generateToken(16);

//on every refresh get usersList from localstorage

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let loginEmail = document.getElementById("email").value;
    let loginPass = document.getElementById("password").value;

    let flag = false;
    usersList.forEach((user)=>{
        if(user.email === loginEmail && user.password === loginPass){
            flag = true;
            currUser = user;
        }
            
    })
    if(flag){
        message.style.display="block"
        message.style.color="green"
        message.textContent = "Login successful";
        currUser.token = token;
        console.log(currUser);
        localStorage.setItem("currUser",JSON.stringify(currUser));

        //redirect to shop page
        window.location.href = "../shop/index.html"


    }else{
        console.log("not login")
        message.style.display="block"
        message.style.color="red"
        message.textContent = "Email or Password is incorrect";
    }

})

function alertMessage(){
    alert("Login first")
    return
}