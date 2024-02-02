# Dessins & Annotations

> Disponible depuis v0.23

Nous avons [drauu](https://github.com/antfu/drauu) intégré pour le dessin et l'annotation qui pourraient améliorer davantage votre présentation.

Pour commencer, cliquez sur l'icône <carbon-pen class="inline-icon-btn"/> dans la barre d'outils et commencez à dessiner. Il est également disponible dans le [Mode Présentateur](/guide/presenter-mode). Les dessins et les annotations que vous avez créés seront **synchronisés** automatiquement sur toutes les instances en temps réel.

<TheTweet id="1424027510342250499" />

## Utiliser avec stylet

Lors de l'utilisation d'un stylet sur une tablette (par exemple, iPad avec Apple Pencil), Slidev pourrait détecter intelligemment le type d'entrée. Vous pouvez dessiner directement sur vos diapositives avec le stylet sans activer le mode dessin, tout en laissant vos doigts ou votre souris contrôler la navigation.

## Dessins persistants

La configuration frontmatter suivante vous permet de conserver vos dessins en tant que SVG sous le répertoire `.slidev/drawings` et de les avoir dans votre pdf exporté ou votre site hébergé.

```md
---
drawings:
  persist: true
---
```

## Désactiver les dessins

Entièrement :

```md
---
drawings:
  enabled: false
---
```

Uniquement en développement :

```md
---
drawings:
  enabled: dev
---
```

Uniquement en mode Présentateur :

```md
---
drawings:
  presenterOnly: true
---
```

## Synchronisation des dessins

Par défaut, Slidev synchronise vos dessins sur toutes les instances. Si vous partagez vos diapositives avec d'autres personnes, vous pouvez désactiver la synchronisation en :

```md
---
drawings:
  syncAll: false
---
```

<<<<<<< HEAD
Avec cette configuration, seul le dessin de l'instance du présentateur pourra se synchroniser avec les autres.
=======
With this config, only the drawing from the presenter instance will be able to sync with others.
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5
