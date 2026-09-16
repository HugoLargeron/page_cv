/* ========================================
   CV Hugo Largeron — Interactions
   ======================================== */

(function () {
    'use strict';

    /* --- 1. Navigation active au scroll (spy) --- */
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const sections = document.querySelectorAll('.section[id]');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 120;

        let currentId = 'contact';
        sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos) {
                currentId = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            const isActive = link.getAttribute('href') === '#' + currentId;
            link.classList.toggle('active', isActive);
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    /* --- 2. Fermer le menu sur mobile après clic --- */
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Sur mobile, on remonte en haut de la section cible
            // (le scroll-behavior: smooth gère l'animation)
        });
    });

    /* --- 3. Bouton "Télécharger PDF" --- */
    // Le bouton utilise window.print() directement dans le HTML.
    // On ajoute un petit retour visuel au clic.
    const btnPrint = document.querySelector('.btn-print');
    if (btnPrint) {
        btnPrint.addEventListener('click', function () {
            // Petit feedback visuel
            btnPrint.style.transform = 'scale(0.95)';
            setTimeout(function () {
                btnPrint.style.transform = '';
            }, 150);
        });
    }

    /* --- 4. Année dynamique dans le footer (si présent) --- */
    const yearEl = document.querySelector('[data-year]');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

})();