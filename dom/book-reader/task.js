const fontSizeArray = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

for(let i = 0; i < fontSizeArray.length; i++) {
    fontSizeArray[i].onclick = () => {
        currentFontSize = fontSizeArray.findIndex(item => item.classList.contains("font-size_active"));
        fontSizeArray[currentFontSize].classList.remove("font-size_active");
        fontSizeArray[i].classList.add("font-size_active");
        book.className = "book";
        const fontAttribute = fontSizeArray[i].getAttribute("data-size");
        if(fontAttribute != null) {
            book.classList.add(`book_fs-${fontAttribute}`);
        }
        return false;
    }
}
