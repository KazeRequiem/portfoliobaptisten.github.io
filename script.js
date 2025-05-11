const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

const links = mobileMenu.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

document.querySelectorAll('.info-bulle1').forEach(bulle => {
    bulle.addEventListener('click', () => {
        const panelId = bulle.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('show');
    });
});

document.querySelectorAll('.info-bulle2').forEach(bulle => {
    bulle.addEventListener('click', () => {
        const panelId = bulle.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('show');
    });
});

document.querySelectorAll('.info-bulle3').forEach(bulle => {
    bulle.addEventListener('click', () => {
        const panelId = bulle.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('show');
    });
});

document.querySelectorAll('.info-bulle4').forEach(bulle => {
    bulle.addEventListener('click', () => {
        const panelId = bulle.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('show');
    });
});

document.querySelectorAll('.info-bulle5').forEach(bulle => {
    bulle.addEventListener('click', () => {
        const panelId = bulle.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('show');
    });
});

document.querySelectorAll('.info-bulle6').forEach(bulle => {
    bulle.addEventListener('click', () => {
        const panelId = bulle.getAttribute('data-panel');
        document.getElementById(panelId).classList.add('show');
    });
});

document.querySelectorAll('.close-panel').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.panel').classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments
    const contactButton = document.getElementById('contact-button');
    const navContact = document.getElementById('nav-contact');
    const mobileContact = document.getElementById('mobile-contact');
    const contactPanel = document.getElementById('contact-panel');
    const closePanel = contactPanel.querySelector('.close-panel');
    
    // Fonction pour ouvrir le panneau de contact
    function openContactPanel() {
        // Fermer tous les autres panneaux ouverts
        document.querySelectorAll('.panel.show').forEach(panel => {
            if (panel.id !== 'contact-panel') {
                panel.classList.remove('show');
                panel.classList.add('hidden');
            }
        });
        
        // Ouvrir le panneau de contact
        contactPanel.classList.add('show');
        contactPanel.classList.remove('hidden');
        
        // Empêcher le défilement du body
        document.body.style.overflow = 'hidden';
    }
    
    // Fonction pour fermer le panneau de contact
    function closeContactPanel() {
        contactPanel.classList.remove('show');
        contactPanel.classList.add('hidden');
        
        // Réactiver le défilement du body
        document.body.style.overflow = '';
    }
    
    // Ajouter les écouteurs d'événements
    if (contactButton) {
        contactButton.addEventListener('click', openContactPanel);
    }
    
    if (navContact) {
        navContact.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien
            openContactPanel();
        });
    }

    if (mobileContact) {
        mobileContact.addEventListener('click', function(e) {
            e.preventDefault();
            openContactPanel();
        });
    }
    
    if (closePanel) {
        closePanel.addEventListener('click', closeContactPanel);
    }
    
    // Fermer le panneau avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactPanel.classList.contains('show')) {
            closeContactPanel();
        }
    });
    
});

