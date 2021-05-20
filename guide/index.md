# Commencer

## Aperçu

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> est un créateur et présentateur de diapositives basé sur le Web. Il est conçu pour que les développeurs se concentrent sur l'écriture de contenu dans Markdown tout en ayant la puissance des composants HTML et Vue pour fournir des mises en page et des conceptions parfaites au pixel près avec des démos interactives intégrées dans vos présentations.

Il utilise un fichier de démarque riche en fonctionnalités pour générer de belles diapositives avec une expérience de rechargement instantané, ainsi que de nombreuses intégrations intégrées telles que le codage en direct, l'exportation de PDF, l'enregistrement de présentations, etc. Comme il est alimenté par le Web, vous pouvez tout faire avec Slidev - les possibilités sont infinies.

Vous pouvez en savoir plus sur la raison d'être du projet dans la section [Pourquoi Slidev](/guide/why).

### Caractéristiques

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

### Pile technologique

Slidev est rendu possible en combinant ces outils et technologies.

- [Vite](https://vitejs.dev) - Un outil frontal extrêmement rapide
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Concentrez-vous sur le contenu tout en ayant la puissance des composants HTML et Vue chaque fois que nécessaire
- [Windi CSS](https://github.com/windicss/windicss) - Framework CSS à la demande, premier utilitaire, stylisez vos diapositives à l'aise
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Prise en charge des extraits de code de première classe avec capacité de codage en direct
- [RecordRTC](https://recordrtc.org) - Enregistrement intégré et vue de la caméra
- Famille [VueUse](https://vueuse.org) - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Collection d'icônes.
- [KaTeX](https://katex.org/) - Rendu mathématique LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagrammes textuels.

### Création de votre première présentation

Avec NPM:

```bash
$ npm init slidev
```

Avec Yarn:

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

Slidev lit votre fichier `slides.md` sous la racine de votre projet et les convertit en diapositives. Chaque fois que vous y apportez des modifications, le contenu des diapositives est mis à jour immédiatement. Par exemple:

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
