---
outline: deep
---

# Commencer

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> est un créateur et présentateur de diapositives basé sur le Web. Il est conçu pour que les développeurs se concentrent sur la rédaction de contenu en Markdown tout en ayant la puissance du HTML et des composants Vue pour fournir des mises en page et des designs parfaits au pixel près avec des démos interactives intégrées dans vos présentations.

Il utilise un fichier Markdown riche en fonctionnalités pour générer de belles diapositives avec une expérience de rechargement instantané, ainsi que de nombreuses intégrations intégrées telles que le codage en direct, l'exportation de PDF, l'enregistrement de présentations, etc. Comme il est alimenté par le Web, vous pouvez tout faire avec Slidev - les possibilités sont infinies.

Vous pouvez en savoir plus sur la raison d'être du projet dans la section [Pourquoi Slidev](/guide/why).

## Fonctionnalités

- 📝 [**Basé sur Markdown**](/guide/syntax.html) - utilisez vos éditeurs et flux de travail préférés
- 🧑‍💻 [**Adapté aux développeurs**](/guide/syntax.html#code-blocks) - coloration syntaxique intégrée, codage en direct, etc.
- 🎨 [**Thématisable**](/themes/gallery.html) - les thèmes peuvent être partagés et utilisés avec des packages npm
- 🌈 [**Stylé**](/guide/syntax.html#embedded-styles) - utilitaires à la demande via [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactif**](/custom/directory-structure.html#components) - intégration transparente de composants Vue
- 🎙 [**Mode présentateur**](/guide/presenter-mode.html) - utilisez une autre fenêtre, ou même votre téléphone pour contrôler vos diapositives
- 🎨 [**Dessin**](/guide/drawing.html) - dessinez et annotez sur vos diapositives
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - prise en charge intégrée des équations mathématiques LaTeX
- 📰 [**Diagrammes**](/guide/syntax.html#diagrams) - créez des diagrammes avec des descriptions textuelles
- 🌟 [**Icônes**](/guide/syntax.html#icons) - accès aux icônes de n'importe quel jeu d'icônes directement
- 💻 [**Éditeurs**](/guide/editors.html) - éditeur intégré, ou [extension pour VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Enregistrement**](/guide/recording.html) - enregistrement et vue de la caméra intégrés
- 📤 [**Portable**](/guide/exporting.html) - exportez en PDF, PNG, ou même une SPA hébergeable
- ⚡️ [**Rapide**](https://vitejs.dev) - rechargement instantané propulsé par [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - utilisation de plugins Vite, composants Vue, ou n'importe quel package npm

## Créer votre première présentation

### Essayez-le en ligne

Démarrez Slidev directement dans votre navigateur : [sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

### Créer localement

::: code-group

```bash [npm]
npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Suivez les instructions et commencez à créer vos diapositives maintenant ! Pour plus de détails sur la syntaxe Markdown, consultez le [guide de syntaxe](/guide/syntax).

## Interface en ligne de commande

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

Sinon, vous pouvez l'utiliser avec [`npx`](https://github.com/npm/cli/blob/latest/bin/npx)

```bash
$ npx slidev
```

Exécutez `slidev --help` pour plus d'options disponibles.

## Syntaxe Markdown

Slidev lit votre fichier `slides.md` sous la racine de votre projet et les convertit en diapositives. Chaque fois que vous y apportez des modifications, le contenu des diapositives est mis à jour immédiatement. Par exemple :

````md
# Slidev

Hello World

---

# Page 2

Utilisez directement des blocs de code pour la mise en évidence

```ts
console.log('Hello, World!')
```

---

# Page 3
````

En savoir plus sur la syntaxe Markdown de Slidev dans le [guide de syntaxe](/guide/syntax).

## Pile technologique

Slidev est rendu possible grâce à la combinaison de ces outils et technologies.

- [Vite](https://vitejs.dev) - Un outillage frontend extrêmement rapide
- [Vue 3](https://v3.vuejs.org/) propulsé [Markdown](https://daringfireball.net/projects/markdown/syntax) - Concentrez-vous sur le contenu tout en ayant la puissance du HTML et des composants Vue quand nécessaire
- [UnoCSS](https://github.com/unocss/unocss) - Framework CSS utilitaire à la demande, stylisez vos diapositives en toute simplicité
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Prise en charge de premier ordre des extraits de code avec capacité de codage en direct
- [RecordRTC](https://recordrtc.org) - Enregistrement et vue de la caméra intégrés
- Famille [VueUse](https://vueuse.org) - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Collection de jeux d'icônes.
- [Drauu](https://github.com/antfu/drauu) - Prise en charge du dessin et des annotations
- [KaTeX](https://katex.org/) - Rendu mathématique LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagrammes textuels.
