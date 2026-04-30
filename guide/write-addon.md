# Écrire des addons

> Veuillez d'abord lire <LinkInline link="guide/theme-addon" /> et <LinkInline link="guide/write-theme" />.

Chaque projet de diapositives ne peut avoir qu'un seul thème, mais peut avoir plusieurs addons.

## Capacités

En théorie, toutes les capacités d'un thème peuvent être réalisées dans un addon. Cependant, un addon est plus comme un plugin qui étend les fonctionnalités de Slidev.

Il est recommandé d'implémenter un ou plusieurs des points suivants dans un addon :

- Fournir des composants personnalisés
- Fournir de _nouvelles_ dispositions
- Fournir de nouveaux extraits de code
- Fournir de nouveaux exécuteurs de code
- Configurer des outils comme UnoCSS, Vite, etc.

Cependant, les points suivants **ne** sont **pas** recommandés pour un addon, et seraient mieux [implémentés en tant que thème](./write-theme) :

- Styles globaux généraux
- Remplacement des dispositions existantes
- Remplacement des configurations
- Autres choses qui pourraient être incompatibles avec le thème et d'autres addons

Un addon peut également spécifier sa version de Slidev requise de la même manière que les thèmes.

## Aperçu

Comme pour les thèmes, vous pouvez prévisualiser votre addon via un fichier `./slides.md` comme ceci :

```md [slides.md]
---
addons:
  - ./
---
```

## Publication

Lors de la publication de l'addon, les fichiers non-JS comme les fichiers `.vue` et `.ts` peuvent être publiés directement sans compilation. Slidev les compilera automatiquement lors de l'utilisation de l'addon.

Les addons doivent suivre les conventions suivantes :

- Le nom du package doit commencer par `slidev-addon-`. Par exemple, `slidev-addon-name` ou `@scope/slidev-addon-name`
- Ajoutez `"slidev-addon"` et `"slidev"` dans le champ `keywords` de votre `package.json`

Les addons peuvent être utilisés localement sans être publiés sur NPM. Si votre addon est uniquement à usage personnel, vous pouvez simplement l'utiliser comme addon local, ou le publier comme package privé avec portée. Cependant, il est recommandé de le publier sur le registre NPM si vous souhaitez le partager avec d'autres.
