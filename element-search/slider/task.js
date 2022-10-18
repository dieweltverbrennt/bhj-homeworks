// slides
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
// right click
const prevArrow = document.querySelector(".slider__arrow");
// left click
const nextArrow = document.querySelector(".slider__arrow_next");
// slider dots
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

let currentSlide = 0;
sliderDots[currentSlide].classList.add("slider__dot_active");

// управление слайдером
function findCurrentSlide () {
    return sliderItems.indexOf(sliderItems.find((item) => item.classList.contains("slider__item_active")));
};

// регистрация обработчиков
prevArrow.onclick = () => {
    currentSlide = findCurrentSlide();
    sliderItems[currentSlide].classList.remove("slider__item_active");
    sliderDots[currentSlide].classList.remove("slider__dot_active");
    if(currentSlide === 0) {
        currentSlide = sliderItems.length - 1;
    }
    else currentSlide -= 1;
    sliderItems[currentSlide].classList.add("slider__item_active");
    sliderDots[currentSlide].classList.add("slider__dot_active");
};

nextArrow.onclick = () => {
    currentSlide = findCurrentSlide();
    sliderItems[currentSlide].classList.remove("slider__item_active");
    sliderDots[currentSlide].classList.remove("slider__dot_active");
    if(currentSlide === sliderItems.length - 1) {
        currentSlide = 0;
    }
    else currentSlide += 1;
    sliderItems[currentSlide].classList.add("slider__item_active");
    sliderDots[currentSlide].classList.add("slider__dot_active");
};

// обработчик slider dots
for(let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {
        currentSlide = findCurrentSlide();
        sliderItems[currentSlide].classList.remove("slider__item_active");
        sliderDots[currentSlide].classList.remove("slider__dot_active");
        sliderItems[i].classList.add("slider__item_active");
        sliderDots[i].classList.add("slider__dot_active");
    }
}



