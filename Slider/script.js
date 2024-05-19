const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){
    slides[slideIndex].classList.add("displayslide");
    if(slides.length > 0){
    intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }
  slides.forEach(slide => {
    slide.classList.remove("displayslide");
  });
  slides[slideIndex].classList.add("displayslide");
}
function prevSlide(){
   slideIndex--;
   showSlide(slideIndex);
}
function nextSlide(){
   slideIndex++;
   showSlide(slideIndex);
}