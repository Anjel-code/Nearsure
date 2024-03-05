const cardNumber = document.querySelector('.footer__card_number');
const cardPhoneIcon = document.querySelector('.footer__card_phone_icon');


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

