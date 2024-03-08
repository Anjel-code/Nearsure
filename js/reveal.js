document.addEventListener("DOMContentLoaded", function() {
    reveal('Zoom');
    reveal('Wave');
    reveal('Up-On-Load');
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
    if(direction == 'Up') {
        elementVisible = 0;
    }

    reveals.forEach(element => {
        let elementTop = element.getBoundingClientRect().top;
        if(direction == 'Zoom' || direction == 'Wave' || direction == 'Up-On-Load') {
            elementTop = -999999;
        }

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
        else {
            element.classList.remove("active");
        }
    });
}

// Optimized scroll event listener using debounce
window.addEventListener('scroll', debounce(() => {
    reveal('Up');
    reveal('Down');
    reveal('Left');
    reveal('Right');
    reveal('Appear');
}, 100));