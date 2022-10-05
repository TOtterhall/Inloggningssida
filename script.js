const loginBtn = document.querySelector(".container nav .login");
const signupBtn = document.querySelector(".container nav .signup");

const loginSection = document.querySelector(".container #login");
const signupSection = document.querySelector(".container #signup");

signupBtn.addEventListener("click", function() {
    signupBtn.classList.add("selected");
    loginBtn.classList.remove("selected");
    loginSection.classList.remove("show");
    signupSection.classList.add("show");
});

loginBtn.addEventListener("click", function() {
    signupBtn.classList.remove("selected");
    loginBtn.classList.add("selected");
    loginSection.classList.add("show");
    signupSection.classList.remove("show");
});


//const gate = document.querySelector(".gate");
//const text = document.querySelector(".gate p");
//const form = document.querySelector(".form");
//const input = document.querySelector("input");
//const openGateBtn = document.querySelector(".openGateBtn");
//const walkotBtn = document.querySelector(".walkoutBtn");

//const secretCode = "112233";

//openGateBtn.addEventListener("click", checkCode);

//Function to check if code is correct
//function checkCode() { 
//    if (input.value === secretCode) {
//        renderSuccessfulUI();
//    } else {
//        renderFailUI();
//    }
//}

//Function renderSuccesful UI
//function renderSuccessfulUI() {
//    text.innerText = "MONSTER RUUUUN!!!!";
//    gate.style.backgroundColor = "red";
//    form.style.display = document;
//}

//Function renderFail UI

//Function to reset/walkout