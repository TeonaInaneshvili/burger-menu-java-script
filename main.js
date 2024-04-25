let hamburger = document.querySelector('.hamburger')
let nav = document.querySelector('.navigation')

hamburger.addEventListener('click', mobileMenu);
function mobileMenu() {
    nav.classList.toggle('active');
}
