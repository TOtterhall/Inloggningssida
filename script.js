/*function init() {
    if (localStorage.getItem('logInSucces')) {
    document.getElementById("username").value = localStorage.getItem("username")
    document.getElementById("password").value = localStorage.getItem("password")
    console.log("i init innanför if")
    }
    console.log("i init utanför if")
}*/

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
const objPeople = [
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


localStorage.setItem('list of users', JSON.stringify(objPeople));
const userStorage = localStorage.getItem('list of users');
let objPeopleString = JSON.stringify(userStorage);
console.log(userStorage);

const user = document.getElementById("username")
const password = document.getElementById("password")
if (!localStorage.getItem ("objPeople")) {
    localStorage.setItem ("objPeople", JSON.stringify(objPeople))
}

function init () {
    if (localStorage.getItem ("username")) {
        logInSucces () 
    
    }
}

init()

//login functionality
function login() {
let username = document.getElementById("username").value
let password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].
            password) { 
            
            console.log(username + " " + "is logged in")  
            localStorage.setItem('logInSucces', JSON.stringify(true))

            localStorage.setItem("username", objPeople[i].username)
            localStorage.setItem("password", objPeople[i].password)
            logInSucces();
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
const walkoutBtn = document.querySelector("walkoutBtn");

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
//Function renderUnSuccesful login
function logInFail() {
    document.querySelector("header h1").innerText= "Sorry, wrong password! Please try again.";
    document.querySelector("header").style.backgroundColor = "red";
    document.querySelector("footer").style.backgroundColor = "red";
    document.querySelector(".container nav").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("signup").style.visibility = "hidden";
    document.getElementById("signout").style.display = "hidden";
}


const signoutBtn = document.getElementById("walkoutBtn");  

signoutBtn.addEventListener("click", walkout);


function walkout() {
    document.querySelector("header h1").innerText= "Yayyy!";
    document.querySelector("header").style.backgroundColor = "pink";
    document.querySelector("footer").style.backgroundColor = "pink";
    document.querySelector(".container nav").style.visibility = "show";
    document.getElementById("login").style.display = "show";
    document.getElementById("signup").style.display = "hidden";
    document.getElementById("signout").style.visibility = "hidden";
    localStorage.setItem('logInSucces', JSON.stringify(false))
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    console.log(username + " " + "is logged out")
};


//function save() {
//    let fieldValue = document.getElementsByClassName('walkinBtn').value
//    window.localStorage.setItem('text, fieldValue')
//}

//Vid utloggning (tru/false) så tar vi bort det från local storage
//function logout() {
//    localStorage.removItem("isLogedout")
//}


//Hello user
//function hej(fName, aName) {
//    var printName = "Hej" + fName + " " + aName + "!" ;
//    console.log(printName);
//}

//function signout() {
//LogoutBtn//???????????????????
//LogoutBtn//
//SignupBtn//
//localstorage users se video





