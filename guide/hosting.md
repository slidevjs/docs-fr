# Hébergement statique

## Créer des applications monopage (SPA)

Vous pouvez compiler les diapositives en une SPA auto-hébergée :

```bash
$ slidev build
```

L'application générée sera disponible sous `dist/`.

Vous pouvez tester le build généré en utilisant un serveur web (Apache, NGINX, Caddy... etc.) ou directement dans le projet en exécutant : `npx vite preview`.

Vous pouvez ensuite l'héberger sur [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou tout autre serveur web ou service que vous souhaitez. Vous pouvez maintenant partager vos diapositives avec le reste du monde avec un seul lien.

### Chemin de base

Pour déployer vos diapositives sous des sous-routes, vous devrez passer l'option `--base`. Le chemin `--base` **doit commencer et se terminer** par un slash `/` ; par exemple :

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

Slidev générera un fichier pdf avec le build, et un bouton de téléchargement sera affiché dans la SPA.

Vous pouvez également fournir une URL personnalisée pour le PDF. Dans ce cas, le processus de rendu sera ignoré.

Cela peut également être fait avec l'option CLI `--download` (`boolean` uniquement).

```bash
$ slidev build --download
```

Lorsque vous utilisez l'option de téléchargement, vous pouvez également fournir les options d'exportation :

- En utilisant [les options d'exportation CLI](/guide/exporting.html)
- Ou [les options d'exportation du frontmatter](/custom/#frontmatter-configures)

### Répertoire de sortie

Vous pouvez changer le répertoire de sortie en utilisant `--out`.

```bash
$ slidev build --out mon-dossier-build
```

### Mode watch

En passant l'option `--watch`, le build s'exécutera en mode watch et se reconstruira à chaque changement de la source.

```bash
$ slidev build --watch
```

### Entrées multiples

Vous pouvez compiler plusieurs présentations à la fois.

```bash
$ slidev build slides1.md slides2.md
```

Ou

```bash
$ slidev build *.md
```

Dans ce cas, chaque fichier d'entrée générera un dossier contenant le build dans le répertoire de sortie.

## Exemples

Voici quelques exemples de SPA exportées :

- [Modèle de démarrage](https://sli.dev/demo/starter)
- [Vue composable](https://talks.antfu.me/2021/composable-vue) par [Anthony Fu](https://github.com/antfu)

Pour en savoir plus, consultez [Showcases](/showcases).

## Hébergement

Nous vous recommandons d'utiliser `npm init slidev@latest` pour échafauder votre projet, qui contient les fichiers de configuration nécessaires pour héberger les services prêts à l'emploi.

### Netlify

- [Netlify](https://netlify.com/)

Créez `netlify.toml` dans la racine de votre projet avec le contenu suivant.

```toml
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
```

Ensuite, accédez à votre tableau de bord Netlify et créez un nouveau site avec le repository.

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

Accédez ensuite à votre tableau de bord Vercel et créez un nouveau site avec le repository.

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Pour déployer vos diapositives sur GitHub Pages :

- téléchargez tous les fichiers du projet dans votre repository (c'est-à-dire nommé `name_of_repo`)
- créez `.github/workflows/deploy.yml` avec le contenu suivant pour déployer vos diapositives sur GitHub Pages via GitHub Actions.

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
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /${{github.event.repository.name}}/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- Dans votre repository, allez dans Paramètres > Pages. Sous « Build and deployment », sélectionnez « Github Actions ».
- Enfin, une fois tous les workflows exécutés, un lien vers les diapositives doit apparaître sous Paramètres > Pages.
