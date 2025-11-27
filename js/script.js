document.addEventListener('DOMContentLoaded', () => {
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

    // Helper to get a secondary color based on a primary hex value.
    function getSecondaryColor(primaryHex) {
        switch (primaryHex) {
            case '#9333ea': return '#8B5CF6'; // Electric Purple
            case '#ff00ff': return '#EC4899'; // Neon Pink
            case '#00f2ea': return '#06B6D4'; // Icon Cyan
            case '#ff8800': return '#F59E0B'; // Icon Orange
            case '#22c55e': return '#10B981'; // Icon Green
            case '#4facfe': return '#3B82F6'; // Cosmic Blue
            default: return lightenHex(primaryHex, 0.25);
        }
    }

    // Applies the given primary color and a derived secondary color to CSS variables.
    function applyBrandColors(primaryHex) {
        const root = document.documentElement;
        const secondaryHex = getSecondaryColor(primaryHex);
        root.style.setProperty('--primary-color', primaryHex);
        root.style.setProperty('--secondary-color', secondaryHex);
        // Update CTA button's box-shadow
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

    // Initialize brand color
    applyBrandColors(jazerBrandColors[currentColorIndex]);

    // Add event listener to logo for color cycling
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.addEventListener('click', (e) => {
            e.preventDefault();
            cycleBrandColors();
        });
    }

    // Enhanced form submission handler with Formspree
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (form && formStatus) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            formStatus.innerHTML = '<span style="color: var(--secondary-color);">Sending message...</span>';
            const formData = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    formStatus.innerHTML = '<span style="color: var(--primary-color);">✓ Message sent successfully! I\'ll get back to you soon.</span>';
                    form.reset();
                } else {
                    let errMsg = '✗ Oops! Something went wrong. Please try again.';
                    try {
                        const data = await response.json();
                        if (data && data.error) errMsg = data.error;
                    } catch (_) { }
                    formStatus.innerHTML = `<span style="color:#ff4444;">${errMsg}</span>`;
                }
            } catch (error) {
                formStatus.innerHTML = '<span style="color:#ff4444;">✗ Network error. Please check your connection and try again.</span>';
            }
        });
    }

    // --- Brand gallery ---
    function getAverageColorFromImage(img) {
        return new Promise((resolve, reject) => {
            try {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const width = 40;
                const height = 40;
                canvas.width = width;
                canvas.height = height;
                context.drawImage(img, 0, 0, width, height);
                const data = context.getImageData(0, 0, width, height).data;
                let r = 0, g = 0, b = 0, count = 0;
                for (let i = 0; i < data.length; i += 16) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
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

    function initBrandGallery() {
        const items = document.querySelectorAll('.gallery-item');
        if (!items || items.length === 0) return;
        items.forEach(btn => {
            const img = btn.querySelector('img');
            const doInit = () => {
                btn.addEventListener('click', async () => {
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