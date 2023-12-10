const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;

const leftNav = document.querySelector('.left-links-nav') as HTMLElement;
const rightNav = document.querySelector('.right-links-nav') as HTMLElement;

menuToggle.addEventListener('click', function() {
    leftNav.classList.toggle('show');
    rightNav.classList.toggle('show');
});
