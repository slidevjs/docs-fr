---
outline: deep
---

# Guide de syntaxe

Les diapositives de Slidev sont écrites sous forme de fichiers Markdown, appelés **Slidev Markdown**. Une présentation a un Slidev Markdown comme point d'entrée, qui est `./slides.md` par défaut, mais vous pouvez le modifier en passant le chemin du fichier en argument aux [commandes CLI](../builtin/cli).

Dans un Slidev Markdown, non seulement [les fonctionnalités Markdown de base](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) peuvent être utilisées comme d'habitude, mais Slidev fournit également des fonctionnalités supplémentaires pour enrichir vos diapositives. Cette section couvre la syntaxe introduite par Slidev. Assurez-vous de connaître la syntaxe Markdown de base avant de lire ce guide.

## Séparateurs de diapositives {#slide-separators}

Utilisez `---` entouré d'une nouvelle ligne pour séparer vos diapositives.

````md {5,15}
# Titre

Bonjour, **Slidev**!

---

# Slide 2

Utilisez des blocs de code pour mettre en évidence :

```ts
console.log('Hello, World!')
```

---

# Slide 3

Utilisez les classes UnoCSS et les composants Vue pour styliser et enrichir vos diapositives :

<div class="p-3">
  <Tweet id="..." />
</div>
````

## Frontmatter & Headmatter {#frontmatter}

Au début de chaque diapositive, vous pouvez ajouter un [frontmatter](https://jekyllrb.com/docs/front-matter/) optionnel pour configurer la diapositive. Le premier bloc frontmatter est appelé **headmatter** et peut configurer l'ensemble du jeu de diapositives. Les autres sont des **frontmatters** pour chaque diapositive individuelle. Les textes dans le headmatter ou le frontmatter doivent être un objet au format [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Par exemple :

<!-- eslint-skip -->

```md {1-4,10-14,26-28}
---
theme: seriph
title: Bienvenue sur Slidev
---

# Slide 1

Le frontmatter de cette diapositive est aussi le headmatter

---
layout: center
background: /background-1.png
class: text-white
---

# Slide 2

Une page avec la mise en page `center` et une image de fond

---

# Slide 3

Une page sans frontmatter

---
src: ./pages/4.md  # Cette diapositive ne contient qu'un frontmatter
---

---

# Slide 5
```

Les configurations que vous pouvez définir sont décrites dans les sections [Configurations du jeu de diapositives](/custom/#headmatter) et [Configurations par diapositive](/custom/#frontmatter).

Pour rendre le headmatter plus lisible, vous pouvez installer l'extension VSCode :

<LinkCard link="features/vscode-extension" />

Il existe également un autre format de frontmatter possible :

<LinkCard link="features/block-frontmatter" />

## Notes {#notes}

Vous pouvez également créer des notes de présentateur pour chaque diapositive. Elles apparaîtront dans le <LinkInline link="guide/ui#presenter-mode" /> pour vous servir de référence pendant les présentations.

Les blocs de commentaires à la fin de chaque diapositive sont traités comme la note de la diapositive :

```md {9,19-21}
---
layout: cover
---

# Slide 1

Ceci est la page de couverture.

<!-- Ceci est une **note** -->

---

# Slide 2

<!-- Ce n'est PAS une note car elle n'est pas à la fin de la diapositive -->

La deuxième page

<!--
Ceci est _une autre_ note
-->
```

Le Markdown et le HTML de base sont également supportés dans les notes et seront rendus.

<SeeAlso :links="[
  'features/click-marker',
]" />

## Blocs de code {#code-block}

Une des raisons principales de la création de Slidev était le besoin d'afficher parfaitement le code dans les diapositives. Par conséquent, vous pouvez utiliser les blocs de code Markdown pour mettre en surbrillance votre code.

````md
```ts
console.log('Hello, World!')
```
````

Slidev intègre [Shiki](https://github.com/shikijs/shiki) comme colorateur de syntaxe. Référez-vous à [Configurer Shiki](/custom/config-highlighter) pour plus de détails.

En savoir plus sur les blocs de code :

<LinkCard link="features/code-block-line-numbers" />
<LinkCard link="features/code-block-max-height" />
<LinkCard link="features/line-highlighting" />
<LinkCard link="features/monaco-editor" />
<LinkCard link="features/monaco-run" />
<LinkCard link="features/monaco-write" />
<LinkCard link="features/shiki-magic-move" />
<LinkCard link="features/twoslash" />
<LinkCard link="features/import-snippet" />
<LinkCard link="features/code-groups" />

## Blocs LaTeX {#latex-block}

Slidev supporte les blocs LaTeX pour les formules mathématiques et chimiques :

<LinkCard link="features/latex" />

## Diagrammes {#diagrams}

Slidev supporte [Mermaid](https://mermaid.js.org/) et [PlantUML](https://plantuml.com/) pour créer des diagrammes à partir de texte :

<LinkCard link="features/mermaid" />
<LinkCard link="features/plantuml" />

## Syntaxe Comark {#comark-syntax}

La syntaxe Comark est le moyen le plus simple d'appliquer des styles et des classes aux éléments :

<LinkCard link="features/comark" />

## CSS scopé {#scoped-css}

Vous pouvez utiliser le CSS scopé pour styliser vos diapositives :

<LinkCard link="features/slide-scope-style" />

## Importer des diapositives {#importing-slides}

<LinkCard link="features/importing-slides" />
