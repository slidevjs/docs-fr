---
outline: deep
---

# Construction et hébergement

Slidev est conçu pour fonctionner comme un serveur web lorsque vous modifiez ou présentez vos diapositives. Cependant, après la présentation, vous souhaiterez peut-être partager vos diapositives **interactives** avec d'autres. Ce guide vous montrera comment construire et héberger vos diapositives.

## Construire en SPA {#spa}

Vous pouvez construire les diapositives en une [application monopage (SPA)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) statique via la commande suivante :

```bash
$ slidev build
```

Par défaut, les fichiers générés sont placés dans le dossier `dist`. Vous pouvez tester la version construite de vos diapositives en exécutant : `npx vite preview` ou tout autre serveur statique.

### Chemin de base {#base}

Pour déployer vos diapositives sous des sous-routes, vous devez passer l'option `--base`. Le chemin `--base` **doit commencer et se terminer par une barre oblique `/`**. Par exemple :

```bash
$ slidev build --base /talks/my-cool-talk/
```

Consultez la [documentation de Vite](https://vitejs.dev/guide/build.html#public-base-path) pour plus de détails.

### Répertoire de sortie {#output-directory}

Vous pouvez changer le répertoire de sortie avec `--out`.

```bash
$ slidev build --out my-build-folder
```

### Supprimer les notes du présentateur {#without-notes}

Si vous partagez les diapositives construites publiquement et ne souhaitez pas inclure vos notes de présentateur, exécutez la construction avec `--without-notes` :

```bash
$ slidev build --without-notes
```

### Constructions multiples {#multiple-builds}

Vous pouvez construire plusieurs présentations en une seule fois en passant plusieurs fichiers markdown en arguments :

```bash
$ slidev build slides1.md slides2.md
```

Ou si votre shell le supporte, vous pouvez utiliser un modèle glob :

```bash
$ slidev build *.md
```

Dans ce cas, chaque fichier d'entrée générera un dossier contenant la construction dans le répertoire de sortie.

### Exemples {#examples}

Voici quelques exemples de SPA exportés :

- [Diapositives de démo](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) par [Anthony Fu](https://github.com/antfu)
- Plus dans les [Vitrines](../resources/showcases)

### Options {#options}

<LinkCard link="features/build-with-pdf" />
<LinkCard link="features/bundle-remote-assets" />

## Hébergement {#hosting}

Nous recommandons d'utiliser `npm init slidev@latest` pour initialiser votre projet, qui contient les fichiers de configuration nécessaires pour les services d'hébergement prêts à l'emploi.

### GitHub Pages {#github-pages}

Pour déployer vos diapositives sur [GitHub Pages](https://pages.github.com/) via GitHub Actions, suivez ces étapes :

1. Dans votre dépôt, allez dans `Settings` > `Pages`. Sous `Build and deployment`, sélectionnez `GitHub Actions`. (Ne choisissez pas `Deploy from a branch` et ne téléchargez pas le répertoire `dist`, ce qui n'est pas recommandé.)
2. Créez `.github/workflows/deploy.yml` avec le contenu suivant pour déployer vos diapositives sur GitHub Pages via GitHub Actions.

::: details deploy.yml

```yaml
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main, master]

permissions:
  contents: read

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /${{github.event.repository.name}}/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::

3. Commitez et poussez les changements vers votre dépôt. Le workflow GitHub Actions déploiera automatiquement vos diapositives sur GitHub Pages à chaque push sur la branche `main`.
4. Vous pouvez accéder à vos diapositives à l'adresse `https://<username>.github.io/<repository-name>/`.

### Netlify

Créez `netlify.toml` à la racine de votre projet avec le contenu suivant :

::: details netlify.toml

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

:::

Ensuite, allez sur votre [tableau de bord Netlify](https://netlify.com/) et créez un nouveau site avec le dépôt.

### Vercel

Créez `vercel.json` à la racine de votre projet avec le contenu suivant :

::: details vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

:::

Ensuite, allez sur votre [tableau de bord Vercel](https://vercel.com/) et créez un nouveau site avec le dépôt.

### Zephyr Cloud {#zephyr-cloud}

Pour déployer votre présentation Slidev sur [Zephyr Cloud](https://zephyr-cloud.io/), vous pouvez ajouter le support Zephyr à un projet Slidev existant avec :

```bash
npx with-zephyr@latest
```

Ce codemod détecte votre bundler (Slidev utilise Vite) et met à jour votre configuration pour Zephyr Cloud.

Après la configuration, exécutez votre commande de construction habituelle, par exemple :

```bash
npm run build
```

Lorsque la construction s'exécute avec Zephyr activé, votre application est déployée et Zephyr Cloud renvoie une URL de prévisualisation.

::: info
Zephyr Cloud est un peu différent de la plupart des fournisseurs d'hébergement : chaque exécution de `build` déclenche un déploiement.
:::

### Héberger sur Docker {#docker}

Si vous avez besoin d'un moyen rapide d'exécuter une présentation avec des conteneurs, vous pouvez utiliser l'[image Docker](https://hub.docker.com/r/tangramor/slidev) préconstruite maintenue par [tangramor](https://github.com/tangramor), ou construire la vôtre.

::: details Utiliser l'image Docker

Exécutez simplement la commande suivante dans votre dossier de travail :

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Note_** : Vous pouvez utiliser `NPM_MIRROR` pour spécifier un miroir npm pour accélérer le processus d'installation.

Si votre dossier de travail est vide, il générera un modèle `slides.md` et d'autres fichiers associés dans votre dossier de travail, et lancera le serveur sur le port `3030`.

Vous pouvez accéder à vos diapositives depuis `http://localhost:3030/`

Pour créer une image Docker pour vos diapositives, vous pouvez utiliser le Dockerfile suivant :

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Créez l'image Docker : `docker build -t myslides .`

Et exécutez le conteneur : `docker run --name myslides --rm --user node -p 3030:3030 myslides`

Vous pouvez visiter vos diapositives à l'adresse `http://localhost:3030/`

:::
