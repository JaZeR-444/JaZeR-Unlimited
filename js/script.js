document.addEventListener('DOMContentLoaded', () => {
    // Utility: show page
    function showPage(pageName) {
        const page = document.getElementById(pageName);
        if (!page) return;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        page.classList.add('active');
        
        // Update hash for direct linking
        history.replaceState(null, '', `#${pageName}`);
        
        // focus main content for accessibility
        page.setAttribute('tabindex', '-1');
        page.focus();
        window.scrollTo(0,0);
    }

    // Navigate to named page
    function navigateTo(pageName) {
        // guard
        if (!pageName) return;
        showPage(pageName);

        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageName);
        });

        // Close mobile menu if open
        const navLinks = document.getElementById('navLinks');
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const mobileBtn = document.getElementById('mobileMenu');
            if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // Wire up nav link clicks
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.dataset.page;
            navigateTo(target);
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('active');
        });

        // allow Enter/Space to toggle
        mobileMenu.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Initialize page from hash or default
    const initial = (location.hash && location.hash.replace('#', '')) || 'home';
    // Delay slightly to ensure focus works
    setTimeout(() => navigateTo(initial), 0);

    // Enhanced form submission handler with Formspree
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (form && formStatus) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Show loading message
            formStatus.innerHTML = '<span style="color: var(--secondary-color);">Sending message...</span>';

            // Get form data
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    // Success
                    formStatus.innerHTML = '<span style="color: var(--primary-color);">✓ Message sent successfully! I\'ll get back to you soon.</span>';
                    form.reset();
                } else {
                    // Attempt to parse error message
                    let errMsg = '✗ Oops! Something went wrong. Please try again.';
                    try {
                        const data = await response.json();
                        if (data && data.error) errMsg = data.error;
                    } catch (_) { /* ignore JSON parse errors */ }
                    formStatus.innerHTML = `<span style="color:#ff4444;">${errMsg}</span>`;
                }
            } catch (error) {
                // Network error
                formStatus.innerHTML = '<span style="color:#ff4444;">✗ Network error. Please check your connection and try again.</span>';
            }
        });
    }

    // --- Brand gallery: allow selecting an image to derive brand colors ---
    function hexFromRgb(r, g, b) {
        const toHex = (n) => n.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    function lightenHex(hex, percent) {
        // hex like #rrggbb
        const num = parseInt(hex.slice(1), 16);
        let r = (num >> 16) + Math.round(255 * percent);
        let g = ((num >> 8) & 0x00FF) + Math.round(255 * percent);
        let b = (num & 0x0000FF) + Math.round(255 * percent);
        r = Math.min(255, Math.max(0, r));
        g = Math.min(255, Math.max(0, g));
        b = Math.min(255, Math.max(0, b));
        return hexFromRgb(r, g, b);
    }

    function getAverageColorFromImage(img) {
        return new Promise((resolve, reject) => {
            try {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const width = 40; // sample small
                const height = 40;
                canvas.width = width;
                canvas.height = height;
                // draw image scaled to sample size
                context.drawImage(img, 0, 0, width, height);
                const data = context.getImageData(0, 0, width, height).data;
                let r = 0, g = 0, b = 0, count = 0;
                // sample every 4th pixel to reduce processing
                for (let i = 0; i < data.length; i += 16) {
                    r += data[i];
                    g += data[i+1];
                    b += data[i+2];
                    count++;
                }
                r = Math.round(r / count);
                g = Math.round(g / count);
                b = Math.round(b / count);
                resolve(hexFromRgb(r, g, b));
            } catch (err) {
                reject(err);
            }
        });
    }

    function applyBrandColors(primaryHex) {
        const root = document.documentElement;
        const secondary = lightenHex(primaryHex, 0.25);
        root.style.setProperty('--primary-color', primaryHex);
        root.style.setProperty('--secondary-color', secondary);
        // small visual feedback: update CTA outline
        const cta = document.querySelector('.cta-button');
        if (cta) {
            cta.style.boxShadow = `0 8px 24px ${primaryHex}33`;
        }
    }

    function initBrandGallery() {
        const items = document.querySelectorAll('.gallery-item');
        if (!items || items.length === 0) return;
        items.forEach(btn => {
            const img = btn.querySelector('img');
            // ensure image is loaded before trying to sample
            const doInit = () => {
                btn.addEventListener('click', async () => {
                    // remove selected class from others
                    items.forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    try {
                        const hex = await getAverageColorFromImage(img);
                        applyBrandColors(hex);
                    } catch (e) {
                        console.warn('Could not extract color', e);
                    }
                });

                btn.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        btn.click();
                    }
                });
            };

            if (img.complete && img.naturalWidth !== 0) doInit();
            else img.addEventListener('load', doInit);
        });
    }

    initBrandGallery();

});