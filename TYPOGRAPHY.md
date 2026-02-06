# Typography System

## Font Pairing: Libre Baskerville + Montserrat

This site uses a classic serif-sans pairing that creates visual hierarchy and
reading comfort:

- **Libre Baskerville** (Serif): Traditional, readable, elegant
- **Montserrat** (Sans-serif): Modern, clean, geometric

## Typography Proposal

### Montserrat (Sans-serif) Usage

Used for **interface elements** and **navigation**:

- Navigation bar and menu items
- Buttons and interactive elements
- Card metadata (dates, tags, badges)
- Page descriptions and subtitles
- Body text in UI components

**Why**: Sans-serif fonts are easier to scan at small sizes and work better for
UI elements

### Libre Baskerville (Serif) Usage

Used for **content** and **headings**:

- All headings (h1-h6) throughout the site
- Hero section name/title
- Blog post titles
- Article body text
- Blockquotes and pull quotes
- Long-form reading content

**Why**: Serif fonts provide better readability for long-form content and add
sophistication to headings

## Implementation Strategy

### 1. Global Settings

- Body default: Montserrat (interface-first)
- Override for content: Libre Baskerville (reading comfort)

### 2. Component-Level

- **NavBar**: Montserrat (UI element)
- **Hero**: Mixed (name in Libre Baskerville, labels in Montserrat)
- **PostCard**: Mixed (title in Libre Baskerville, metadata in Montserrat)
- **Article**: Libre Baskerville for all content

### 3. Responsive Considerations

- Weights: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
- Libre Baskerville is slightly heavier visually, so we use regular weight (400)
  for body
- Montserrat uses medium (500) for emphasis, bold (700) for strong hierarchy

## Visual Hierarchy Examples

```
Hero Section:
  Patrick Ineichen (Libre Baskerville, 4xl, bold) ← elegant, personal
  Professional Software Engineer (Montserrat, 2xl) ← clean, readable

Blog Listing:
  Building with Astro... (Libre Baskerville, 2xl, semibold) ← literary feel
  February 10, 2024 (Montserrat, sm) ← UI metadata
  [tutorial] [astro] (Montserrat, xs, badge) ← system labels

Blog Post:
  Heading (Libre Baskerville, bold) ← traditional authority
  Body text (Libre Baskerville, regular) ← reading comfort
  Code blocks (monospace) ← technical content
```

## Performance Notes

- Both fonts loaded via Google Fonts with `display=swap`
- Preconnect to fonts.googleapis.com for faster loading
- Only loading needed weights: 300, 400, 500, 600, 700
- Italic variant only for Libre Baskerville (for emphasis in articles)
