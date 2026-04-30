---
depends:
  - guide/theme-addon
tags: [theme, cli]
description: |
  Éjecter le thème installé de votre projet pour le personnaliser.
---

# Éjecter le thème

Si vous souhaitez obtenir un contrôle total du thème actuel, vous pouvez l'**éjecter** vers votre système de fichiers local et le modifier comme vous le souhaitez. En exécutant la commande suivante

```bash
$ slidev theme eject
```

Cela éjectera le thème que vous utilisez actuellement dans `./theme`, et changera votre frontmatter en

```yaml
---
theme: ./theme
---
```

Cela pourrait également être utile si vous souhaitez créer un thème basé sur un thème existant. Si vous le faites, n'oubliez pas de mentionner le thème original et l'auteur :)

Pour plus d'options de la commande `theme`, veuillez vous référer à la section [Commande Theme](../builtin/cli#theme).
