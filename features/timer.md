---
tags: [presenter]
description: Minuteur pour le mode présentateur.
---

# Minuteur du présentateur

Slidev fournit un minuteur pour le mode présentateur. Vous pouvez démarrer, mettre en pause et réinitialiser le minuterie.

Il affichera un minuteur (en mode chronomètre ou compte à rebours), et une barre de progression dans le mode présentateur.

## Configuration

Vous pouvez définir la durée de la présentation dans le headmatter. La valeur par défaut est `30min`.

```yaml
---
# durée de la présentation, par défaut '30min'
duration: 30min
# # Mode minuterie, peut être 'countdown' ou 'stopwatch', par défaut 'stopwatch'
timer: stopwatch
---
```
