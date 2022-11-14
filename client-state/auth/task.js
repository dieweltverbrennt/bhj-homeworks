const signinButton = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const signin = document.getElementById("signin");
const userId = document.getElementById("user_id");
const logoutButton = document.getElementById("logout__btn");
const formRows = Array.from(document.querySelectorAll(".control"));

function logIn(id) {
    welcome.classList.add("welcome_active");
    signin.classList.remove("signin_active");
    userId.textContent = id;
}

function logOut() {
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
}

function clearForm() {
    form.reset();
}

if(localStorage.getItem("id")) {
    logIn(localStorage.getItem("id"));
}

signinButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.responseType = 'json';
    xhr.onload = () => {
        if(xhr.response.success === true) {
            localStorage.setItem("id", xhr.response.user_id);
            logIn(xhr.response.user_id);
        }
        else {
            alert("Неверный логин/пароль");
        }
    }
    xhr.send(formData);
    clearForm();
})

logoutButton.addEventListener("click", logOut)
