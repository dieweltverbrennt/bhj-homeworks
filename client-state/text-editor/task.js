const editor = document.getElementById("editor");
const clearButton = document.getElementById("clear_button");

if(localStorage) {
    editor.value = localStorage.getItem("text");
}

editor.addEventListener("keyup", () => {
    localStorage.setItem("text", editor.value);
})

clearButton.addEventListener("click", () => {
    editor.value = "";
    localStorage.removeItem("text");
})