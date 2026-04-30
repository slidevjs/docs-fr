# Mise en page des diapositives

Les mises en page dans Slidev sont utilisées pour définir la structure de chaque diapositive. Ce sont des composants Vue qui enveloppent le contenu des diapositives.

## Utiliser des mises en page {#use}

Pour utiliser une mise en page, vous pouvez la spécifier dans le frontmatter de la diapositive :

```md
---
layout: quote
---

Une citation de quelqu'un
```

Par défaut, la mise en page de la première diapositive est `cover`, et les autres sont `default`.

Les mises en page sont chargées dans l'ordre suivant, et la dernière chargée écrasera les précédentes :

1. mises en page par défaut. Voir [Mises en page intégrées](../builtin/layouts).
2. mises en page fournies par le thème
3. mises en page fournies par les addons
4. mises en page personnalisées dans le répertoire `layouts`

<SeeAlso :links="[
  'features/slot-sugar',
]" />

## Écrire des mises en page {#write}

<LinkCard link="guide/write-layout" />
