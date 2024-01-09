const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
const slidesPerPage = 1; // Display 3 slides at a time
let slideIndex;

function nextSlide() {
    if (slideIndex < (slides.length - 2) - slidesPerPage) {
        slideIndex++;
    } else {
        slideIndex = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
            slider.style.transition = '';
        }, 2000);
    }
    slider.style.transform = `translateX(-${slideIndex * slideWidth * slidesPerPage}px)`;
}

setInterval(nextSlide, 2000); // Change slide every 3 seconds (3000 milliseconds)


const owlslider = document.querySelector('.owlslider');
const owlslides = document.querySelectorAll('.owlslide');
const owlslideWidth = owlslides[0].clientWidth;
const owlslidesPerPage = 1; // Display 3 slides at a time
let owlslideIndex;

function newSlide() {
    if (owlslideIndex < owlslides.length - owlslidesPerPage) {
        owlslideIndex++;
    } else {
        owlslideIndex = 0;
        owlslider.style.transition = 'none';
        owlslider.style.transform = `translateX(0)`;
        setTimeout(() => {
            owlslider.style.transition = '';
        }, 2000);
    }
    owlslider.style.transform = `translateX(-${owlslideIndex * owlslideWidth * owlslidesPerPage}px)`;
}

setInterval(newSlide, 2000); // Change slide every 3 seconds (3000 milliseconds)


const heroslides = document.querySelector('.heroslides');
const heroslideWidth = document.querySelector('.heroslides img').clientWidth;
let heroslideIndex = 0;

function heroSlide() {
  if (heroslideIndex === heroslides.children.length - 1) {
    heroslideIndex = 0;
  } else {
    heroslideIndex++;
  }
  heroslides.style.transform = `translateX(-${heroslideIndex * heroslideWidth}px)`;
}

setInterval(heroSlide, 2000); // Change slide every 3 seconds (3000 milliseconds)