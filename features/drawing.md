---
depends:
  - guide/ui#navigation-bar
relates:
  - drauu: https://github.com/antfu/drauu
tags: [drawing]
description: |
  Dessiner et annoter vos diapositives facilement.
---

# Dessin et annotations

Slidev dispose d'une fonctionnalité intégrée de dessin et d'annotation propulsée par [drauu](https://github.com/antfu/drauu). Elle vous permet de dessiner et d'annoter vos diapositives facilement.

Pour commencer, cliquez sur l'icône <carbon-pen class="inline-icon-btn"/> dans la [barre de navigation](../guide/ui#navigation-bar) pour ouvrir la barre d'outils de dessin. Elle est également disponible dans le [Mode Présentateur](/guide/ui#presenter-mode). Les dessins et annotations que vous créez seront **synchronisés** automatiquement entre toutes les instances en temps réel.

<TheTweet id="1424027510342250499" />

## Utilisation avec un stylet

Lors de l'utilisation d'un stylet sur une tablette (par exemple, iPad avec Apple Pencil), Slidev détectera intelligemment le type d'entrée. Vous pouvez dessiner directement sur vos diapositives avec le stylet sans activer le mode dessin tandis que vos doigts ou la souris contrôlent la navigation.

## Persister les dessins

La configuration frontmatter suivante vous permet de persister vos dessins en tant que SVGs dans le répertoire `.slidev/drawings` et de les inclure dans votre PDF exporté ou votre site hébergé.

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

Uniquement en mode présentateur :

```md
---
drawings:
  presenterOnly: true
---
```

## Synchronisation des dessins

Par défaut, Slidev synchronise vos dessins entre toutes les instances. Si vous partagez vos diapositives avec d'autres, vous pourriez vouloir désactiver la synchronisation via :

```md
---
drawings:
  syncAll: false
---
```

Avec cette configuration, seul le dessin de l'instance présentateur pourra se synchroniser avec les autres.
