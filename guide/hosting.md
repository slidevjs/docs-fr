# Hébergement statique

## Créer des applications monopage (SPA)

Vous pouvez également intégrer les diapositives dans une SPA autohébergée :

```bash
$ slidev build
```

L'application générée sera disponible sous `dist/` et vous pourrez ensuite l'héberger sur [Pages GitHub](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), ou ce que vous voulez. Vous pouvez maintenant partager vos diapositives avec le reste du monde avec un seul lien.

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

Slidev générera un fichier pdf avec la construction et un bouton de téléchargement sera affiché dans le SPA.

Vous pouvez également fournir une URL personnalisée au PDF. Dans ce cas, le processus de rendu sera ignoré.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

## Exemples

Voici quelques exemples de SPA exportées :

- [Modèle de démarrage](https://sli.dev/demo/starter)
- [Vue composable](https://talks.antfu.me/2021/composable-vue) par [Anthony Fu](https://github.com/antfu)

Pour en savoir plus, consultez [Showcases](/showcases).

## Hébergement

Nous vous recommandons d'utiliser `npm init slidev@lastest` pour échafauder votre projet, qui contient les fichiers de configuration nécessaires pour héberger les services prêts à l'emploi.

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

Ensuite, accédez à votre tableau de bord Netlify, créez un nouveau site avec le repositorie.

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

Accédez ensuite à votre tableau de bord Vercel, créez un nouveau site avec le repository.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Pour déployer vos diapositives sur GitHub Pages :
- téléchargez tous les fichiers du projet dans votre repository (c'est-à-dire nommé `name_of_repo`)
- créez `.github/workflows/deploy.yml` avec le contenu suivant pour déployer vos diapositives sur GitHub Pages via GitHub Actions. Dans ce fichier, remplacez `<name_of_repo>` par `name_of_repo`.
- 
```yaml
name: Deploy pages
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Install slidev
        run:  npm i -g @slidev/cli
      - name: Build
        run: slidev build --base <name_of_repo>
      - name: Deploy pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
- Dans votre repository, allez dans Paramètres > Pages. Sous « Build and Deployment », sélectionnez « Deploy from a branch », sélectionnez « gh-pages » et « root ». Cliquez sur enregistrer.
- Enfin, une fois tous les flux de travail exécutés, un lien vers les diapositives doit apparaître sous Paramètres > Pages.
