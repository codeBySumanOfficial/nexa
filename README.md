# Nexa

Nexa is a lightweight JavaScript framework for building single-page applications. It provides a modular core with optional modules for routing, state management, rendering, and data fetching—use only what you need.

---

## Why Nexa?

- **Minimal core** – Tree-shakable modules let you include only what your app requires.  
- **No magic** – Explicit APIs with clear data flow and minimal abstraction.  
- **Small footprint** – Focus on essential features without unnecessary bloat.  
- **Developer friendly** – Simple patterns that work with standard JavaScript.

---

## Quick Example

```javascript
import { createNexaState } from './js/nexa/state/index.js'
import { createNexaRenderer, createNexaDomTags } from './js/nexa/renderer/index.js'

// Create a counter state
const [count, setCount, subscribe] = createNexaState(0)

// Set up the renderer
const renderer = createNexaRenderer()
renderer.setView(document.getElementById('app'))

const { div, button, text } = createNexaDomTags()

// Define the view as a function of state
function App() {
  return div({ class: 'counter' }, [
    button({ onclick: () => setCount(count() - 1) }, [text('-')]),
    text(` Count: ${count()} `),
    button({ onclick: () => setCount(count() + 1) }, [text('+')])
  ])
}

// Initial render
renderer.renderND(App())

// Re-render when state changes
subscribe(() => {
  renderer.renderND(App())
})
```

---

## Installation

Clone the repository and install the CLI globally:

```bash
git clone https://github.com/your-org/nexa.git
cd nexa
npm install -g .
```

---

## Usage

Create a new Nexa project with:

```bash
nexa init my-app
```

This scaffolds a basic project structure inside `my-app/`.

---

## Templates

Nexa includes project templates. To use a specific template folder, run:

```bash
nexa init my-app --use-template <template-folder-name>
```

If no template is specified, the first folder inside `templates/` is used automatically.

---

## Project Structure

A scaffolded Nexa project looks like this:

```
my-app/
├── index.html
├── css/
│   ├── globals.css
│   └── pages/
├── js/
│   ├── nexa/          # framework core
│   └── index.js
└── assets/
```

The framework core is placed inside `js/nexa/` and can be customized as needed.

---

## Documentation

Detailed documentation for each module is available below:

- [Router Reference](./docs/nexa-router.md)
- [State Reference](./docs/nexa-state.md)
- [Renderer Reference](./docs/nexa-renderer.md)
- [Fetcher Reference](./docs/nexa-fetcher.md)
- [Static Helpers Reference](./docs/nexa-static-helpers.md)

---

## License

MIT