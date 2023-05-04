// Write your script here
var usersList = [];
var currUser = {};
(() => {
  // whenever page loads this function is called
  // fetching the data from localstorage
  if(JSON.parse(localStorage.getItem("currUser"))==null){
    window.location.href = "../login/login.html"
    return;
  }
  usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  currUser = JSON.parse(localStorage.getItem("currUser")) || [];
})();
let message = document.getElementById("message");
let nameEditBtn = document.getElementById("btn");
let fName = (document.getElementById("fName").value = `${currUser.fName}`);
let lName = (document.getElementById("lName").value = `${currUser.lName}`);
let changePasswordBtn = document.getElementById("change-pass");
let logoutBtn = document.getElementById("logout");

nameEditBtn.addEventListener("click", () => {
  let editedFirstName = document.getElementById("fName").value;
  let editedLastName = document.getElementById("lName").value;
  if (editedFirstName === fName && editedLastName === lName) {
    message.style.display = "block";
    message.style.color = "red";
    message.innerHTML = `<span>Error: Please change something first</span>`;
    return;
  }
  let cnf = confirm("Do you want to change name");
  if (cnf) {
    //show success message
    message.style.display = "block";
    message.style.color = "green";
    message.innerHTML = `<span>Name changed successfully</span>`;
    // change name of currUser in localStorage

    currUser.fName = editedFirstName;
    currUser.lName = editedLastName;
    localStorage.setItem("currUser", JSON.stringify(currUser));
    usersList.forEach((user) => {
      if (user.email === currUser.email) {
        //change name in usersList
        user.fName = editedFirstName;
        user.lName = editedLastName;
        localStorage.setItem("usersList", JSON.stringify(usersList));
      }
    });
  } else {
    message.style.display = "block";
    message.style.color = "red";
    message.innerHTML = `<span>Cancelled</span>`;
    return;
  }
});

//change password
changePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let oldPass = document.getElementById("old-password").value;
  let newPass = document.getElementById("new-password").value;
  let cnfPass = document.getElementById("confirm-password").value;
  let passMessage = document.getElementById("passMessage");
  if (!newPass || !oldPass || !cnfPass) {
    passMessage.style.color = "red";
    passMessage.innerHTML = `<span>All fields are mandatory</span>`;
    return;
  } else if (oldPass !== currUser.password) {
    //alert("Incorrect old password");
    passMessage.style.color = "red";
    passMessage.innerHTML = `<span>Incorrect old password</span>`;
    return;
  } else if (newPass !== cnfPass) {
    //alert("mismatch password");
    passMessage.style.color = "red";
    passMessage.innerHTML = `<span>Mismatch Password</span>`;
    return;
  } else if (oldPass === newPass) {
    // alert("new password must be different from old password");
    passMessage.style.color = "red";
    passMessage.innerHTML = `<span>New password must be different from old password</span>`;
    return;
  }

  let cnf = confirm("Do you want to change password");
  if (cnf) {
    //print message
    passMessage.style.color = "green";
    passMessage.innerHTML = `<span>Password changed sucessfully</span>`;
    // change password of currUser in localStorage.
    currUser.password = newPass;
    localStorage.setItem("currUser", JSON.stringify(currUser));
    usersList.forEach((user) => {
      if (user.email === currUser.email) {
        //change name in usersList
        user.password = newPass;
        localStorage.setItem("usersList", JSON.stringify(usersList));
      }
    });
  } else {
    return;
  }
});
//logout
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("currUser");
  window.location.href = "../index.html";
});


