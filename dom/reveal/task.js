const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(el) {
    const bottom = el.getBoundingClientRect();
    if(bottom < 0) {
        el.classList.remove("reveal_active");
    }
    else {
        el.classList.add("reveal_active");
    }
}

window.addEventListener("scroll", () => {
    reveal.forEach((item) => isVisible(item));
})