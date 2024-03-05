let misison = document.querySelector('.section__mission');
let paragarphs = misison.querySelectorAll('.section__mission_paragraph');

window.addEventListener('scroll', function() {
    if(window.scrollY > 0 && window.scrollY < 700) {
        paragarphs[0].classList.add('paragraph-active');
        paragarphs[1].classList.remove('paragraph-active');
        paragarphs[2].classList.remove('paragraph-active');
    }

    else if(window.scrollY > 700 && window.scrollY < 1100) {
        paragarphs[0].classList.remove('paragraph-active');
        paragarphs[2].classList.remove('paragraph-active');
        paragarphs[1].classList.add('paragraph-active');
    }

    else {
        paragarphs[0].classList.remove('paragraph-active');
        paragarphs[1].classList.remove('paragraph-active');
        paragarphs[2].classList.add('paragraph-active');
    }
});