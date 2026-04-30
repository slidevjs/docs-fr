---
outline: deep
---

# Pour commencer

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> est un créateur et présentateur de diapositives basé sur le web. Il est conçu pour que les développeurs se concentrent sur la rédaction de contenu en Markdown. Grâce à la puissance des technologies web comme Vue, vous pouvez créer des designs pixel-perfect avec des démos interactives pour votre présentation.

::: tip

Vous pouvez en savoir plus sur la raison d'être de ce projet dans <LinkInline link="guide/why" />.

:::

<!--
- 📝 [**Markdown-based**](/guide/syntax) - focus on content and use your favorite editor
- 🧑‍💻 [**Developer Friendly**](/guide/syntax#code-blocks) - built-in code highlighting, live coding, etc.
- 🎨 [**Themable**](/resources/theme-gallery) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax#embedded-styles) - on-demand utilities via [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/ui#presenter-mode) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/features/drawing) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax#diagrams) - creates diagrams using textual descriptions with [Mermaid.js](https://mermaid.js.org/)
- 🌟 [**Icons**](/guide/syntax#icons) - access to icons from any icon set directly
- 💻 [**Editor**](/guide/index#editor) - integrated editor, or the [VSCode extension](/features/vscode-extension)
- 🎥 [**Recording**](/features/recording) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting) - export into PDF, PNGs, or PPTX
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/) - using Vite plugins, Vue components, or any npm packages
-->

<!-- <FeaturesAnimation /> -->

## Créer des diapositives

### Essayer en ligne

Démarrez Slidev directement dans votre navigateur avec StackBlitz : [sli.dev/new](https://sli.dev/new)

### Créer localement

> Nécessite [Node.js](https://nodejs.org) >= 20.12.0 installé.

Exécutez la commande suivante pour créer un nouveau projet Slidev en local :

::: code-group

```bash [pnpm]
# Si vous n'avez pas installé pnpm
npm i -g pnpm

pnpm create slidev
```

```bash [npm]
# Non recommandé -
# NPM va télécharger les packages chaque fois que vous creez un nouveau projet,
# ce qui est lent et prend beaucoup d'espace de stockage

npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [bun]
bun create slidev
```

```bash [deno]
deno init --npm slidev
```

:::

Suivez les instructions pour démarrer votre projet de diapositives. Le contenu des diapositives se trouve dans `slides.md`, qui inclut initialement des démonstrations de la plupart des fonctionnalités de Slidev. Pour plus d'informations sur la syntaxe Markdown, consultez <LinkInline link="guide/syntax" />.

:::: details Utilisation en fichier unique (non recommandé)

Si vous préférez avoir un seul fichier Markdown pour vos diapositives, vous pouvez installer le CLI de Slidev globalement :

::: code-group

```bash [pnpm]
pnpm i -g @slidev/cli
```

```bash [npm]
npm i -g @slidev/cli
```

```bash [yarn]
yarn global add @slidev/cli
```

```bash [bun]
bun i -g @slidev/cli
```

```bash [deno]
deno i -g npm:@slidev/cli
```

:::

Ensuite, vous pouvez créer et démarrer un fichier unique de diapositives via :

```bash
slidev slides.md
```

::::

## Commandes de base

Slidev fournit un ensemble de commandes dans son CLI. Voici les plus courantes :

- `slidev` - Démarrer le serveur de développement. Voir [la commande dev](../builtin/cli#dev).
- `slidev export` - Exporter les diapositives en PDF, PPTX ou PNGs. Voir <LinkInline link="guide/exporting" />.
- `slidev build` - Construire les diapositives en application web statique. Voir <LinkInline link="guide/hosting" />.
- `slidev format` - Formater les diapositives. Voir [la commande format](../builtin/cli#format).
- `slidev --help` - Afficher le message d'aide

Pour exécuter ces commandes, vous pouvez les ajouter à vos scripts dans `package.json` (ce qui a été fait si le projet a été créé via `npm init slidev`) :

```json [package.json]
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

Ensuite, vous pouvez simplement exécuter `npm run dev`, `npm run build`, et `npm run export`.

Pour plus d'informations sur le CLI, consultez le [guide du CLI](../builtin/cli).

## Configurer votre éditeur {#editor}

Puisque Slidev utilise Markdown comme source, vous pouvez utiliser l'éditeur de votre choix pour créer vos diapositives. Nous fournissons également des outils pour vous aider à éditer vos diapositives plus facilement :

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## Rejoindre la communauté

Il est recommandé de rejoindre notre [serveur Discord](https://chat.sli.dev/) officiel pour obtenir de l'aide, partager vos diapositives, ou discuter de tout ce qui concerne Slidev.

Si vous rencontrez des bugs, n'hésitez pas à ouvrir une issue sur [GitHub](https://github.com/slidevjs/slidev/issues/new/choose).

## Stack technique

Slidev est rendu possible grâce à la combinaison de ces outils et technologies.

- [Vite](https://vitejs.dev) - Un outil frontend extrêmement rapide
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Concentrez-vous sur le contenu tout en disposant de la puissance du HTML et des composants Vue quand nécessaire
- [UnoCSS](https://github.com/unocss/unocss) - Framework CSS utilitaire à la demande, stylez vos diapositives en toute tranquillité
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Support des extraits de code de première classe avec capacité de live coding
- [RecordRTC](https://recordrtc.org) - Enregistrement intégré et vue caméra
- [VueUse](https://vueuse.org) family - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Collection d'icônes.
- [Drauu](https://github.com/antfu/drauu) - Support du dessin et des annotations
- [KaTeX](https://katex.org/) - Rendu des formules mathématiques LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagrammes textuels.
