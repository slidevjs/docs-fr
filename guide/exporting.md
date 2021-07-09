# Exporter

## PDF

> L'exportation au format PDF ou PNG repose sur [Playwright](https://playwright.dev) pour le rendu. Vous devrez donc installer [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) pour utiliser cette fonctionnalité.
> Si vous effectuez une exportation dans un environnement CI, [le guide du dramaturge CI](https://playwright.dev/docs/ci) peut être utile.

Installez `playwright-chrome`

```bash
$ npm i -D playwright-chromium
```

Exportez maintenant vos diapositives au format PDF à l'aide de la commande suivante

```bash
$ slidev export
```

Après quelques secondes, vos diapositives seront prêtes dans `./slides-exports.pdf`.

### Étapes d'exportation des clics

> Disponible depuis v0.21

<<<<<<< HEAD
Par défaut, Slide export une page par diapositive avec les animations de clics désactivées. Si vous souhaitez exporter des diapositives avec plusieurs étapes dans plusieurs pages, passez l'option `--with-clicks`.
=======
By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` options.
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

```bash
$ slidev export --with-clicks
```

## PNGs

En passant l'option `--format png`, Slidev exportera des images PNG pour chaque diapositive au lieu d'un PDF.

```bash
$ slidev export --format png
```

## Single-Page Application (SPA)

Vous pouvez également créer les diapositives dans un SPA auto-hébergeable :

```bash
$ slidev build
```

L'application générée sera disponible sous `dist/` et vous pourrez ensuite l'héberger sur [Pages GitHub](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou ce que vous voulez. Vous pouvez désormais partager vos diapositives avec le reste du monde avec un seul lien.

### Chemin de base

Pour déployer vos diapositives sous des sous-itinéraires, vous devrez passer l'option `--base`. Par exemple :

```bash
$ slidev build --base /talks/my-cool-talk/
```

Reportez-vous à la [documentation de Vite](https://vitejs.dev/guide/build.html#public-base-path) pour plus de détails.

### Fournir un PDF téléchargeable

<<<<<<< HEAD
Vous pouvez fournir un PDF téléchargeable aux téléspectateurs de votre SPA. Vous pouvez l'activer avec la configuration suivante :
=======
You can provide a downloadable PDF to the viewers of your SPA with the following config:
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

```md
---
download: true
---
```

<<<<<<< HEAD
Maintenant, Slidev générera un fichier pdf avec la construction et un bouton de téléchargement apparaîtra dans le SPA.
=======
Slidev will generate a pdf file along with the build and a download button will be displayed in the SPA.
>>>>>>> 43ba9b5124834bb0357272c915cf70fa0cc52e06

Vous pouvez également fournir une URL personnalisée au PDF. Dans ce cas, le processus de rendu sera ignoré.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

### Exemples

Voici quelques exemples du SPA exporté :

- [Modèle de démarrage](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) par [Anthony Fu](https://github.com/antfu)
