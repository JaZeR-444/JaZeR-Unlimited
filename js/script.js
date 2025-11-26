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
    setTimeout(() => navigateTo(initial),0);

    // Apply initial brand color (first in the cycle)
    applyBrandColors(jazerBrandColors[currentColorIndex]);

    // Add event listener to logo for color cycling
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            cycleBrandColors();
        });
    }


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
        const num = parseInt(hex.slice(1),16);
        let r = (num >>16) + Math.round(255 * percent);
        let g = ((num >>8) &0x00FF) + Math.round(255 * percent);
        let b = (num &0x0000FF) + Math.round(255 * percent);
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
                const width =40; // sample small
                const height =40;
                canvas.width = width;
                canvas.height = height;
                // draw image scaled to sample size
                context.drawImage(img,0,0, width, height);
                const data = context.getImageData(0,0, width, height).data;
                let r =0, g =0, b =0, count =0;
                // sample every4th pixel to reduce processing
                for (let i =0; i < data.length; i +=16) {
                    r += data[i];
                    g += data[i+1];
                    b += data[i+2];
                    count++;
                }
                r = Math.round(r / count);
                g = Math.round(g / count);
                b = Math.round(b / count);
                resolve(hexFromRgb(r,g,b));
            } catch (err) {
                reject(err);
            }
        });
    }

    // --- Theme Color Cycling (JaZeR Brand Colors) ---
    // Define the array of JaZeR brand colors for cycling
    const jazerBrandColors = [
        '#9333ea', // jazer-purple
        '#ff00ff', // jazer-magenta
        '#00f2ea', // jazer-cyan
        '#ff8800', // jazer-orange
        '#22c55e', // jazer-green
        '#4facfe'  // jazer-blue-mid
    ];
    let currentColorIndex = 0; // Tracks the currently active color in the cycle

    // Helper to get a secondary color based on a primary hex value.
    // This provides a consistent companion color for gradients or accents.
    function getSecondaryColor(primaryHex) {
        // Simple mapping to predefined secondary/accent colors from style.css
        // In a more complex system, this might involve color manipulation libraries
        switch(primaryHex) {
            case '#9333ea': return '#8B5CF6'; // Electric Purple (matches default primary)
            case '#ff00ff': return '#EC4899'; // Neon Pink (matches accent-color)
            case '#00f2ea': return '#06B6D4'; // Icon Cyan
            case '#ff8800': return '#F59E0B'; // Icon Orange
            case '#22c55e': return '#10B981'; // Icon Green
            case '#4facfe': return '#3B82F6'; // Cosmic Blue (matches default secondary)
            default: return lightenHex(primaryHex, 0.25); // Fallback to lighter version
        }
    }

    // Applies the given primary color and a derived secondary color to CSS variables.
    // Also updates the CTA button's box-shadow for visual feedback.
    function applyBrandColors(primaryHex) {
        const root = document.documentElement;
        const secondaryHex = getSecondaryColor(primaryHex); // Get a consistent secondary color
        root.style.setProperty('--primary-color', primaryHex);
        root.style.setProperty('--secondary-color', secondaryHex);
        // Update CTA button's box-shadow to reflect the new primary color
        const cta = document.querySelector('.cta-button');
        if (cta) {
            cta.style.boxShadow = `0 8px 24px ${primaryHex}33`;
        }
    }

    // Cycles through the `jazerBrandColors` array and applies the next color.
    function cycleBrandColors() {
        currentColorIndex = (currentColorIndex + 1) % jazerBrandColors.length;
        const newColor = jazerBrandColors[currentColorIndex];
        applyBrandColors(newColor);
    }

    // --- Initialization and Event Listeners for Color Cycling ---

    // Apply the initial brand color (first in the cycle) when the page loads.
    applyBrandColors(jazerBrandColors[currentColorIndex]);

    // Add event listener to the main logo to trigger color cycling on click.
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            cycleBrandColors(); // Cycle to the next brand color
        });
    }



    function initBrandGallery() {
        const items = document.querySelectorAll('.gallery-item');
        if (!items || items.length ===0) return;
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

            if (img.complete && img.naturalWidth !==0) doInit();
            else img.addEventListener('load', doInit);
        });
    }

    initBrandGallery();

});