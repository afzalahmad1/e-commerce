let form = document.getElementById("form");

var usersList = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  let cnfPass = document.getElementById("confirm-password").value;
  let Message = document.getElementById("message");

  // checking Email is already exist or not
  let flag = false;
  usersList.forEach((val) => {
    if (val.email === Email) {
      flag = true;
    }
  });

  if (!fName || !lName || !Email || !Password || !cnfPass) {
    Message.style.display = "block";
    Message.style.color = "red";
    Message.textContent = "Error: Please fill out all fields";
    return;
  } else if (Password !== cnfPass) {
    Message.style.display = "block";
    Message.style.color = "red";
    Message.textContent = "Error: Password must be same";
    return;
  } else if (flag) { // if email already exist
    Message.style.display = "block";
    Message.style.color = "red";
    Message.textContent = "Error: Email Already Exist";
    return;
  } else {
    Message.style.display = "block";
    Message.style.color = "green";
    Message.textContent = "Signed up Successfully ";
  }
  let user = {
    fName: fName,
    lName: lName,
    email: Email,
    password: Password,
  };
  
    usersList.push(user);
    localStorage.setItem("usersList", JSON.stringify(usersList));

    form.reset();
});

(() => {
    // whenever page loads this function is called
    // fetching the data from localstorage
    usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    localStorage.setItem("usersList",JSON.stringify(usersList))
})();


document.getElementById("mycart").addEventListener("click",()=>{
  alert("Please Login first")
  return;
})