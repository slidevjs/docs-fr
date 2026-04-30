---
relates:
  - vite-plugin-remote-assets: https://github.com/antfu/vite-plugin-remote-assets
tags: [build]
description: |
  Télécharger et bundler les ressources distantes lors de la construction de vos diapositives.
---

# Bundler les ressources distantes

Comme vous le feriez en markdown, vous pouvez utiliser des images pointant vers une URL distante ou locale.

Pour les ressources distantes, le plugin intégré [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) les mettra en cache sur le disque au premier lancement, garantissant un chargement instantané même pour les grandes images par la suite.

```md
![Remote Image](https://sli.dev/favicon.png)
```

Pour les ressources locales, placez-les dans le [dossier `public`](/custom/directory-structure.html#public) et référez-les avec un **slash initial** (c'est-à-dire `/pic.png`, PAS `./pic.png`, qui est relatif au fichier en cours).

```md
![Local Image](/pic.png)
```

Si vous souhaitez appliquer des tailles ou styles personnalisés, vous pouvez les convertir en balise `<img>` :

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```
