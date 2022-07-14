# Customisations

Slidev est entièrement personnalisable, du style aux configurations d'outillage. Il vous permet de configurer les outils ci-dessous ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configurations du frontmatter

Vous pouvez configurer Slidev dans le frontmatter de votre première diapositive, ce qui suit montre la valeur par défaut pour chaque option.

```yaml
---
# identifiant du thème ou nom du package
# En savoir plus : https://sli.dev/themes/use.html
thème : 'par défaut'
# titre de votre diapositive, sera automatiquement déduit du premier en-tête s'il n'est pas spécifié
titre : 'Slidev'
# titleTemplate pour la page Web, `%s` sera remplacé par le titre de la page
titleTemplate : '%s - Slidev'
# informations pour vos diapositives, peut être une chaîne de démarquage
infos : faux

# téléchargement de pdf activé dans la version SPA, peut également être une URL personnalisée
téléchargement : faux
# nom de fichier du fichier d'exportation
exportFilename : 'slidev-exported.pdf'
# surligneur de syntaxe, peut être 'prisme' ou 'shiki'
surligneur : 'prisme'
# afficher les numéros de ligne dans les blocs de code
lineNumbers : faux
# activer l'éditeur monaco, peut être booléen, 'dev' ou 'build'
monaco : 'dev'
# télécharger les actifs distants en local à l'aide de vite-plugin-remote-assets, peut être booléen, 'dev' ou 'build'
remoteAssets : faux
# contrôle si les textes des diapositives sont sélectionnables
sélectionnable : vrai
# activer l'enregistrement de diapositives, peut être booléen, 'dev' ou 'build'
enregistrement : 'dev'

# forcer le schéma de couleur pour les diapositives, peut être 'auto', 'clair' ou 'sombre'
schéma de couleurs : 'auto'
# mode routeur pour vue-router, peut être "history" ou "hash"
routerMode : 'historique'
# ratio d'aspect pour les diapositives
rapport d'aspect : '16/9'
# largeur réelle du canevas, unité en px
toileLargeur: 980
# utilisé pour la personnalisation du thème, injectera les styles racine comme `--slidev-theme-x` pour l'attribut `x`
themeConfig :
  primaire : '#5d8392'

# favicon, peut être un chemin de fichier local ou une URL
favicon : 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL du serveur PlantUML utilisé pour afficher les diagrammes
plantUmlServer : 'https://www.plantuml.com/plantuml'
# polices seront automatiquement importées à partir des polices Google
# En savoir plus : https://sli.dev/custom/fonts
polices :
  sans: 'Roboto'
  empattement : 'Roboto Slab'
  mono : 'Fira Code'

# le frontmatter par défaut s'applique à toutes les diapositives
par défaut :
  mise en page : 'par défaut'
  # ...

# options de dessin
# En savoir plus : https://sli.dev/guide/drawing.html
dessins:
  activé : vrai
  persister : faux
  presenterOnly : faux
  syncAll : vrai
---
```

Consultez les [définitions de type](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) pour plus d'options.

## Structure du répertoire

Slidev utilise des conventions de structure de répertoires pour minimiser la surface de configuration et rendre les extensions de fonctionnalités flexibles et intuitives.

Reportez-vous à la section [Structure des répertoires](/custom/directory-structure).

## `vite.config.ts`

Reportez-vous à la section [Configurer Vite](/custom/config-vite).

## `windicss.config.ts`

Reportez-vous à la section [Configurer Windi CSS](/custom/config-windicss).

## Configuration des outils

- [Surligneurs](/custom/highlighters)
- [Configurer Vue](/custom/config-vue)
- [Configurer Vite](/custom/config-vite)
- [Configurer Windi CSS](/custom/config-windicss)
- [Configurer Monaco](/custom/config-monaco)
- [Configurer KaTeX](/custom/config-katex)
- [Configurer Mermaid](/custom/config-mermaid)
