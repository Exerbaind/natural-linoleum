const prevSlide = document.getElementById("prev-slide");
const nextSlide = document.getElementById("next-slide");
const slides = [...document.querySelectorAll(".photos-slider__image")];
let activeSlideIndex = 0;

nextSlide.onclick = function () {
  slides[activeSlideIndex].classList.remove("photos-slider__image--active");
  if (activeSlideIndex === slides.length - 1) {
    activeSlideIndex = 0;
  } else {
    activeSlideIndex += 1;
  }
  slides[activeSlideIndex].classList.add("photos-slider__image--active");
};

prevSlide.onclick = function () {
  slides[activeSlideIndex].classList.remove("photos-slider__image--active");
  if (activeSlideIndex === 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex -= 1;
  }
  slides[activeSlideIndex].classList.add("photos-slider__image--active");
};
