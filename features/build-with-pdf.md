---
depends:
  - guide/exporting
  - guide/hosting
relates:
  - CLI export options: /builtin/cli#export
  - Headmatter export options: /custom/#headmatter
tags: [export, build]
description: |
  Générer un PDF téléchargeable avec la construction de vos diapositives.
---

# Générer un PDF lors de la construction

Vous pouvez fournir un PDF téléchargeable dans vos diapositives construites avec la configuration suivante dans le headmatter :

```md
---
download: true
---
```

Slidev générera un fichier PDF lors de la construction, et un bouton de téléchargement sera affiché dans la construction.

Vous pouvez également fournir une URL personnalisée pour le PDF. Dans ce cas, le processus de rendu sera ignoré.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

Cela peut également être fait avec l'option CLI `--download` (`boolean` uniquement).

```bash
$ slidev build --download
```

Lors de l'utilisation de l'option de téléchargement, vous pouvez également fournir les options d'exportation via :

- [Options d'exportation CLI](/builtin/cli#export)
- [Options d'exportation du headmatter](/custom/#frontmatter-configures)
