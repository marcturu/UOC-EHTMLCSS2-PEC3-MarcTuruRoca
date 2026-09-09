# <img src="src/assets/images/ACMateria.png" alt="Asociación Cultural Materia" width="200"/> — Artisan Workshops v2 (Jornadas Artesanales)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Parcel](https://img.shields.io/badge/Parcel-E7A93D?style=for-the-badge&logo=parcel&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

<sub>🗓️ Developed in June 2026</sub>

This project is a website for **artisan workshops** organized by the **Asociación Cultural Materia**, in collaboration with the Barcelona City Council.

Developed using version 3.x of [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) as the starter template: a modern frontend development base that includes Parcel, a Sass compiler, an ES6 transpiler, minifiers, an image transformer, and development tools. Created by Jordi Tarrida (jorditarrida@uoc.edu).

---

## ✅ Pages

- **Home**: welcome poster with essential information about the workshops.
- **Speakers**: cards featuring the speakers taking part in the workshops.
- **Blog**: article with varied information about the workshops and their context.
- **Extra**: example page inspired by a previous mockup and developed using *AI*.

---

## ⚡ Features

The project incorporates modern **Utility-first & Atomic CSS** functionality and advanced layout techniques to improve scalability, performance, and design adaptability.

#### Tailwind CSS: customization and abstraction
- `@apply` → extracts and reuses Tailwind utilities inside custom CSS classes, reducing repetition and improving maintainability.
- `@theme` → defines design tokens (colors, typography, spacing, etc.) to extend or centralize Tailwind's design system.

#### Modern CSS conditionals and queries
- `@container` → styles based on the container's size rather than the viewport.
- `:is(), :where()` → refined selectors and advanced conditional logic in CSS.

#### Modern viewport units
- `cqw, cqh, ...` → units relative to container size (Container Query Units).

#### Modern layout
- `CSS Flex` → flexible one-dimensional layout system.
- `CSS Grid` → two-dimensional layout system for complex structures.

---

## 🛠 Installation & Setup

### a0. Prerequisites
Make sure you have installed:
- **[Node.js](http://nodejs.org/) 20.x** or higher

Check the version:
```bash
node -v
```

### a1. Clone the repository
```bash
git clone https://github.com/marcturu/ac-materia-v2
cd ac-materia-v2
```

### a2. Install dependencies
```bash
npm install
```

### a3. Run locally
```bash
npm run dev
```
The app will be available at **http://localhost:8123**, with live reload enabled.

### b1. Try the website
You can try the deployed version directly in the browser:

- **Netlify (browser testing):**
  WebApp: [https://ac-materia-v2.netlify.app/](https://ac-materia-v2.netlify.app/)

> ℹ️ **Deployment details:**
> The project is deployed on [Netlify](https://netlify.com) from the `main` branch.
> - **Build command:** `npm run build`
> - **Publish directory:** `dist`

### c1. Watch the Demo
🎥 **A [Recorded Demo](https://www.dropbox.com/scl/fi/velmi0p0wa07lldp886og/AC-Materia-v2-Demo.mkv?rlkey=g9biun1w67cp3vp9v706tt4b2&st=inxonzgp&dl=0) is also available**.

---

## 🧩 Methodology

- **ITCSS**: style architecture (settings, tools, generic, elements, objects, components, utilities)
- **OOCSS**: reusable object classes (`o-container`, `o-section`)
- **BEM**: CSS class naming convention (only used when extracting classes with `@apply`)

---

## 🧰 Built With

### Core

| Technology | Purpose |
| --- | --- |
| [Parcel v2](https://parceljs.org) | Bundler — development server, production build, asset pipeline |
| [Sass/SCSS](https://sass-lang.com) | CSS preprocessor — variables, nesting, functions, mixins, partials (`@parcel/transformer-sass`) |
| [PostCSS](https://postcss.org/) | CSS transpilation — vendor prefixes and compatibility with older browsers (`@parcel/transformer-postcss`, `postcss-preset-env`) |
| [PostHTML](https://github.com/posthtml/posthtml) | HTML partials via `posthtml-include` (`@parcel/transformer-posthtml`) |

### Optimization (production build)

| Technology | Purpose |
| --- | --- |
| [`lightningcss`](https://github.com/parcel-bundler/lightningcss) | CSS minification and optimization (`@parcel/optimizer-css`) |
| [`htmlnano`](https://github.com/posthtml/htmlnano) | HTML minification (`@parcel/optimizer-htmlnano`) |
| [SWC](https://swc.rs/) | JavaScript minification (`@parcel/optimizer-swc`) |
| [Babel](https://babeljs.io/) | JavaScript transpilation for older browsers (`@parcel/transformer-babel`) |
| [`sharp`](https://sharp.pixelplumbing.com/) | Image transformation and WebP conversion (`@parcel/transformer-image`) |

### Dependencies

| Dependency | Purpose |
| --- | --- |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework `"tailwindcss": "^4.3.0"` |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations `"aos": "^2.3.4"` |
| [Font Awesome](https://fontawesome.com/) | Icons `"@fortawesome/fontawesome-free": "^7.2.0"` |

---

## 📜 Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server at http://localhost:8123 with live reload |
| `npm run build` | Compiles and optimizes the files for production into `dist/` |
| `npm run clean` | Removes the `dist/` folder and caches |

---

## 📂 Project Structure

```
src/
├── index.html
├── blog.html
├── speakers.html
├── extra.html
├── views/
│   ├── partials/               # PostHTML partials
│   │   ├── extra/
│   │   ├── header.html
│   │   └── footer.html
│   ├── home/
│   │   └── home.html
│   ├── speakers/
│   │   └── cards.html
│   ├── blog/
│   │   ├── hero.html
│   │   ├── intro.html
│   │   ├── list.html
│   │   └── final.html
├── assets/
│   ├── fonts/                  # Self-hosted fonts (League Gothic, DM Sans)
│   ├── images/                 # Optimized images in WebP
│   ├── scripts/
│   │   ├── main.js
│   │   └── modules/            # JS modules (aos, header)
│   └── styles/
│       ├── main.scss
│       ├── extra.scss
│       ├── _dependencies.scss
│       ├── settings/           # Variables, fonts, Tailwind overrides (@theme)
│       ├── tools/              # Functions
│       ├── generic/            # Reset
│       ├── elements/           # Base styles
│       ├── objects/            # OOCSS objects
│       ├── components/
│       │   ├── blog/
│       │   ├── ui/             # Class extraction (@apply)
│       └── utilities/          # Utility classes
```

---

## 📷 Screenshots
