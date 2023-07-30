const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navLink = document.querySelectorAll('.nav_link');
const patty = document.querySelectorAll('.patty');

function stateChange() {
    hamburger.classList.toggle('hamburger_change');
    
    patty.forEach( item => {
        item.classList.toggle('patty_change')
    })
};

hamburger.addEventListener('pointerdown', () => {
    mobileNav.classList.toggle('nav_toggle');
    stateChange();
});

navLink.forEach( link => {
    link.addEventListener('pointerdown', () => {
        mobileNav.classList.toggle('nav_toggle');
        stateChange();
    });
});