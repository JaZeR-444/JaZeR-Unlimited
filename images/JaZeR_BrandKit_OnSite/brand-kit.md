# 🎵 JaZeR Brand Kit

**Version:** 1.0  
**Last Updated:** November 27, 2025  
**Website:** [[jazer-music.com](http://jazer-music.com)](https://jazer-music.com)

---

## 📋 Table of Contents

- [Brand Identity](#brand-identity)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Logo & Visual Assets](#logo--visual-assets)
- [Gradients](#gradients)
- [Iconography](#iconography)
- [Spacing & Layout](#spacing--layout)
- [Voice & Tone](#voice--tone)
- [Social Media](#social-media)
- [Usage Examples](#usage-examples)

---

## 🎯 Brand Identity

### Brand Name
**JaZeR**

### Tagline
"Austin Hip-Hop. Raw Lyrics. Real Talk."

### Brand Essence
JaZeR is an Austin-based hip-hop artist blending introspective lyrics with hard-hitting production. The brand embodies **authenticity, energy, and raw creativity** — a futuristic yet grounded sound that speaks to dreamers and builders.

### Brand Personality
- **Bold** — Unafraid to stand out
- **Authentic** — Real stories, real struggles
- **Energetic** — High-energy beats and delivery
- **Introspective** — Thoughtful, meaningful lyrics
- **Futuristic** — Modern production, forward-thinking

### Target Audience
- Hip-hop fans who value lyricism
- Independent music lovers
- Creatives and entrepreneurs
- 18-35 age demographic
- Austin music scene and beyond

---

## 🎨 Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | CSS Variable | Usage |
|------------|----------|-----|--------------|-------|
| **Blue Light** | `#00f2fe` | `rgb(0, 242, 254)` | `--color-blue-light` | Accents, highlights, CTAs |
| **Blue Mid** | `#4facfe` | `rgb(79, 172, 254)` | `--color-blue-mid` | Primary brand color, links |
| **Purple** | `#9333ea` | `rgb(147, 51, 234)` | `--color-purple` | Headers, emphasis |
| **Magenta** | `#ff00ff` | `rgb(255, 0, 255)` | `--color-magenta` | Accents, energy |

### Accent Colors

| Color Name | Hex Code | RGB | CSS Variable | Usage |
|------------|----------|-----|--------------|-------|
| **Cyan** | `#00f2ea` | `rgb(0, 242, 234)` | `--color-cyan` | Highlights, icons |
| **Pink** | `#ff006e` | `rgb(255, 0, 110)` | `--color-pink` | CTAs, important elements |
| **Yellow** | `#ffbe0b` | `rgb(255, 190, 11)` | `--color-yellow` | Warnings, highlights |
| **Orange** | `#ff8800` | `rgb(255, 136, 0)` | `--color-orange` | Energy, warmth |

### Neutral Colors

| Color Name | Hex Code | RGB | CSS Variable | Usage |
|------------|----------|-----|--------------|-------|
| **Black** | `#000000` | `rgb(0, 0, 0)` | `--color-bg` | Background |
| **Dark Surface** | `#1a1a1a` | `rgb(26, 26, 26)` | `--color-surface` | Cards, surfaces |
| **White** | `#ffffff` | `rgb(255, 255, 255)` | `--color-text` | Primary text |
| **Gray** | `#b0b0b0` | `rgb(176, 176, 176)` | `--color-text-muted` | Secondary text |

### Color Psychology
- **Blue** → Trust, creativity, energy
- **Purple** → Luxury, ambition, mystery
- **Magenta** → Bold, innovative, futuristic
- **Cyan** → Modern, tech-forward, fresh
- **Pink** → Passion, intensity, boldness

---

## ✍️ Typography

### Font Families

#### **Nunito** — Primary Brand Font
- **Purpose:** Logo, hero headlines, display text, statistics
- **Weights:** 700 (Bold), 800 (Extra Bold), 900 (Black)
- **Character:** Rounded, friendly, energetic — matches logo personality
- **Location:** `fonts/nunito/`
- **Format:** WOFF2 (self-hosted)

```

font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;

```

#### **Outfit** — Secondary Font
- **Purpose:** Section headers, navigation, buttons, card titles
- **Weights:** 600 (Semi Bold), 700 (Bold), 800 (Extra Bold)
- **Character:** Modern, geometric, clean
- **Location:** `fonts/outfit/`
- **Format:** WOFF2 (self-hosted)

```

font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;

```

#### **DM Sans** — Body Font
- **Purpose:** Paragraphs, UI elements, forms, long-form content
- **Weights:** 400 (Regular), 500 (Medium), 700 (Bold)
- **Character:** Readable, friendly, approachable
- **Location:** `fonts/dm-sans/`
- **Format:** WOFF2 (self-hosted)

```

font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;

```

### Typography Scale

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | CSS Variable |
|---------|------|--------|----------------|---------------|--------------|
| **Hero** | Nunito | 900 | 96-128px | 48-64px | `--text-8xl` |
| **Display** | Nunito | 800 | 64-96px | 36-48px | `--text-6xl` |
| **H1** | Outfit | 700 | 48-72px | 32-40px | `--text-5xl` |
| **H2** | Outfit | 700 | 36-56px | 28-36px | `--text-4xl` |
| **H3** | Outfit | 600 | 28-40px | 24-30px | `--text-3xl` |
| **H4** | Outfit | 600 | 24-30px | 20-24px | `--text-2xl` |
| **Body Large** | DM Sans | 400 | 20px | 18px | `--text-xl` |
| **Body** | DM Sans | 400 | 16px | 16px | `--text-base` |
| **Small** | DM Sans | 400 | 14px | 14px | `--text-sm` |
| **Caption** | DM Sans | 600 | 12px | 12px | `--text-xs` |

### Typography Rules

**Line Height:**
- **Tight:** 1.2 (Headlines, display text)
- **Normal:** 1.6 (Body text, UI)
- **Relaxed:** 1.8 (Long-form content)

**Letter Spacing:**
- **Tight:** -0.025em (Large headlines only)
- **Normal:** 0.01em (Most text)
- **Wide:** 0.05em (Buttons, labels)
- **Widest:** 0.1em (Uppercase labels)

**Text Transform:**
- Uppercase for: Labels, captions, buttons, eyebrow text
- Sentence case for: Body copy, headlines (except logo)
- Avoid all caps for body text (readability)

---

## 🖼️ Logo & Visual Assets

### Logo Files

| Asset | File | Format | Usage |
|-------|------|--------|-------|
| **Primary Logo** | `JaZeR_Logo.svg` | SVG | Web, scalable |
| **Primary Logo** | `JaZeR_Logo.png` | PNG | Social media, print |
| **Animated Logo** | `JaZeR_Logo_OFFICIAL.gif` | GIF | Hero sections, splash |
| **Favicon** | `favicon.svg` | SVG | Browser tab |

**Location:** `JaZeR BrandKit_OnSite/`

### Logo Usage

#### ✅ **Do:**
- Use on dark backgrounds (primary use case)
- Maintain clear space (minimum 20px padding)
- Keep proportions locked (no stretching)
- Use SVG format for web when possible
- Apply gradient treatment for hero/display use
- Use PNG for social media profile pictures

#### ❌ **Don't:**
- Stretch, distort, or skew
- Use on light backgrounds without contrast adjustment
- Add drop shadows or outer glows
- Rotate beyond horizontal orientation
- Place on busy backgrounds without dark overlay
- Change colors (except gradient variations)

### Clear Space
Maintain a **minimum clear space of 20px** around the logo on all sides.

### Minimum Size
- **Web:** 120px width minimum
- **Print:** 1 inch (2.54cm) width minimum
- **Social Media Profile:** 400x400px minimum

### Logo Variations

**Primary (Gradient):**
```

background: linear-gradient(135deg, #00f2fe 0%, #ff006e 50%, #ffbe0b 100%);

-webkit-background-clip: text;

-webkit-text-fill-color: transparent;

```

**Solid (Fallback):**
```

color: #4facfe;

```

---

## 🌈 Gradients

### Primary Gradient
```

background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #ff00ff 100%);

```
**CSS Variable:** `--gradient-primary`  
**Usage:** Buttons, CTAs, hero sections, cards

### Text Gradient
```

background: linear-gradient(135deg, #00f2fe 0%, #ff006e 50%, #ffbe0b 100%);

-webkit-background-clip: text;

-webkit-text-fill-color: transparent;

background-clip: text;

```
**CSS Variable:** `--gradient-text-primary`  
**Usage:** Hero headlines, display text, logo treatment

### Accent Gradient
```

background: linear-gradient(135deg, #9333ea 0%, #ff00ff 100%);

```
**CSS Variable:** `--gradient-accent`  
**Usage:** Highlights, special elements, hover states

### Overlay Gradient (Dark)
```

background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);

```
**CSS Variable:** `--gradient-overlay`  
**Usage:** Image overlays for text readability

### Gradient Direction
- **Default:** 135deg (diagonal top-left to bottom-right)
- **Vertical:** 180deg (top to bottom)
- **Horizontal:** 90deg (left to right)

---

## 🎭 Iconography

### Icon Style Guidelines
- **Format:** SVG, outlined style
- **Stroke Width:** 2px
- **Corner Radius:** Rounded
- **Color:** Monochrome white by default
- **Hover:** Colored with brand color
- **Size Scale:** 16px, 24px, 32px, 48px

### Social Media Icons

**Location:** `icons/`

| Platform | Filename | Brand Color |
|----------|----------|-------------|
| Spotify | `spotify.svg` | `#1DB954` |
| Apple Music | `apple-music.svg` | `#FA243C` |
| SoundCloud | `soundcloud.svg` | `#ff8800` |
| YouTube | `youtube.svg` | `#FF0000` |
| Instagram | `instagram.svg` | `#E4405F` |
| X (Twitter) | `x.svg` | `#ffffff` |
| TikTok | `tiktok.svg` | `#00f2ea` |

### UI Icons

**Location:** `icons/`

- Email → `email.svg`
- Menu → `menu.svg`
- Close → `close.svg`
- Play → `play.svg`

### Emoji System

Custom emoji styling with category-based glows:

| Category | Emoji | Glow Color | Usage |
|----------|-------|------------|-------|
| **Music** | 🎵 🎶 🎧 | Blue | Music-related content |
| **Studio** | 🎛️ 🎚️ 💻 | Purple | Production, technical |
| **Content** | 🎥 📸 📹 | Cyan | Video, visual content |
| **Energy** | ⚡ 🔥 ✨ | Orange | Hype, excitement |
| **Business** | 💼 📈 💰 | Green | Growth, success |
| **Social** | 💬 🎉 👋 | Magenta | Community, interaction |

---

## 📐 Spacing & Layout

### Spacing Scale (8px Base Unit)

| CSS Variable | Value | Usage |
|--------------|-------|-------|
| `--space-1` | 4px | Tight spacing, borders |
| `--space-2` | 8px | Small gaps, padding |
| `--space-3` | 12px | Compact layouts |
| `--space-4` | 16px | Default spacing |
| `--space-6` | 24px | Medium gaps |
| `--space-8` | 32px | Large spacing |
| `--space-12` | 48px | Section spacing |
| `--space-16` | 64px | Major sections |
| `--space-24` | 96px | Hero spacing |

### Container Widths

| Breakpoint | Max Width | CSS Variable |
|------------|-----------|--------------|
| Mobile | 100% | `--container-full` |
| Tablet | 768px | `--container-3xl` |
| Desktop | 1280px | `--container-7xl` |
| Wide | 1536px | `--breakpoint-2xl` |

### Grid System
- **Columns:** 12-column grid
- **Gutter:** 24px (desktop), 16px (mobile)
- **Margin:** 32px (desktop), 16px (mobile)

### Border Radius

| Size | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| **Small** | 4px | `--radius-base` | Buttons, inputs |
| **Medium** | 8px | `--radius-lg` | Cards, images |
| **Large** | 16px | `--radius-2xl` | Modals, panels |
| **XL** | 24px | `--radius-3xl` | Hero sections |
| **Full** | 9999px | `--radius-full` | Pills, avatars |

---

## 💬 Voice & Tone

### Brand Voice Attributes
- **Authentic** — Real talk, no fake personas
- **Confident** — Own the space, speak with authority
- **Energetic** — High energy but not exhausting
- **Direct** — Get to the point, no fluff
- **Relatable** — Speak to the audience as equals

### Writing Guidelines

**Do:**
- Use active voice
- Keep sentences short and punchy
- Use contractions naturally (I'm, you're, let's)
- Break grammar rules for effect
- Lead with benefits, not features
- Show, don't tell

**Don't:**
- Use corporate jargon or buzzwords
- Write long, complex sentences
- Be overly formal or stiff
- Apologize unnecessarily
- Use passive voice
- Over-explain

### Content Themes
- Self-belief & perseverance
- Authenticity & purpose
- Creative process & hustle
- Growth & transformation
- Community & connection

### Example Phrases

✅ **Good:**
- "New track dropping Friday"
- "Raw bars, real talk"
- "Let's connect"
- "Made this beat at 3AM"
- "Austin hip-hop"

❌ **Bad:**
- "We are pleased to announce..."
- "Leverage synergies..."
- "Kindly be informed..."
- "Per our previous communication..."
- "Think outside the box"

---

## 📱 Social Media

### Brand Handles
**Consistent across all platforms:**  
`@jaaborhood`

### Active Platforms

| Platform | URL | Profile Type |
|----------|-----|--------------|
| **Spotify** | [Artist Profile](https://open.spotify.com/artist/YOUR_ID) | Music Streaming |
| **YouTube** | [@jaaborhood](https://youtube.com/@jaaborhood) | Video Content |
| **Instagram** | [@jaaborhood](https://instagram.com/jaaborhood) | Visual Content |
| **X (Twitter)** | [@jaaborhood](https://x.com/jaaborhood) | Updates, Engagement |
| **TikTok** | [@jaaborhood](https://tiktok.com/@jaaborhood) | Short-Form Video |
| **Apple Music** | [Artist Profile](https://music.apple.com/artist/YOUR_ID) | Music Streaming |
| **SoundCloud** | [Profile](https://soundcloud.com/jaaborhood) | Music Hosting |

### Contact Information
- **Email:** [contact@jazer-music.com](mailto:contact@jazer-music.com)
- **Website:** [[jazer-music.com](http://jazer-music.com)](https://jazer-music.com)

### Social Media Guidelines

**Content Strategy:**
- Post 3-5 times per week
- Mix content types (music, behind-the-scenes, lifestyle)
- Use brand colors in graphics
- Include logo/watermark on visual content
- Engage with comments and DMs within 24 hours

**Image Specs:**
- **Instagram Post:** 1080x1080px
- **Instagram Story:** 1080x1920px
- **Twitter/X Header:** 1500x500px
- **YouTube Thumbnail:** 1280x720px
- **TikTok Video:** 1080x1920px (9:16)

**Hashtag Strategy:**
- Brand: #JaZeR #JaZeRMusic
- Genre: #HipHop #AustinHipHop #UndergroundHipHop
- Descriptive: #NewMusic #MusicProducer #IndependentArtist

---

## 🎯 Usage Examples

### Hero Section
```

<section class="hero">

<h1 class="jazer-hero gradient-text">JaZeR</h1>

<p class="jazer-lead">Austin Hip-Hop. Raw Lyrics. Real Talk.</p>

<a href="#" class="btn btn-primary">Listen on Spotify</a>

</section>

```

### Card Component
```

<div class="card">

<h3 class="jazer-h3">Latest Release</h3>

<p class="jazer-body">Stream my newest track now on all platforms.</p>

<a href="#" class="jazer-button-text">Listen Now →</a>

</div>

```

### Color Usage
```

/ *Primary CTA* /

.btn-primary {

background: var(--gradient-primary);

color: var(--color-text);

}

/ *Text with gradient* /

.hero-title {

background: var(--gradient-text-primary);

-webkit-background-clip: text;

-webkit-text-fill-color: transparent;

}

```

---

## 📦 File Structure Reference

```

[jazer-music.com/](http://jazer-music.com/)

├── JaZeR BrandKit_OnSite/

│   ├── [brand-kit.md](http://brand-kit.md)               ← This file

│   ├── JaZeR_Logo.svg

│   ├── JaZeR_Logo_OFFICIAL.gif

│   ├── favicon.svg

│   └── [brand images]

├── fonts/

│   ├── nunito/

│   ├── outfit/

│   └── dm-sans/

├── icons/

│   ├── JaZeR-logo.svg

│   ├── spotify.svg

│   ├── instagram.svg

│   └── [other icons]

├── css/

│   ├── variables.css             ← All design tokens

│   ├── fonts.css                 ← Font declarations

│   └── style.css                 ← Main styles

└── js/

└── script.js                  ← Site interactions

```

---

## 📝 Version History

**v1.0** — November 27, 2025
- Initial brand kit creation
- Color palette finalized
- Typography system established
- Logo guidelines defined
- Social media standards set

---

## 📞 Questions?

For brand usage questions or collaboration inquiries:  
**Email:** [contact@jazer-music.com](mailto:contact@jazer-music.com)

---

**© 2025 JaZeR. All rights reserved.**
```