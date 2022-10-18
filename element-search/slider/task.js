// slides
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
// right click
const prevArrow = document.querySelector(".slider__arrow");
// left click
const nextArrow = document.querySelector(".slider__arrow_next");
// slider dots
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

// выставляет активное изображение
function setSlide(index) {
    sliderItems[index].classList.add("slider__item_active");
    sliderDots[index].classList.add("slider__dot_active");
}

let currentSlide = 0;
setSlide(currentSlide);

// регистрация обработчиков
prevArrow.onclick = () => {
    let index;
    currentSlide = sliderItems.findIndex((item) => item.classList.contains("slider__item_active"));
    sliderItems[currentSlide].classList.remove("slider__item_active");
    sliderDots[currentSlide].classList.remove("slider__dot_active");
    if(currentSlide === 0) {
        index = sliderItems.length - 1;
    }
    else index = currentSlide - 1;
    setSlide(index);
};

nextArrow.onclick = () => {
    let index;
    currentSlide = sliderItems.findIndex((item) => item.classList.contains("slider__item_active"));
    sliderItems[currentSlide].classList.remove("slider__item_active");
    sliderDots[currentSlide].classList.remove("slider__dot_active");
    if(currentSlide === sliderItems.length - 1) {
        index = 0;
    }
    else index = currentSlide + 1;
    setSlide(index);
};

// обработчик slider dots
for(let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {
        currentSlide = sliderItems.findIndex((item) => item.classList.contains("slider__item_active"));
        sliderItems[currentSlide].classList.remove("slider__item_active");
        sliderDots[currentSlide].classList.remove("slider__dot_active");
        setSlide(i);
    }
}



