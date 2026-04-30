---
relates:
  - features/seo-meta
tags: ['SEO', head]
description: |
  Définir l'image Open Graph pour vos diapositives.
---

# Image Open Graph

Slidev vous permet de définir l'image Open Graph via l'option `seoMeta.ogImage` dans le headmatter :

```md
---
seoMeta:
  ogImage: https://url.to.your.image.png
---

# Vos diapositives ici
```

En savoir plus sur les [Balises méta SEO](./seo-meta).

## Image locale

Si vous avez `./og-image.png` à la racine de votre projet, Slidev la prendra comme image Open Graph automatiquement sans aucune configuration.

## Génération automatique

Depuis la v52.1.0, Slidev supporte la génération automatique de l'image Open Graph à partir de la première diapositive.

Vous pouvez définir `seoMeta.ogImage` sur `auto` pour activer cette fonctionnalité.

```md
---
seoMeta:
  ogImage: auto
---
```

Il utilisera [playwright](https://playwright.dev/) pour capturer la première diapositive et la sauvegarder en tant que `./og-image.png` (même chose que `slidev export`). Vous pouvez également commettre l'image générée dans votre dépôt pour éviter la génération automatique. Ou si vous la générez sur CI, vous pourriez également vouloir configurer l'environnement playwright.
