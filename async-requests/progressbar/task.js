const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData();
    let xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = (event) => {
        console.log(event.loaded, event.total)
        progress.value = event.loaded / event.total;
    }

    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);
})
