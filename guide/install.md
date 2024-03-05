# Installation

## Modèle de démarrage

<<<<<<< HEAD
> Slidev nécessite [**Node.js> = 14.0**](https://nodejs.org/)
=======
> Slidev requires [**Node.js >=18.0**](https://nodejs.org/)
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

La meilleure façon de commencer est d'utiliser notre modèle de démarrage officiel.

<<<<<<< HEAD
Avec NPM :
=======
::: code-group
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```bash [npm]
npm init slidev@latest
```

<<<<<<< HEAD
Avec Yarn :

```bash
$ yarn create slidev
```

Suivez les invités et il ouvrira le diaporama à `http://localhost:3030/` automatiquement pour vous.
=======
```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Il contient également la configuration de base et une courte démo avec des instructions sur la façon de démarrer avec Slidev.

## Installer manuellement

Si vous préférez toujours installer Slidev manuellement ou souhaitez l'intégrer dans vos projets existants, vous pouvez faire :

```bash
<<<<<<< HEAD
$ npm install @slidev/cli @slidev/theme-défaut 
=======
npm install @slidev/cli @slidev/theme-default
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
```
```bash
touch slides.md
```
```bash
npx slidev
```

<<<<<<< HEAD
> Veuillez noter que si vous utilisez [pnpm](https://pnpm.io), vous devrez activer l'option [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) pour que Slidev fonctionne correctement :
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Installer globalement
=======
## Install Globally
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Vous pouvez installer SLidev globallement avec la commande suivante :

> Disponible depuis v0.14

Vous pouvez installer Slidev globalement avec la commande suivante

```bash
npm i -g @slidev/cli
```

Et puis utilisez `slidev` partout sans créer de projet à chaque fois.

```bash
npx slidev
```

Cette commande essaiera également d'utiliser local `@slidev/cli` s'il a été trouvé dans les `node_modules`.

## Installer sur Docker

Si vous avez besoin d'un moyen rapide d'exécuter une présentation avec des conteneurs, vous pouvez utiliser l'image prédéfinie [docker](https://hub.docker.com/r/stig124/slidev) maintenue par [tangramor](https://github.com/tangramor), ou créez le vôtre.

Exécutez simplement la commande suivante dans votre dossier de travail :

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

<<<<<<< HEAD
Si votre dossier de travail est vide, il générera un modèle `slides.md` et d'autres fichiers associés sous votre dossier de travail, et lancera le serveur sur le port `3030`.
=======
If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Vous pouvez accéder à vos diapositives à partir de `http://localhost:3030/`

<<<<<<< HEAD

### Créer une image déployable
=======
### Build deployable image
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Ou vous pouvez créer votre propre projet slidev sur une image docker avec Dockerfile :

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Créez l'image Docker : `docker build -t myppt .`

Et lancez le conteneur : `docker run --name myslides --rm --user node -p 3030:3030 myppt`

Vous pouvez visiter vos diapositives à partir de `http://localhost:3030/`

<<<<<<< HEAD

### Construire une SPA hébergeable (application monopage)
=======
### Build hostable SPA (Single Page Application)
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Exécutez la commande `docker exec -i slidev npx slidev build` sur le conteneur en cours d'exécution `slidev`. Il générera des fichiers HTML statiques sous le dossier `dist`.

<<<<<<< HEAD

#### Héberger sur Github Page

Vous pouvez héberger `dist` dans un site Web statique tel que [Github Pages](https://tangramor.github.io/slidev_docker/) ou des pages Gitlab.
=======
#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Parce que dans les pages Github, l'URL peut contenir un sous-dossier, vous devez donc modifier le `index.html` généré pour changer `href="/assets/xxx` en `href="./assets/xxx`. Ou vous pouvez utiliser l'option `--base=/<sous-dossier>/` pendant le processus de construction, comme : `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Et pour éviter le processus de construction de Jekyll, vous devez ajouter un fichier vide `.nojekyll`.

<<<<<<< HEAD

#### Hébergé par docker
=======
#### Host by docker
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Vous pouvez également l'héberger par vous-même avec docker :

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

Reportez-vous au [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) pour plus de détails.

## Command Line Interface (CLI)

`@slidev/cli` Exposez quelques commandes que vous pouvez utiliser avec `npx slidev ...` ou en ajoutant des scripts dans votre `package.json` :
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

Dans ce cas, vous pourrez exécuter `npm run dev`.

Vous pouvez passer des options à n'importe quelle commande :

* les options booléennes sont `true` si elles sont présentes, false sinon (exemple : `slidev --open`)
* certaines options peuvent avoir des valeurs que vous pouvez ajouter juste après l'option ou en utilisant le caractère `=` (exemple : `slidev --port 8080` ou `slidev --port=8080`)

Si vous utilisez des scripts npm, n'oubliez pas d'ajouter `--` après la commande npm :
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Démarrez un serveur local pour Slidev.

* `[entry]` (`string`, défaut : `slides.md`): chemin d'accès à l'entrée des diapositives markdown.

Options:

<<<<<<< HEAD
* `--port`, `-p` (`number`, défaut : `3030`): numéro de port.
* `--open`, `-o` (`boolean`, défaut : `false`): ouvrir dans le navigateur.
* `--remote [password]` (`string`): écouter l'hôte public et activer le contrôle à distance, si une valeur est transmise, le mode présentateur est privé et accessible uniquement en transmettant le mot de passe donné dans le paramètre `password` de la requête d'URL.
* `--log` (`'error', 'warn', 'info', 'silent'`, défaut : `'warn'`): niveau de log.
* `--force`, `-f` (`boolean`, défaut  `false`): forcer l'optimiseur à ignorer le cache et à regrouper.
* `--theme`, `-t` (`string`): thème de remplacement.
=======
* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--bind` (`string`, default: `0.0.0.0`): specify which IP addresses the server should listen on in the remote mode.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default: `false`): force the optimizer to ignore the cache and re-bundle.
* `--theme`, `-t` (`string`): override theme.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

### `slidev build [entry]`

Construire une SPA hébergeable.

* `[entry]` (`string`, défaut : `slides.md`): chemin d'accès à l'entrée des diapositives markdown.

Options:

* `--watch`, `-w` (`boolean`, défaut : `false`): build watch.
* `--out`, `-o` (`string`, défaut : `dist`): rép. de sortie
* `--base` (`string`, défaut : `/`): URL de base (voir https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, défaut : `false`): permettent de télécharger les diapositives au format PDF à l'intérieur du SPA.
* `--theme`, `-t` (`string`): thème de remplacement.

### `slidev export [entry]`

Exportez les diapositives au format PDF (ou autre format).

* `[entry]` (`string`, défaut : `slides.md`): chemin d'accès à l'entrée des diapositives markdown.

Options:

<<<<<<< HEAD
* `--output` (`string`, défaut : use `exportFilename` (voir https://sli.dev/custom/#frontmatter-configures) ou utiliser `[entry]-export`): chemin vers la sortie.
* `--base` (`'pdf', 'png', 'md'`, défaut : `'pdf'`): format de sortie.
* `--timeout` (`number`, défaut : `30000`): délai d'attente pour le rendu de la page d'impression (voir https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): plages de pages à exporter (exemple : `'1,4-5,6'`).
* `--dark` (`boolean`, défaut : `false`): exporter en tant que thème sombre.
* `--with-clicks`, `-c` (`boolean`, défaut : `false`): exporter des pages pour chaque clic (voir https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): thème de remplacement.
=======
* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--format` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

### `slidev format [entry]`

Formatez le fichier Markdown.

* `[entry]` (`string`, défaut : `slides.md`): chemin d'accès à l'entrée des diapositives markdown.


### `slidev theme [subcommand]`

Opérations liées au thème.

Sous-commandes :

* `eject [entry]`: Éjecter le thème actuel dans le système de fichiers local
  * `[entry]` (`string`, défaut : `slides.md`): chemin d'accès à l'entrée des diapositives markdown.
  * Options:
    * `--dir` (`string`, défaut : `theme`): rép. de sortie
    * `--theme`, `-t` (`string`): thème de remplacement.
