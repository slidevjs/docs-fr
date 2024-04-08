# Utiliser un Addon

Les addons sont des ensembles de composants supplémentaires, de mises en page, de styles, de configuration, etc. que vous pouvez utiliser dans votre présentation.

Ils sont assez similaires à [themes](/themes/use), mais en général :

<<<<<<< HEAD
* ils n'affectent pas les styles globaux de vos diapositives
* vous pouvez utiliser plusieurs addons dans une présentation
=======
- they don't affect the global styles of your slides
- you can use multiple addons in one presentation
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

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
