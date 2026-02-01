# Lush Engineering Website

## Overview
A static website for Lush Engineering, an electrical and construction engineering company based in Francistown, Botswana.

## Project Structure
```
project/
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── QUICK-START.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── img/
    │   ├── logo.png
    │   ├── favicon.png
    │   ├── og-image.jpg
    │   ├── hero.jpg
    │   ├── services-hero.jpg
    │   └── project images...
    └── js/
        └── main.js
```

## Running the Website (Local)
From the project folder, run:

```bash
python -m http.server 5000
```

Then open:
http://localhost:5000

## Features
- Pure HTML, CSS, and JavaScript (no backend)
- Fully responsive design
- WhatsApp click-to-chat integration
- Project gallery with filters and lightbox
- SEO-optimized meta tags
- Social media preview support

## Deployment

### GitHub Pages
1. Go to Repository Settings
2. Open Pages
3. Source: Deploy from branch
4. Branch: main
5. Folder: /(root)

### Netlify
- Build command: none
- Publish directory: /

## Notes
- Keep only one JavaScript file at `assets/js/main.js`
- All images must be inside `assets/img/`
- Use relative paths for all assets
