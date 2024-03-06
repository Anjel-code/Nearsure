let navbar = document.querySelector('.navbar');
let navbar__link = navbar.querySelectorAll('.navbar__link');
let navbar__link_options = navbar.querySelectorAll('.navbar__link_options');
let navbar__link_option = navbar.querySelectorAll('.navbar__link_option');
let navbar__link_id = -1;

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    
    if (window.scrollY !== 0) {
        navbar.classList.add('navbar__scrolled');

        navbar__link_options.forEach(element => {
            element.classList.add('active');
        });
        
        navbar__link_option.forEach(element => {
            element.classList.add('active');
        });
    } else {
        navbar.classList.remove('navbar__scrolled');

        navbar__link_options.forEach(element => {
            element.classList.remove('active');
        });

        navbar__link_option.forEach(element => {
            element.classList.remove('active');
        });
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