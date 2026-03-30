# Daar (دار) — Salla Theme

A custom Salla e-commerce theme for **Daar Store** — a home goods store built on the [Salla](https://salla.com) platform using the Twilight theme engine.

## Brand Identity

| Color | HEX | Usage |
|-------|-----|-------|
| Olive Green | `#404928` | Primary — buttons, CTAs, accents |
| Brown/Maroon | `#562726` | Secondary — sale prices, highlights |
| Near Black | `#171310` | Text, dark backgrounds |
| Cream/Beige | `#D3D2CF` | Backgrounds, borders, surfaces |

Design direction: **Simple Geometric** — earthy tones with Islamic geometric patterns.

## Tech Stack

- **Twilight Engine** (Twig templates)
- **Tailwind CSS 3** + **SCSS**
- **Webpack 5** for bundling
- **Salla Web Components** (`<salla-*>`)
- **Bilingual** Arabic/English with RTL support

## Project Structure

```
daar-store/
├── twilight.json              # Theme config (features, components, settings)
├── package.json
├── webpack.config.js
├── tailwind.config.js
├── src/
│   ├── assets/
│   │   ├── js/                # app.js, home.js, product.js, checkout.js
│   │   ├── styles/            # app.scss (brand tokens + component styles)
│   │   └── images/
│   ├── locales/
│   │   ├── ar.json            # Arabic translations
│   │   └── en.json            # English translations
│   └── views/
│       ├── layouts/master.twig
│       ├── pages/             # index, cart, product, blog, customer...
│       └── components/        # header, footer, home, product
└── public/                    # Built output (gitignored)
```

## Setup

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io)
- [Salla CLI](https://github.com/SallaApp/Salla-CLI)
- [Salla Partners](https://salla.partners) account

### Installation

```bash
# Install Salla CLI
pnpm install -g @salla.sa/cli

# Login to Salla
salla login

# Install dependencies
pnpm install

# Preview with hot reload
salla theme preview
```

### Development

```bash
pnpm run development    # Build for development
pnpm run watch          # Build + watch for changes
pnpm run production     # Build for production (minified)
```

### Publishing

```bash
salla theme publish
```

## License

Private — All rights reserved.
