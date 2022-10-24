const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let currentRotator = 0;
let dataSpeed;
let dataColor;
rotatorCase[currentRotator].style.color = rotatorCase[currentRotator].getAttribute("data-color");;


function changeRotator() {
    currentRotator = rotatorCase.findIndex((item) => item.classList.contains("rotator__case_active"));
    rotatorCase[currentRotator].classList.remove("rotator__case_active");
    currentRotator != rotatorCase.length - 1 ? currentRotator++ : currentRotator = 0;

    dataSpeed = rotatorCase[currentRotator].getAttribute("data-speed");
    dataColor = rotatorCase[currentRotator].getAttribute("data-color");
    rotatorCase[currentRotator].classList.add("rotator__case_active");
    rotatorCase[currentRotator].style.color = dataColor;
}

setTimeout(function run() {
    changeRotator();
    dataSpeed = rotatorCase[currentRotator].getAttribute("data-speed");
    setTimeout(run, dataSpeed);
}, 1000)
