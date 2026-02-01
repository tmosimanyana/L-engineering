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
└── assets/
    ├── css/
    │   └── styles.css
    ├── img/
    │   ├── logo.png
    │   ├── favicon.png
    │   ├── og-image.jpg
    │   ├── hero.jpg
    │   └── services-hero.jpg
    ├── images/
    │   └── (project photos used on projects.html)
    └── js/
        └── main.js
```

## Run locally
```bash
python -m http.server 5000
```
Open: http://localhost:5000

## Notes
- No inline CSS is used; all styles are in `assets/css/styles.css`.
- Hero images must be placed in `assets/img/` with the filenames above.
- The Projects gallery images referenced in `projects.html` use `assets/images/` (update paths if your folder differs).
