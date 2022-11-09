const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.addEventListener("progress", (event) => {
        progress.value = event.loaded / 100000000;
    })
    xhr.send(formData);
})
