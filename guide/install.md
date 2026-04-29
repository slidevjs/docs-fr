# Installation

## Modèle de démarrage

> Slidev nécessite [**Node.js >=18.0**](https://nodejs.org/)

Le meilleur moyen de commencer est d'utiliser notre modèle de démarrage officiel :

::: code-group

```bash [npm]
npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Suivez les instructions et il ouvrira le diaporama à `http://localhost:3030/` automatiquement pour vous.

Il contient également une configuration de base ainsi qu'une courte démo avec des instructions sur la façon de commencer avec Slidev.

## Installer manuellement

Si vous préférez installer Slidev manuellement ou si vous souhaitez l'intégrer dans un projet existant, vous pouvez faire :

```bash
npm install @slidev/cli @slidev/theme-default
```

```bash
touch slides.md
```

```bash
npx slidev
```

## Installer globalement

Vous pouvez installer Slidev globalement avec la commande suivante :

> Disponible depuis v0.14

Vous pouvez installer Slidev globalement avec la commande suivante

```bash
npm i -g @slidev/cli
```

Et puis utilisez `slidev` partout sans créer de projet à chaque fois.

```bash
npx slidev
```

Cette commande essaiera également d'utiliser le `@slidev/cli` local s'il a été trouvé dans les `node_modules`.

## Installer sur Docker

Si vous avez besoin d'un moyen rapide d'exécuter une présentation avec des conteneurs, vous pouvez utiliser l'image prédéfinie [docker](https://hub.docker.com/r/stig124/slidev) maintenue par [tangramor](https://github.com/tangramor), ou créez la vôtre.

Exécutez simplement la commande suivante dans votre dossier de travail :

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Note_** : Vous pouvez utiliser `NPM_MIRROR` pour spécifier un miroir npm afin d'accélérer le processus d'installation.

Si votre dossier de travail est vide, il générera un modèle `slides.md` et d'autres fichiers associés sous votre dossier de travail, et lancera le serveur sur le port `3030`.

Vous pouvez accéder à vos diapositives à partir de `http://localhost:3030/`

### Construire des images déployables

Vous pouvez créer votre propre projet slidev en tant qu'image docker avec Dockerfile :

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Créez l'image Docker : `docker build -t myppt .`

Et lancez le conteneur : `docker run --name myslides --rm --user node -p 3030:3030 myppt`

Vous pouvez visiter vos diapositives à partir de `http://localhost:3030/`

### Construire une SPA (Single Page Application) hébergeable

Exécutez `docker exec -i slidev npx slidev build` sur le conteneur en cours d'exécution `slidev`. Il générera des fichiers HTML statiques sous le dossier `dist`.

#### Héberger sur GitHub Pages

Vous pouvez héberger `dist` en tant que site web statique via des services tels que [GitHub Pages](https://tangramor.github.io/slidev_docker/) ou GitLab Pages.

Étant donné que dans GitHub Pages l'URL peut contenir des sous-dossiers, vous pouvez utiliser l'option `--base=/<subfolder>/` pendant le processus de construction, telle que `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Pour éviter le processus de construction Jekyll, vous devrez ajouter un fichier vide `.nojekyll`.

#### Héberger via docker

Vous pouvez également héberger Slidev vous-même via docker :

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Ou créez une image statique avec le Dockerfile suivant :

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Créez l'image docker : `docker build -t mystaticppt .`

Et exécutez le conteneur : `docker run --name myslides --rm -p 80:80 mystaticppt`

Vous pouvez visiter vos diapositives à partir de `http://localhost/`

Référez-vous à [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) pour plus de détails.

## Interface en ligne de commande (CLI)

`@slidev/cli` expose quelques commandes que vous pouvez utiliser avec `npx slidev ...` ou en ajoutant des scripts dans votre `package.json` :

```json
{
  "script": {
    "dev": "slidev"
  }
}
```

Dans ce cas, vous pourrez exécuter `npm run dev`.

Vous pouvez passer des options à n'importe quelle commande :

- les options booléennes sont `true` si elles sont présentes, false sinon (exemple : `slidev --open`)
- certaines options peuvent avoir des valeurs que vous pouvez ajouter juste après l'option ou en utilisant le caractère `=` (exemple : `slidev --port 8080` ou `slidev --port=8080`)

Si vous utilisez des scripts npm, n'oubliez pas d'ajouter `--` après la commande npm :

```bash
npm run slidev -- --open
```

### `slidev [entry]`

Démarrez un serveur local pour Slidev.

- `[entry]` (`string`, défaut : `slides.md`) : chemin d'accès au fichier markdown contenant vos diapositives.

Options :

- `--port`, `-p` (`number`, défaut : `3030`) : numéro de port.
- `--open`, `-o` (`boolean`, défaut : `false`) : ouvrir dans le navigateur.
- `--remote [password]` (`string`) : écouter sur un hôte public et activer le contrôle à distance, si une valeur est passée alors le mode présentateur est privé et accessible uniquement en passant le mot de passe donné dans le paramètre de requête URL `password`.
- `--bind` (`string`, défaut : `0.0.0.0`) : spécifier les adresses IP sur lesquelles le serveur doit écouter en mode distant.
- `--log` (`'error', 'warn', 'info', 'silent'`, défaut : `'warn'`) : niveau de journalisation.
- `--force`, `-f` (`boolean`, défaut : `false`) : forcer l'optimiseur à ignorer le cache et refaire le bundle.
- `--theme`, `-t` (`string`) : remplacer le thème.

### `slidev build [entry]`

Construit une SPA hébergeable.

- `[entry]` (`string`, défaut : `slides.md`) : chemin d'accès au fichier markdown des diapositives.

Options :

- `--out`, `-o` (`string`, défaut : `dist`) : répertoire de sortie.
- `--base` (`string`, défaut : `/`) : URL de base (voir https://cli.vuejs.org/config/#publicpath)
- `--download` (`boolean`, défaut : `false`) : permettre le téléchargement des diapositives en PDF dans la SPA.
- `--theme`, `-t` (`string`) : remplacer le thème.

### `slidev export [entry]`

Exporte les diapositives en PDF (ou autre format). Voir [Exportation](/guide/exporting.html) pour plus de détails.

- `[entry]` (`string`, défaut : `slides.md`) : chemin d'accès à l'entrée markdown des diapositives.

Options :

- `--output` (`string`, défaut : utiliser `exportFilename` (voir https://sli.dev/custom/#frontmatter-configures) ou utiliser `[entry]-export`) : chemin d'accès à la sortie.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, défaut : `'pdf'`) : format de sortie.
- `--timeout` (`number`, défaut : `30000`) : délai d'expiration pour le rendu de la page d'impression (voir https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`) : plages de pages à exporter (exemple : `'1,4-5,6'`).
- `--dark` (`boolean`, défaut : `false`) : exporter en thème sombre.
- `--with-clicks`, `-c` (`boolean`, défaut : `false`) : exporter des pages pour chaque clic (voir https://sli.dev/guide/animations.html#click-animations).
- `--theme`, `-t` (`string`) : remplacer le thème.

### `slidev format [entry]`

Formate le fichier Markdown.

- `[entry]` (`string`, défaut : `slides.md`) : chemin d'accès à l'entrée markdown des diapositives.

### `slidev theme [subcommand]`

Opérations liées au thème.

Sous-commandes :

- `eject [entry]` : Éjecte le thème actuel dans le système de fichiers local
  - `[entry]` (`string`, défaut : `slides.md`) : chemin d'accès à l'entrée markdown des diapositives.
  - Options :
    - `--dir` (`string`, défaut : `theme`) : répertoire de sortie.
    - `--theme`, `-t` (`string`) : remplacer le thème.
