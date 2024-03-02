navbar = document.querySelector('.navbar');
navbar__link = navbar.querySelectorAll('.navbar__link');
navbar__link_options = navbar.querySelectorAll('.navbar__link_options');
navbar__link_id = -1;

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
