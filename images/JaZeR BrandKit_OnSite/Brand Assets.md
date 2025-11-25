# Create a Markdown brand kit file for "JaZeR"
import os, textwrap, json

path = "/mnt/data/JaZeR_Brand_Kit.md"

# Define palette
colors = [
    ("Electric Purple", "#8B5CF6"),
    ("Cosmic Blue", "#3B82F6"),
    ("Neon Pink", "#EC4899"),
    ("Sunburst Gold", "#F59E0B"),
    ("Aether Teal", "#06B6D4"),
    ("Ultraviolet", "#A78BFA"),
    ("Night Black", "#0B0E12"),
    ("Stardust White", "#F8F9FF"),
    ("Graphite", "#1F2937"),
    ("Soft Slate", "#94A3B8"),
]

def hex_to_rgb(hexcode):
    hexcode = hexcode.lstrip("#")
    return tuple(int(hexcode[i:i+2], 16) for i in (0,2,4))

def rgb_to_cmyk(r, g, b):
    if (r, g, b) == (0, 0, 0):
        return (0, 0, 0, 100)
    c = 1 - r/255.0
    m = 1 - g/255.0
    y = 1 - b/255.0
    k = min(c, m, y)
    c = (c - k) / (1 - k) * 100
    m = (m - k) / (1 - k) * 100
    y = (y - k) / (1 - k) * 100
    k = k * 100
    return (round(c), round(m), round(y), round(k))

# Build palette table rows
palette_rows = []
for name, hexcode in colors:
    r,g,b = hex_to_rgb(hexcode)
    cmyk = rgb_to_cmyk(r,g,b)
    palette_rows.append(f"| {name} | {hexcode} | {r}, {g}, {b} | {cmyk[0]}%, {cmyk[1]}%, {cmyk[2]}%, {cmyk[3]}% |")

css_vars = "\n".join([f"  --jazer-{name.lower().replace(' ','-')}:{hexcode};" for name,hexcode in colors])

md = f"""# JaZeR Brand Kit

This Markdown file is the single source of truth for JaZeR brand visuals. Save it as `Brand-Guidelines.md` in your Brand-Kit folder.

## Purpose

Maintain consistent visual identity across music releases, thumbnails, social profiles, videos, and merch.

## What to Store Here

### Logo Files
- Primary logo in full color, multiple formats.
- Secondary or alternate lockups.
- Horizontal, vertical, and icon-only versions.
- Light and dark versions.
- Transparent PNGs.
- Vectors in SVG, AI, and EPS.

### Brand Guidelines
- This brand kit `.md` file.
- A PDF export of it when needed.
- Color palette specifications with HEX, RGB, and CMYK.
- Typography guidelines.
- Logo usage rules with spacing and minimum sizes.
- Do and do not items.

### Templates
- Thumbnail templates.
- Social media templates.
- Presentation title slide and lower third.
- Email signature.

### Brand Assets
- Patterns, textures, and starburst flares.
- Icon set.
- Hero imagery and photography examples that match your motifs.

## File Naming Convention

- `Logo_Primary_Full-Color.png`
- `Logo_Secondary_White.svg`
- `Logo_Icon-Only_Black.png`
- `Brand-Guidelines_2025.pdf`
- `Color-Palette_Specifications.md`

## Color Palette

Primary emphasis is purples, blues, pinks, and golds. Values below include HEX, RGB, and CMYK approximations.

| Name | HEX | RGB | CMYK |
|---|---|---|---|
{chr(10).join(palette_rows)}

### Palette usage
- Primaries. Electric Purple and Cosmic Blue are the anchors.
- Secondaries. Neon Pink and Sunburst Gold are accent bursts. Use for highlights, CTA text, glows, and small elements.
- Support. Aether Teal and Ultraviolet extend the spectrum on darker backgrounds.
- Neutrals. Night Black is the default background. Stardust White is the default light text. Graphite and Soft Slate are for UI, borders, or captions.

### CSS variables
```css
:root {
{css_vars}
}


"""