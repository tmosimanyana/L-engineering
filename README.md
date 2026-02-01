# Lush Engineering Website

Static website (HTML/CSS/JS) for Lush Engineering — Francistown, Botswana.

## Folder structure

```
L-engineering/
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── logo.svg
        ├── favicon.png
        ├── og-image.jpg
        ├── hero.jpg
        ├── services-hero.jpg
        ├── page1_img1.jpeg ...
        └── projects/ (optional)
```

## Important (images)
All images must be inside **`assets/img/`**.

### Required brand files
- `assets/img/logo.svg`
- `assets/img/favicon.png`
- `assets/img/og-image.jpg`

### Hero images
- Homepage: `assets/img/hero.jpg`
- Services page: `assets/img/services-hero.jpg`

## Run locally

From the project folder:

```bash
python -m http.server 5000
```

Then open `http://localhost:5000`

## Deploy (GitHub Pages)

1. Push to GitHub
2. Repository → **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / folder: **/(root)**

Your site will be available at:
`https://tmosimanyana.github.io/L-engineering/`
