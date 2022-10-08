console.log("Hej");

const logInBtn = document.querySelector(".container nav .login");
const signUpBtn = document.querySelector(".container nav .signup");

const loginSection = document.querySelector(".container #login");
const signupSection = document.querySelector(".container #signup");
const inlogedSection = document.querySelector(".container #signout");  

//Switch between Login & Sign up forms//
signUpBtn.addEventListener("click", function() {
    signUpBtn.classList.add("selected");
    logInBtn.classList.remove("selected");
    loginSection.classList.remove("show");
    signupSection.classList.add("show");
    inlogedSection.classList.remove("show");
});

logInBtn.addEventListener("click", function() {
    signUpBtn.classList.remove("selected");
    logInBtn.classList.add("selected");
    loginSection.classList.add("show");
    signupSection.classList.remove("show");
    inlogedSection.classList.remove("show");
});


//Usernames and passwords to log in//

//users
let objPeople = [
    {
        username:"Fredrik",
        password:"12345"
    },
    {
        username:"Melwin",
        password:"00000"
    },
    {
        username:"Nellie",
        password:"33344"
    },
    {
        username:"Tessan",
        password:"54321"
    }
]

//login functionality
function login() {
let username = document.getElementById("username").value
let password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].
            password) { 
            logInSucces();
            console.log(username + " " + "is logged in")
            return            
        }    
    }
    logInFail();
} 

const headingText = document.querySelector("header h1");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const navBar = document.querySelector(".container nav");
const MyPage = document.getElementById("signout");

//Function renderSuccesful login
function logInSucces() {
    document.querySelector("header h1").innerText= "Inloggad";
    document.querySelector("header").style.backgroundColor = "green";
    document.querySelector("footer").style.backgroundColor = "green";
    document.querySelector(".container nav").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("signout").style.display = "block";
}

function showhide (isLoggedIn) {
    var x = document.getElementById("#mypage");
    if(MyPage.style.display === "none") {
        MyPage.style.display = "block"; 
    } else {
        MyPage.style.display = "none";    
    }
}


//LoginBtn//
//Function to check if code is correct
//LogoutBtn//
//SignupBtn//
// users and passwords to log in//
//MyPage succesfull login//
//MyPage unsuccesfull login//


