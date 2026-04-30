---
outline: deep
---

# Pourquoi Slidev

Il existe de nombreux créateurs de diapositives WYSIWYG riches en fonctionnalités comme [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) et [Apple Keynote](https://www.apple.com/keynote/) _(voir [Comparaisons](#comparisons))_. Ils sont intuitifs et faciles à apprendre. Alors pourquoi se donner la peine de créer Slidev ?

Slidev vise à offrir flexibilité et interactivité aux **développeurs** pour rendre leurs présentations bien plus intéressantes, expressives et attrayantes en utilisant des technologies qu'ils connaissent bien. Slidev est également open source avec une communauté solide.

Slidev est basé sur le Markdown, ce qui vous aide à **vous concentrer sur le contenu**. Slidev est également basé sur le Web, ce qui signifie que **rien n'est impossible** — tout ce que vous pouvez faire dans une application web peut s'appliquer à vos diapositives.

Slidev est aussi **progressif**. Vous pouvez commencer avec un fichier Markdown super simple, puis utiliser les [fonctionnalités intégrées](../features/) dont vous avez besoin sans aucune configuration. Il existe également des [thèmes et addons](./theme-addon) que vous pouvez optionnellement installer pour améliorer vos diapositives.

![demo slide](/screenshots/cover.png) {#welcome}

## Fonctionnalités

### 📝 Basé sur le Markdown

Slidev utilise un format Markdown étendu pour organiser vos diapositives dans un seul fichier texte. Cela vous aide à vous concentrer sur le contenu tout en vous permettant d'utiliser Git et l'éditeur de votre choix.

> En savoir plus : <LinkInline link="guide/syntax"/>.

### 🧑‍💻 Convivial pour les développeurs

Slidev offre un support de premier ordre pour les extraits de code destinés aux développeurs. Il utilise [Shiki](https://github.com/shikijs/shiki) pour obtenir la coloration syntaxique la plus précise. Slidev prend également en charge <LinkInline link="features/shiki-magic-move"/> et <LinkInline link="features/twoslash"/>. Ce qui fait de Slidev le meilleur choix pour les conférences techniques.

### 🎨 Thématisable

Les thèmes pour Slidev peuvent être partagés via des packages npm. Vous appliquez un thème en une seule ligne de code.

Consultez la [galerie de thèmes](../resources/theme-gallery) pour les magnifiques thèmes créés par l'équipe officielle et la communauté.

### ⚡ Rapide

Chaque modification que vous faites dans l'éditeur sera mise à jour dans vos diapositives dans le navigateur **instantanément** sans rechargement, grâce à la [fonctionnalité HMR de Vite](https://vitejs.dev/guide/features.html#hot-module-replacement).

### 🤹 Interactif et expressif

Vous pouvez écrire des composants Vue et les utiliser dans vos diapositives, avec lesquels vous pouvez ensuite interagir pendant la présentation pour exprimer votre idée de manière plus intéressante et intuitive.

Slidev prend également en charge nativement <LinkInline link="features/monaco-editor"/>, qui vous permet de faire du codage en direct dans votre présentation avec l'auto-complétion et les info-bulles.

### 🎥 Support d'enregistrement

Slidev fournit un enregistrement intégré et une vue caméra. Vous pouvez partager votre présentation avec votre vue caméra à l'intérieur, ou enregistrer et sauvegarder votre écran et votre caméra séparément.

> En savoir plus : <LinkInline link="features/recording"/>.

### 📤 Portable

Vous pouvez exporter vos diapositives en PDF, PPTX, PNGs, ou même une application monopage (SPA) via une seule commande. Ensuite, vous pouvez les partager ou les héberger où vous le souhaitez.

> En savoir plus : <LinkInline link="guide/exporting"/> et <LinkInline link="guide/hosting"/>.

### 🛠 Personnalisable

Parce que Slidev est basé sur le Web, tout ce qui peut être fait dans une application web classique peut être appliqué à vos diapositives. Par exemple, WebGL, requêtes API, iframes, ou même le partage en direct. C'est à votre imagination de décider !

> En savoir plus : [Personnalisation](../custom/).

## Comparaisons

::: details Slidev vs. Microsoft PowerPoint / Apple Keynote

[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) et [Apple Keynote](https://www.apple.com/keynote/) sont des créateurs de diapositives WYSIWYG riches en fonctionnalités. Ils sont intuitifs et faciles à apprendre, ce qui en fait l'un des meilleurs choix pour les non-développeurs.

Par rapport à eux, Slidev présente les avantages suivants :

- Convivial pour les développeurs : Les extraits de code sont des citoyens de premier plan dans Slidev.
- Basé sur le Markdown : Concentrez-vous sur le contenu, et gérez la version de vos diapositives avec Git.
- Basé sur le Web : Tout ce que vous pouvez faire dans une application web peut s'appliquer à vos diapositives.
- Personnalisable : Personnalisez tout ce que vous voulez avec les technologies web.
- Open source : Slidev est entièrement open source, et possède une communauté solide.

:::

::: details Slidev vs. Reveal.js

[Reveal.js](https://revealjs.com/) est un framework de présentation HTML populaire. Il est également open source et prend en charge le Markdown.

Par rapport à Reveal.js, Slidev présente les avantages suivants :

- Plus concis : Slidev utilise un format Markdown étendu, tandis que Reveal.js vous encourage à écrire du HTML pour organiser vos diapositives.
- Support de Vue : Vous pouvez utiliser des composants Vue dans Slidev pour rendre vos diapositives interactives.
- Basé sur Vite : Slidev est construit sur Vite, qui offre un HMR instantané et une API de plugin flexible.
- CSS automatique : Vous pouvez utiliser [UnoCSS](https://unocss.dev/) dès le départ pour styliser vos diapositives.

:::

::: details Slidev vs. Marp

[Marp](https://marp.app/) est un outil de présentation Markdown qui se concentre sur la simplicité et la portabilité. Il est également open source et prend en charge le Markdown.

Par rapport à Marp, Slidev présente les avantages suivants :

- La même simplicité : Les diapositives de Slidev peuvent commencer aussi simplement que celles de Marp.
- Plus de fonctionnalités : Slidev prend en charge de nombreuses fonctionnalités que Marp n'offre pas.
- Support de Vue : Vous pouvez utiliser des composants Vue dans Slidev pour rendre vos diapositives interactives.
- Basé sur Vite : Slidev est construit sur Vite, qui offre un HMR instantané et une API de plugin flexible.
- CSS automatique : Vous pouvez utiliser [UnoCSS](https://unocss.dev/) dès le départ pour styliser vos diapositives.

:::

## Essayez-le

Expérimenter avec Slidev vous en apprendra plus que mille mots. Consultez le guide <LinkInline link="guide/"/> pour créer votre premier projet Slidev en un clic ou une commande.

Ou vous pouvez avoir un aperçu rapide :

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
