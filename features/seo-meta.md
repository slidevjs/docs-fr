---
depends:
  - custom/index#headmatter
relates:
  - features/og-image
tags: [SEO, head]
description: |
  Configurer les balises méta SEO pour un meilleur partage sur les réseaux sociaux et l'optimisation pour les moteurs de recherche.
---

# Balises méta SEO

Slidev vous permet de configurer les balises méta SEO dans le headmatter pour améliorer le partage sur les réseaux sociaux et l'optimisation pour les moteurs de recherche. Vous pouvez configurer les balises méta Open Graph et Twitter Card pour contrôler comment vos diapositives apparaissent lorsqu'elles sont partagées sur les plateformes sociales.

## Configuration

Ajoutez la configuration `seoMeta` au frontmatter de votre deck de diapositives :

```yaml
---
# SEO meta tags
seoMeta:
  ogTitle: Slidev Starter Template
  ogDescription: Presentation slides for developers
  ogImage: https://cover.sli.dev
  ogUrl: https://example.com
  twitterCard: summary_large_image
  twitterTitle: Slidev Starter Template
  twitterDescription: Presentation slides for developers
  twitterImage: https://cover.sli.dev
  twitterSite: username
  twitterUrl: https://example.com
---
```

Cette fonctionnalité est propulsée par le hook `useHead` de [unhead](https://unhead.unjs.io/), veuillez vous référer à la [documentation](https://unhead.unjs.io/docs/head/api/composables/use-seo-meta) pour plus de détails.
