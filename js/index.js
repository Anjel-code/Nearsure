let navbar = document.querySelector('.navbar');
let navbar__link = navbar.querySelectorAll('.navbar__link');
let navbar__link_options = navbar.querySelectorAll('.navbar__link_options');
let navbar__link_id = -1;
const cardNumber = document.querySelector('.footer__card_number');
const cardPhoneIcon = document.querySelector('.footer__card_phone_icon');

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

// Debounce function to limit the frequency of the scroll event
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Function to reveal elements based on scroll direction
function reveal(direction) {
    let reveals = document.querySelectorAll(".reveal" + direction);
    let windowHeight = window.innerHeight;
    let elementVisible = 150;

    reveals.forEach(element => {
        let elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

// Optimized scroll event listener using debounce
window.addEventListener('scroll', debounce(() => {
    reveal('Up');
    reveal('Down');
    reveal('Left');
}, 100));

