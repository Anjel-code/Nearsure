const cardNumber = document.querySelector('.footer__card_number');
const cardPhoneIcon = document.querySelector('.footer__card_phone_icon');

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


function copyClipboard() {
    let copyText = document.querySelector('.footer__card_number');

    navigator.clipboard.writeText(copyText.textContent);
    
    alert("Phone number is copied: " + copyText.textContent);
}

cardNumber.addEventListener('mouseenter', () => {
    cardPhoneIcon.style.filter = 'contrast(200%)';
});

cardNumber.addEventListener('mouseleave', () => {
    cardPhoneIcon.style.filter = 'none';
});

