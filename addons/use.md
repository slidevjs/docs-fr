# Utiliser un Addon

Les addons sont des ensembles de composants supplémentaires, de mises en page, de styles, de configuration, etc. que vous pouvez utiliser dans votre présentation.

Ils sont assez similaires à [themes](/themes/use), mais en général :

* ils n'affectent pas les styles globaux de vos diapositives
* vous pouvez utiliser plusieurs addons dans une présentation

Pour utiliser les addons, vous devez les installer manuellement via :

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

Et ensuite déclarez les addons soit dans votre frontmatter :

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

Ou dans votre fichier `package.json` :

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2"
    ]
  }
}
```
