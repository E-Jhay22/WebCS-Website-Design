const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
});
