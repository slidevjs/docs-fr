# Structure du répertoire

Slidev utilise certaines conventions de structure de répertoires pour minimiser la surface de configuration et rendre les extensions de fonctionnalités flexibles et intuitives.

La structure de base est la suivante :

```bash
your-slidev/
  ├── components/       # composants customisés
  ├── layouts/          # mises en page customisées
  ├── public/           # assets statiques
  ├── setup/            # configuration personnalisée / hooks
  ├── styles/           # style personnalisé
  ├── index.html        # injections dans index.html
  ├── slides.md         # l'entrée principale des diapositives
  ├── vite.config.ts    # extension de vite config
```

Tous sont facultatifs.

## Composants

Conventions: `./components/*.{vue,js,ts,jsx,tsx,md}`

Les composants à l'intérieur de ce répertoire peuvent être directement utilisés dans les diapositives Markdown avec le même nom de composant que le nom de fichier.

Par exemple :

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# My Slide

<MyComponent :count="4"/>

<!-- Les deux appellations fonctionnent -->

<hello-world foo="bar">
  Slot
</hello-world>
```

Cette fonctionnalité est alimentée par [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), apprenez-en plus ici.

Slidev fournit également des [composants intégrés](/builtin/components) que vous pouvez utiliser.

## Mises en page

Conventions : `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Vous pouvez utiliser n'importe quel nom de fichier pour votre mise en page. Vous référencez ensuite votre mise en page dans votre en-tête YAML en utilisant le nom de fichier.

```yaml
---
layout: my-cool-theme
---
```

Si la mise en page que vous fournissez porte le même nom qu'une mise en page intégrée ou une mise en page de thème, votre mise en page personnalisée prévaudra sur la mise en page intégrée / thème. L'ordre de priorité est `local > thème > intégré`.

Dans le composant de mise en page, utilisez `<slot />` pour le contenu de la diapositive. Par exemple :

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Public

Conventions : `./public/*`

Les actifs de ce répertoire seront servis à la racine du chemin `/` pendant le développement, et copiés à la racine du répertoire dist tels quels. En savoir plus sur [le répertoire `public` de Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Style

Conventions : `./style.css` | `./styles/index.{css,js,ts}`

Les fichiers suivant cette convention seront injectés à la racine de l'application. Si vous devez importer plusieurs entrées CSS, vous pouvez créer la structure suivante et gérer vous-même l'ordre d'importation.

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

<<<<<<< HEAD
Les styles seront traités par [Windi CSS](http://windicss.org/) et [PostCSS](https://postcss.org/), vous pouvez donc utiliser l'imbrication css et [at-directives](https://windicss.org/features/directives.html) prêt à l'emploi. Par exemple :
=======
Styles will be processed by [UnoCSS](https://unocss.dev/) and [PostCSS](https://postcss.org/), so you can use css nesting and [at-directives](https://windicss.org/features/directives.html) out-of-box. For example:
>>>>>>> 285da456fee4e267e3d19c2fb5b19ebef4d1f909

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[En savoir plus sur la syntaxe](https://windicss.org/features/directives.html).

## `index.html`

Conventions : `index.html`

Le `index.html` offre la possibilité d'injecter des balises meta et/ou des scripts dans le `index.html` principal

Par exemple, pour le `index.html` personnalisé suivant :

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

Le fichier `index.html` final hébergé sera :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Couches globales

Conventions : `global-top.vue` | `global-bottom.vue`

En savoir plus: [Couches globales](/custom/global-layers)

