# <img src="src/assets/images/ACMateria.png" alt="Asociación Cultural Materia" width="200"/> - Jornadas Artesanales v2

Sitio web de **jornadas artesanales** impulsado por la **Asociación Cultural Materia** en colaboración con el ayuntamiento de Barcelona.

Desarrollado como parte de la asignatura Herramientas HTML y CSS II del Máster Universitario de Desarrollo de Sitios y Aplicaciones Web de la [Universitat Oberta de Catalunya](https://www.uoc.edu), utilizando la versión 3.x de [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) como plantilla de inicio - una base moderna de desarrollo frontend que incluye Parcel, un compilador de Sass, un transpilador ES6, minificadores, un transformador de imágenes y herramientas de desarrollo.
Creado por Jordi Tarrida (jorditarrida@uoc.edu).

### Páginas

- **Portada** - Póster de bienvenida con información esencial sobre las jornadas.
- **Ponentes** - Tarjetas con los ponentes que participaran en las jornadas.
- **Blog** - Artículo con información variada sobre las jornadas y lo que las envuelve.
- **Extra** - Página de ejemplo inspirada en mockup previo.

### Metodología

- **ITCSS** — arquitectura de estilos (settings, tools, generic, elements, objects, components, utilities)
- **OOCSS** — clases de objetos reutilizables (`o-container`, `o-section`)
- **BEM** — convención de nomenclatura para clases CSS (solamente utilizada en extracción de clases con `@apply`)

## Desarrollado con

### Requisitos

[Node.js](http://nodejs.org/) >= 20.x

### Núcleo

| Tecnología | Uso |
| --- | --- |
| [Parcel v2](https://parceljs.org) | Empaquetador - servidor de desarrollo, build de producción, pipeline de assets |
| [Sass/SCSS](https://sass-lang.com) | Preprocesador CSS - variables, anidado, funciones, mixins, parciales (`@parcel/transformer-sass`) |
| [PostCSS](https://postcss.org/) | Transpilación CSS - prefijos de proveedor y compatibilidad con navegadores antiguos (`@parcel/transformer-postcss`, `postcss-preset-env`) |
| [PostHTML](https://github.com/posthtml/posthtml) | Parciales HTML mediante `posthtml-include` (`@parcel/transformer-posthtml`) |

### Optimización (build de producción)

| Tecnología | Uso |
| --- | --- |
| [`lightningcss`](https://github.com/parcel-bundler/lightningcss) | Minificación y optimización de CSS (`@parcel/optimizer-css`) |
| [`htmlnano`](https://github.com/posthtml/htmlnano) | Minificación de HTML (`@parcel/optimizer-htmlnano`) |
| [SWC](https://swc.rs/) | Minificación de JavaScript (`@parcel/optimizer-swc`) |
| [Babel](https://babeljs.io/) | Transpilación de JavaScript para navegadores antiguos (`@parcel/transformer-babel`) |
| [`sharp`](https://sharp.pixelplumbing.com/) | Transformación de imágenes y conversión a WebP (`@parcel/transformer-image`) |

### Dependencias

| Dependencia | Uso |
| --- | --- |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utility-first `"tailwindcss": "^4.3.0"` |
| [AOS](https://michalsnik.github.io/aos/) | Animaciones al hacer scroll `"aos": "^2.3.4"` |
| [Font Awesome](https://fontawesome.com/) | Iconos `"@fortawesome/fontawesome-free": "^7.2.0"` |

### Carcaterísticas
El proyecto incorpora funcionalidades modernas de **CSS utility-first** y técnicas avanzadas de maquetación para mejorar la escalabilidad, el rendimiento y la adaptabilidad del diseño.

#### Tailwind CSS: personalización y abstracción
- `@apply` → permite extraer y reutilizar utilidades de Tailwind dentro de clases CSS personalizadas, reduciendo repetición y mejorando la mantenibilidad.
- `@theme` → define tokens de diseño (colores, tipografías, espaciados, etc.) para extender o centralizar el sistema de diseño de Tailwind.
#### Condicionales y consultas CSS modernas
- `@container` → estilos basados en el tamaño del contenedor, no del viewport.
- `:is(), :where()` → refinamiento de selectores y lógica condicional avanzada en CSS.
#### Unidades de viewport modernas
- `cqw, cqh,...` → unidades relativas al tamaño del contenedor (Container Query Units).
#### Layout moderno
- `CSS Flex` → sistema de disposición unidimensional flexible.
- `CSS Grid` → sistema de layout bidimensional para estructuras complejas.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en http://localhost:8123 con recarga en vivo |
| `npm run build` | Compila y optimiza los archivos para producción en `dist/` |
| `npm run clean` | Elimina la carpeta `dist/` y las cachés |

## Estructura del proyecto

```
src/
├── index.html
├── blog.html
├── speakers.html
├── extra.html
├── views/ 
│   ├── partials/               # Parciales PostHTML
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
│   ├── fonts/                  # Fuentes autoalojadas (League Gothic, DM Sans)
│   ├── images/                 # Imágenes optimizadas en WebP
│   ├── scripts/
│   │   ├── main.js
│   │   └── modules/            # Módulos JS (aos, header)
│   └── styles/
│       ├── main.scss
│       ├── extra.scss
│       ├── _dependencies.scss
│       ├── settings/           # Variables, fuentes, tailwind overrides (@theme)
│       ├── tools/              # Funciones
│       ├── generic/            # Reset
│       ├── elements/           # Estilos base
│       ├── objects/            # Objetos OOCSS
│       ├── components/ 
│       │   ├── blog/           
│       │   ├── ui/             # Extracción de clases (@apply)     
│       └── utilities/          # Clases de utilidad
```

## Despliegue

El proyecto está desplegado en [Netlify](https://netlify.com) desde la rama `main`:
https://uoc-ehtmlcss2-pec3-marctururoca.netlify.app/

- **Comando de build:** `npm run build`
- **Directorio de publicación:** `dist`

---

Marc Turu Roca (https://github.com/marcturu/UOC-EHTMLCSS2-PEC3-MarcTuruRoca)  
*UOC - PEC3 · Herramientas HTML y CSS II · 2025-2026*
