# Pourquoi Slidev

Il existe de nombreux créateurs de diapositives WYSIWYG polyvalents et riches en fonctionnalités, tels que [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) et [Apple Keynote](https://www.apple.com/keynote/). Ils fonctionnent plutôt bien pour créer de belles diapositives avec des animations, des graphiques et bien d'autres choses, tout en étant très intuitifs et faciles à apprendre. Alors pourquoi prendre la peine de faire Slidev ?

Slidev vise à offrir la flexibilité et l'interactivité aux développeurs pour rendre leurs présentations encore plus intéressantes, expressives et attrayantes en utilisant les outils et technologies avec lesquels ils sont déjà familiers.

Lorsque vous travaillez avec des éditeurs WYSIWYG, il est facile de se laisser distraire par les options de style. Slidev remédie à cela en séparant le contenu et les éléments visuels. Cela vous permet de vous concentrer sur une chose à la fois, tout en pouvant réutiliser les thèmes de la communauté. Slidev ne cherche pas à remplacer entièrement les autres constructeurs de diapositives. Il se concentre plutôt sur l'apport à la communauté des développeurs.

## Slidev

![](/screenshots/cover.png)

Voici quelques-unes des fonctionnalités les plus intéressantes de Slidev :

## Basé sur Markdown

Slidev utilise un format Markdown étendu pour stocker et organiser vos diapositives dans un seul fichier de texte brut. Cela vous permet de vous concentrer sur la création du contenu. Et comme le contenu et les styles sont séparés, cela permet également de basculer entre différents thèmes sans effort.

En savoir plus sur la [syntaxe Markdown de Slidev](/guide/syntax).

## Thème

Les thèmes pour Slidev peuvent être partagés et installés à l'aide de packages npm. Vous les appliquez ensuite avec une seule ligne de configuration.

Consultez la [galerie de thèmes](/themes/gallery) ou [apprenez à écrire un thème](/themes/write-a-theme).

## Adapté aux développeurs

Slidev fournit une prise en charge de premier ordre des extraits de code pour les développeurs. Il prend en charge [Shiki](https://github.com/shikijs/shiki) pour obtenir une coloration syntaxique parfaite au pixel près, tout en permettant de modifier le code à tout moment. Avec l'éditeur [Monaco](https://microsoft.github.io/monaco-editor/) intégré, il vous permet également de faire du codage en direct / démonstration dans votre présentation avec autocomplétion, survol de type, et même prise en charge de la vérification de type TypeScript.

En savoir plus sur les [colorateurs](/custom/highlighters) et la [configuration Monaco](/custom/config-monaco).

## Rapide

Slidev est propulsé par [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) et [UnoCSS](https://unocss.dev/), qui vous offrent la meilleure expérience de création. Chaque modification que vous apportez se reflètera sur vos diapositives **instantanément**.

En savoir plus sur [notre pile technologique](/guide/#pile-technologique).

## Interactif et expressif

Vous pouvez écrire des composants Vue personnalisés et les utiliser directement dans votre fichier markdown. Vous pouvez également interagir avec eux dans la présentation pour exprimer votre idée de manière plus intéressante et intuitive.

## Prise en charge de l'enregistrement

Slidev fournit un enregistrement intégré et une vue de la caméra. Vous pouvez partager votre présentation avec la vue de votre caméra à l'intérieur, ou les enregistrer et les sauvegarder séparément pour votre écran et votre caméra. Tout cela d'un seul coup, aucun outil supplémentaire n'est nécessaire.

En savoir plus sur [l'enregistrement ici](/guide/recording).

## Portable

Exportez vos diapositives en PDF, PPTX, PNG, ou même une application monopage (SPA) hébergeable avec une seule commande, et partagez-les n'importe où.

Apprenez-en plus à ce sujet dans la [documentation d'exportation](/guide/exporting).

## Hackable

Étant alimenté par les technologies Web, tout ce qui peut être fait dans une application Web est également possible avec Slidev. Par exemple, WebGL, requêtes API, iframes ou même partage en direct. C'est à votre imagination !

## Essayez

Jouer avec Slidev vous en dira plus que mille mots. Vous n'êtes qu'à une seule commande :

```bash
$ npm init slidev
```

Ou en avoir un aperçu rapide :

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
