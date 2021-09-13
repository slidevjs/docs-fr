# Commencer

## Aperçu

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> est un créateur et présentateur de diapositives basé sur le Web. Il est conçu pour que les développeurs se concentrent sur l'écriture de contenu dans Markdown tout en ayant la puissance des composants HTML et Vue pour fournir des mises en page et des conceptions parfaites au pixel près avec des démos interactives intégrées dans vos présentations.

Il utilise un fichier de démarque riche en fonctionnalités pour générer de belles diapositives avec une expérience de rechargement instantané, ainsi que de nombreuses intégrations intégrées telles que le codage en direct, l'exportation de PDF, l'enregistrement de présentations, etc. Comme il est alimenté par le Web, vous pouvez tout faire avec Slidev - les possibilités sont infinies.

Vous pouvez en savoir plus sur la raison d'être du projet dans la section [Pourquoi Slidev](/guide/why).

### Caractéristiques

<<<<<<< HEAD
- 📝 [**Basé sur Markdown**](/guide/syntax.html) - utilisez vos éditeurs et flux de travail préférés
- 🧑‍💻 [**Adapté aux développeurs**](/guide/syntax.html#code-blocks) - coloration syntaxique intégrée, codage en direct, etc.
- 🎨 [**Thème**](/themes/gallery.html) - le thème peut être partagé et utilisé avec les packages npm
- 🌈 [**Stylisé**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) utilitaires à la demande, feuilles de style intégrées faciles à utiliser
- 🤹 [**Interactif**](/custom/directory-structure.html#components) - intégration transparente des composants Vue
- 🎙 [**Mode Présentateur**](/guide/presenter-mode.html) - utilisez une autre fenêtre, ou même votre téléphone pour contrôler vos diapositives
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - Prise en charge des équations mathématiques LaTeX intégrées
- 📰 [**Diagrammes**](/guide/syntax.html#diagrams) - Crée des diagrammes avec des descriptions textuelles
- 🌟 [**Icônes**](/guide/syntax.html#icons) - Accès aux icônes depuis n'importe quel jeu d'icônes directement
- 💻 [**Éditeurs**](/guide/editors.html) - Editeur intégré, ou [extension pour VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Enregistrement**](/guide/recording.html) - enregistrement intégré et vue de la caméra
- 📤 [**Portable**](/guide/exporting.html) - exportation au format PDF, PNG ou même un SPA hébergeable
- ⚡️ [**Rapide**](https://vitejs.dev) - rechargement instantané alimenté par [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - en utilisant les plugins Vite, les composants Vue ou tout autre package npm
=======
- 📝 [**Markdown-based**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**Developer Friendly**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - [Windi CSS](https://windicss.org/) on-demand utilities, easy-to-use embedded stylesheets
- 🤹 [**Interactive**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax.html#diagrams) - creates diagrams with textual descriptions 
- 🌟 [**Icons**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**Editors**](/guide/editors.html) - integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

### Pile technologique

Slidev est rendu possible en combinant ces outils et technologies.

<<<<<<< HEAD
- [Vite](https://vitejs.dev) - Un outil frontal extrêmement rapide
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Concentrez-vous sur le contenu tout en ayant la puissance des composants HTML et Vue chaque fois que nécessaire
- [Windi CSS](https://github.com/windicss/windicss) - Framework CSS à la demande, premier utilitaire, stylisez vos diapositives à l'aise
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Prise en charge des extraits de code de première classe avec capacité de codage en direct
- [RecordRTC](https://recordrtc.org) - Enregistrement intégré et vue de la caméra
- Famille [VueUse](https://vueuse.org) - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Collection d'icônes.
- [KaTeX](https://katex.org/) - Rendu mathématique LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagrammes textuels.
=======
- [Vite](https://vitejs.dev) - An extremely fast frontend tooling
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Focus on the content while having the power of HTML and Vue components whenever needed
- [Windi CSS](https://github.com/windicss/windicss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconsets collection.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textual Diagrams.
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

### Création de votre première présentation

Avec NPM :

```bash
$ npm init slidev
```

Avec Yarn :

```bash
$ yarn create slidev
```

Suivez les instructions et commencez à créer vos diapositives maintenant ! Pour plus de détails sur la syntaxe de démarquage, lisez le [guide de syntaxe](/guide/syntax).

### Interface de ligne de commande

Dans un projet où Slidev est installé, vous pouvez utiliser le binaire `slidev` dans vos scripts npm.

```json
{
  "scripts": {
    "dev": "slidev", // lancer le serveur de développement
    "build": "slidev build", // construire pour la production SPA
    "export": "slidev export" // exporter les diapositives en pdf
  }
}
```

Sinon, vous pouvez l'utiliser avec [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Exécutez `slidev --help` pour plus d'options disponibles.

### Syntaxe de Markdown

Slidev lit votre fichier `slides.md` sous la racine de votre projet et les convertit en diapositives. Chaque fois que vous y apportez des modifications, le contenu des diapositives est mis à jour immédiatement. Par exemple :

~~~md
# Slidev

Hello World

---

# Page 2

Utilisez directement des blocs de code pour la mise en évidence

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

En savoir plus sur la syntaxe Slidev Markdown dans le [guide de syntaxe](/guide/syntax).
