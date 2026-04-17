const hamburger = document.querySelector('.nav-hamburger');
const navCollections = document.querySelector('.nav-collections');
const navLang = document.querySelector('.nav-lang');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navCollections.classList.toggle('open');
        navLang.classList.toggle('open');
    });
}
