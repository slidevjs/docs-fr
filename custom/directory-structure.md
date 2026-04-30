# Structure des répertoires

Slidev utilise des conventions de structure de répertoires pour minimiser la surface de configuration et rendre les extensions de fonctionnalités flexibles et intuitives.

La structure de répertoires conventionnelle est :

```bash
your-slidev/
  ├── components/       # composants personnalisés
  ├── layouts/          # mises en page personnalisées
  ├── public/           # ressources statiques
  ├── setup/            # configuration / hooks personnalisés
  ├── snippets/         # extraits de code
  ├── styles/           # styles personnalisés
  ├── index.html        # injections dans index.html
  ├── slides.md         # entrée principale des diapositives
  └── vite.config.ts    # extension de la configuration vite
```

Tous sont optionnels.

## Composants

Pattern : `./components/*.{vue,js,ts,jsx,tsx,md}`

<LinkCard link="guide/component" />

## Mises en page

Pattern : `./layouts/*.{vue,js,ts,jsx,tsx}`

<LinkCard link="guide/layout" />

## Public

Pattern : `./public/*`

Les ressources dans ce répertoire seront servies au chemin racine `/` pendant le développement, et copiées à la racine du répertoire dist telles quelles. En savoir plus sur la [Gestion des ressources](../guide/faq#assets-handling).

## Style

Pattern : `./style.css` | `./styles/index.{css,js,ts}`

Les fichiers suivant cette convention seront injectés à la racine de l'App. Si vous devez importer plusieurs entrées CSS, vous pouvez créer la structure suivante et gérer l'ordre d'importation vous-même.

:::warning
Le CSS global ici s'applique également à l'interface du présentateur. Privilégiez le scoping des styles aux diapositives individuelles, ou enveloppez vos sélecteurs sous `.slidev-layout` pour éviter que les styles ne fuitent dans le mode présentateur.

**Exemple :** Utilisez `.slidev-layout .grid { ... }` au lieu de simplement `.grid { ... }`.
:::

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

Les styles seront traités par [UnoCSS](https://unocss.dev/) et [PostCSS](https://postcss.org/), vous pouvez donc utiliser l'imbrication CSS et les [at-directives](https://unocss.dev/transformers/directives#apply) et le Nested CSS nativement. Par exemple :

<!-- eslint-skip -->

```css
.slidev-layout {
  --uno: px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    --uno: select-none;
  }

  pre, code {
    --uno: select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

En savoir plus sur la syntaxe [ici](https://unocss.dev/transformers/directives#apply).

## `index.html`

Pattern : `index.html`

Le fichier `index.html` offre la possibilité d'injecter des balises meta et/ou des scripts dans le `index.html` principal

Par exemple, pour le `index.html` personnalisé suivant :

```html [index.html]
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

Le `index.html` hébergé final sera :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- head injecté -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- body injecté -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Couches globales

Pattern : `global-top.vue` | `global-bottom.vue` | `custom-nav-controls.vue` | `slide-top.vue` | `slide-bottom.vue`

<LinkCard link="features/global-layers" />
