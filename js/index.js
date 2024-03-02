let navbar = document.querySelector('.navbar');
let navbar__link = navbar.querySelectorAll('.navbar__link');
let navbar__link_options = navbar.querySelectorAll('.navbar__link_options');
let navbar__link_id = -1;

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    
    if (window.scrollY !== 0) {
        navbar.classList.add('navbar__scrolled');
    } else {
        navbar.classList.remove('navbar__scrolled');
    }
});

navbar__link.forEach(element => {
    element.addEventListener('mouseover', () => {
        navbar__link_id = element.id;
        navbar__link_options[element.id].classList.remove('hidden');
        navbar__link_options[element.id].addEventListener('mouseover', () => {
            navbar__link_options[element.id].classList.remove('hidden');
        });
    });

    element.addEventListener('mouseout', () => {
        navbar__link_options[element.id].classList.add('hidden');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.section__swiper-slide');
    var currentSlide = 0;
    var slideInterval;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[(currentSlide - 1 + slides.length) % slides.length].classList.remove('previous');
        slides[(currentSlide + 1) % slides.length].classList.remove('next');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        slides[(currentSlide - 1 + slides.length) % slides.length].classList.add('previous');
        slides[(currentSlide + 1) % slides.length].classList.add('next');
    }

    function startSlider() {
        slideInterval = setInterval(function() {
            showSlide(currentSlide + 1);
        }, 6000); // Change slide every 3 seconds
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    startSlider();
});

