const reveal = Array.from(document.querySelectorAll(".reveal"));
const viewPortHeight = window.innerHeight;

function isVisible(el) {
    const { bottom, top} = el.getBoundingClientRect();
    console.log(el.getBoundingClientRect());
    if(bottom < 0 || top > viewPortHeight) {
        el.classList.remove("reveal_active");
    }
    else {
        el.classList.add("reveal_active");
    }
}

window.addEventListener("scroll", () => {
    reveal.forEach((item) => isVisible(item));
})