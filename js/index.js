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
        }, 5000); // Change slide every 3 seconds
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    startSlider();
});
