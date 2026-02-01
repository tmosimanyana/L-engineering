console.log('Lush Engineering site loaded'); console.log('Lush Engineering site loaded');

// ===== NAVIGATION =====
(function () {
    "use strict";

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function () {
            const isOpen = mobileNav.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', isOpen);
            menuBtn.textContent = isOpen ? '✕' : '☰';
        });
    }

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav
    const navLinks = {
        'index.html': 'nav-home',
        'about.html': 'nav-about',
        'services.html': 'nav-services',
        'projects.html': 'nav-projects',
        'contact.html': 'nav-contact'
    };

    // Mobile nav
    const mobileNavLinks = {
        'index.html': 'nav-home-m',
        'about.html': 'nav-about-m',
        'services.html': 'nav-services-m',
        'projects.html': 'nav-projects-m',
        'contact.html': 'nav-contact-m'
    };

    if (navLinks[currentPage]) {
        const activeLink = document.getElementById(navLinks[currentPage]);
        if (activeLink) activeLink.classList.add('active');

        const activeMobileLink = document.getElementById(mobileNavLinks[currentPage]);
        if (activeMobileLink) activeMobileLink.classList.add('active');
    }

})();

// ===== ANALYTICS HELPERS =====
(function () {
    "use strict";

    // Track phone clicks
    document.querySelectorAll('[data-call]').forEach(function (el) {
        el.addEventListener('click', function () {
            console.log('Phone call initiated:', el.href);
            // Add your analytics tracking here, e.g.:
            // gtag('event', 'phone_call', { phone_number: el.href });
        });
    });

    // Track WhatsApp clicks
    document.querySelectorAll('[data-wa]').forEach(function (el) {
        el.addEventListener('click', function () {
            console.log('WhatsApp link clicked:', el.href);
            // Add your analytics tracking here, e.g.:
            // gtag('event', 'whatsapp_click', { link: el.href });
        });
    });

})();

// ===== PROJECT GALLERY (for projects.html) =====
(function () {
    "use strict";

    const gallery = document.querySelector('.gallery');
    if (!gallery) return; // Not on projects page

    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.g-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeBtn');

    // Filter functionality
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            galleryItems.forEach(function (item) {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                }
            });
        });
    });

    // Lightbox functionality
    if (lightbox && lightboxImg) {
        galleryItems.forEach(function (item) {
            item.addEventListener('click', function () {
                const img = item.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('open');
            document.body.style.overflow = '';
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.classList.contains('open')) {
                closeLightbox();
            }
        });
    }

})();

// ===== SMOOTH SCROLL (optional enhancement) =====
(function () {
    "use strict";

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

})();