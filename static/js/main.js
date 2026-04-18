// Cookie banner
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // replace with real ID

function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

const cookieBanner = document.getElementById('cookie-banner');
const cookieConsent = localStorage.getItem('cookieConsent');

if (!cookieConsent && cookieBanner) {
    cookieBanner.classList.add('visible');
}

if (cookieConsent === 'accepted') {
    loadGoogleAnalytics();
}

document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('visible');
    loadGoogleAnalytics();
});

document.getElementById('cookie-reject')?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.remove('visible');
});

// Nav hamburger
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
