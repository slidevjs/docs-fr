# Hébergement statique

## Créer des applications monopage (SPA)

Vous pouvez également intégrer les diapositives dans une SPA autohébergée :

```bash
$ slidev build
```

<<<<<<< HEAD
L'application générée sera disponible sous `dist/` et vous pourrez ensuite l'héberger sur [Pages GitHub](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou ce que vous voulez. Vous pouvez maintenant partager vos diapositives avec le reste du monde avec un seul lien.
=======
The generated application will be available under `dist/`.

You can test the generated build using a web server (Apache, NGINX, Caddy...etc.) or in the project you can directly run: `npx vite preview`.

Then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. Now you can share your slides with the rest of the world with a single link.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

### Chemin de base

Pour déployer vos slides sous des sous-routes, vous devrez passer l'option `--base`. Par exemple :

```bash
$ slidev build --base /talks/my-cool-talk/
```

Reportez-vous à la [documentation de Vite](https://vitejs.dev/guide/build.html#public-base-path) pour plus de détails.

### Fournir un PDF téléchargeable

Vous pouvez fournir un PDF téléchargeable aux spectateurs de votre SPA avec la configuration suivante :

```md
---
download: true
---
```

<<<<<<< HEAD
Slidev générera un fichier pdf avec la construction et un bouton de téléchargement sera affiché dans le SPA.

Vous pouvez également fournir une URL personnalisée au PDF. Dans ce cas, le processus de rendu sera ignoré.
=======
Slidev will generate a PDF file along with the build, and a download button will be displayed in the SPA.

You can also provide a custom URL for the PDF. In that case, the rendering process will be skipped.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

<<<<<<< HEAD
## Exemples
=======
This can also be done with the CLI option `--download` (`boolean` only).

```bash
$ slidev build --download
```

When using the download option, you can also provide the export options:

* By using [CLI export options](/guide/exporting.html)
* Or [frontmatter export options](/custom/#frontmatter-configures)

### Output directory

You can change the output directory using `--out`.

```bash
$ slidev build --out my-build-folder
```

### Watch mode

By passing the `--watch` option the build will run in watch mode and will rebuild anytime the source changes.

```bash
$ slidev build --watch
```

### Multiple entries

You can also build multiple slides at once.

```bash
$ slidev build slides1.md slides1.md
```

Or

```bash
$ slidev build *.md
```

In this case, each input file will generate a folder containing the build in the output directory.

## Examples
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

Voici quelques exemples de SPA exportées :

- [Modèle de démarrage](https://sli.dev/demo/starter)
- [Vue composable](https://talks.antfu.me/2021/composable-vue) par [Anthony Fu](https://github.com/antfu)

Pour en savoir plus, consultez [Showcases](/showcases).

## Hébergement

<<<<<<< HEAD
Nous vous recommandons d'utiliser `npm init slidev@lastest` pour échafauder votre projet, qui contient les fichiers de configuration nécessaires pour héberger les services prêts à l'emploi.
=======
We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

### Netlify

- [Netlify](https://netlify.com/)

Créez `netlify.toml` dans la racine de votre projet avec le contenu suivant.

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

<<<<<<< HEAD
Ensuite, accédez à votre tableau de bord Netlify, créez un nouveau site avec le repositorie.
=======
Then go to your Netlify dashboard and create a new site with the repository.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

### Vercel

- [Vercel](https://vercel.com/)

Créez `vercel.json` dans la racine de votre projet avec le contenu suivant.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

<<<<<<< HEAD
Accédez ensuite à votre tableau de bord Vercel, créez un nouveau site avec le repository.
=======
Then go to your Vercel dashboard and create a new site with the repository.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
Pour déployer vos diapositives sur GitHub Pages :
- téléchargez tous les fichiers du projet dans votre repository (c'est-à-dire nommé `name_of_repo`)
- créez `.github/workflows/deploy.yml` avec le contenu suivant pour déployer vos diapositives sur GitHub Pages via GitHub Actions. Dans ce fichier, remplacez `<name_of_repo>` par `name_of_repo`.
- 
=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`.

>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887
```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Install slidev
        run:  npm i -g @slidev/cli

      - name: Build
        run: slidev build --base <name_of_repo>

      - uses: actions/configure-pages@v3

      - uses: actions/upload-pages-artifact@v1
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
```
<<<<<<< HEAD
- Dans votre repository, allez dans Paramètres > Pages. Sous « Build and Deployment », sélectionnez « Deploy from a branch », sélectionnez « gh-pages » et « root ». Cliquez sur enregistrer.
- Enfin, une fois tous les flux de travail exécutés, un lien vers les diapositives doit apparaître sous Paramètres > Pages.
=======
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Deploy from a branch", select "gh-pages" and "root". Click on save.
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887
