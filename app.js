// Toggle du menu mobile
// Sélection des éléments
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const menuLinks = document.querySelectorAll('.mobile-menu a');

// Ouvrir le menu
burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Fermer le menu avec le bouton ✖
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Fermer le menu en cliquant sur un lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Fermer le menu en cliquant en dehors
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});




// Modal Contact
const contactBtns = document.querySelectorAll('.contact-btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');

contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



// Apparition progressive des expériences au scroll
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Vérifier dès le chargement
});


// Animation des barres de progression au scroll
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    
    function animateProgressBars() {
        const triggerBottom = window.innerHeight * 0.85;
        
        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < triggerBottom) {
                bar.style.width = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1] + "%";
            }
        });
    }

    window.addEventListener("scroll", animateProgressBars);
    animateProgressBars();
});







document.getElementById('google-translate').addEventListener('click', function() {
    const currentUrl = window.location.href;
    const translatedUrl = `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=${encodeURIComponent(currentUrl)}`;
    window.open(translatedUrl, '_blank'); // Ouvre la traduction dans un nouvel onglet
  });
  