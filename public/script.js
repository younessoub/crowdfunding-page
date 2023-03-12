const openMenu = document.querySelector('.open-menu-mobile');
const closeMenu = document.querySelector('.close-menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

openMenu.addEventListener('click', (e)=>{
    e.target.classList.toggle('active');
    closeMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
});

closeMenu.addEventListener('click', (e)=>{
    e.target.classList.toggle('active');
    openMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
});