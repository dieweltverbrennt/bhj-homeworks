const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
const rotator = document.querySelector(".rotator")
let currentRotator = 0;
let dataSpeed;
let dataColor;
let currentItem;
rotatorCase[currentRotator].style.color = rotatorCase[currentRotator].getAttribute("data-color");;


function changeRotator() {
    currentRotator = rotatorCase.findIndex((item) => item.classList.contains("rotator__case_active"));
    rotatorCase[currentRotator].classList.remove("rotator__case_active");
    currentItem = rotatorCase[currentRotator].nextElementSibling;
    if(currentItem == null) {
        currentItem = rotator.firstElementChild;
    }
    dataColor = currentItem.getAttribute("data-color");
    currentItem.classList.add("rotator__case_active");
    currentItem.style.color = dataColor;
}

setTimeout(function run() {
    changeRotator();
    dataSpeed = currentItem.getAttribute("data-speed");
    setTimeout(run, dataSpeed);
}, 1000)

