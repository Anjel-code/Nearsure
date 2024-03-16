let misison = document.querySelector('.section__mission');
let paragarphs = misison.querySelectorAll('.section__mission_paragraph');
let w = window.innerWidth;
let h = window.innerHeight;

if(w > 900) {
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
}

else {
    window.addEventListener('scroll', function() {
        if(window.scrollY > 0 && window.scrollY < 700) {
            paragarphs[0].classList.add('paragraph-active_mobile');
            paragarphs[1].classList.remove('paragraph-active_mobile');
            paragarphs[2].classList.remove('paragraph-active_mobile');
        }

        else if(window.scrollY > 700 && window.scrollY < 1100) {
            paragarphs[0].classList.remove('paragraph-active_mobile');
            paragarphs[2].classList.remove('paragraph-active_mobile');
            paragarphs[1].classList.add('paragraph-active_mobile');
        }

        else {
            paragarphs[0].classList.remove('paragraph-active_mobile');
            paragarphs[1].classList.remove('paragraph-active_mobile');
            paragarphs[2].classList.add('paragraph-active_mobile');
        }
    });
}
