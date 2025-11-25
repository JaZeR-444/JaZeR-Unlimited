# JaZeR Custom Neon Icons

Custom SVG icon set integrated with your brand colors.

## 📁 Icon Categories

### Social Media (`social/`)
- `spotify.svg` - Spotify streaming
- `soundcloud.svg` - SoundCloud
- `youtube.svg` - YouTube channel
- `instagram.svg` - Instagram profile
- `twitter-x.svg` - Twitter/X account

### Music Controls (`controls/`)
- `play.svg` - Play button
- `pause.svg` - Pause button
- `skip-forward.svg` - Skip track
- `download.svg` - Download icon

### Navigation (`navigation/`)
- `menu.svg` - Mobile menu
- `home.svg` - Home page
- `music-beats.svg` - Music section
- `contact.svg` - Contact/email

### Production (`production/`)
- `headphones.svg` - Audio/listening
- `microphone.svg` - Recording/vocals
- `waveform.svg` - Audio waveform
- `studio-mixer.svg` - Studio/production

## 🎨 Color Classes

Match your brand palette:
- `icon-purple` - Electric Purple (#8B5CF6)
- `icon-blue` - Cosmic Blue (#3B82F6)
- `icon-pink` - Neon Pink (#EC4899)
- `icon-cyan` - Bright Cyan (#06B6D4)
- `icon-green` - Electric Green (#10B981)
- `icon-orange` - Neon Orange (#F59E0B)

## 📏 Size Classes

- `icon-xs` - 20px
- `icon-sm` - 28px
- `icon-md` - 40px (default)
- `icon-lg` - 56px
- `icon-xl` - 80px

## 💫 Usage Examples

### Basic Icon
```html
<img src="images/icons/social/spotify.svg" class="neon-icon icon-md icon-purple" alt="Spotify">
```

### Icon Button (with hover effect)
```html
<a href="https://spotify.com" class="icon-button icon-purple">
  <img src="images/icons/social/spotify.svg" class="neon-icon icon-md icon-purple" alt="Spotify">
</a>
```

### Icon Group (navigation/social bar)
```html
<div class="icon-group">
  <a href="#" class="icon-button icon-purple">
    <img src="images/icons/social/spotify.svg" class="neon-icon icon-md icon-purple" alt="Spotify">
  </a>
  <a href="#" class="icon-button icon-orange">
    <img src="images/icons/social/soundcloud.svg" class="neon-icon icon-md icon-orange" alt="SoundCloud">
  </a>
</div>
```

### Pulsing Icon (for attention)
```html
<img src="images/icons/controls/play.svg" class="neon-icon icon-lg icon-purple icon-pulse" alt="Play">
```

## ✨ Effects

- **Hover**: Icons lift and glow intensifies
- **Pulse**: Add `icon-pulse` class for breathing glow animation
- **Button**: `icon-button` adds border, background, and enhanced hover
- **Group**: `icon-group` creates flexbox layout with proper spacing

## 🎯 Brand Integration

All icons use `currentColor` so they inherit the color from their parent or color class. The neon glow effect automatically matches the icon color using CSS filters.

Colors are pulled from your CSS variables:
- `--icon-purple` matches `--primary-color`
- `--icon-blue` matches `--secondary-color`
- `--icon-pink` matches `--accent-color`

## 📱 Responsive

Icons automatically scale down on mobile devices (max-width: 800px) for better touch targets and visual balance.

---

**Integrated across all pages**: index.html, music.html, videos.html, about.html, shop.html, contact.html
