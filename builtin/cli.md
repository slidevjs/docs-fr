# Slidev CLI

`@slidev/cli` expose un binaire appelé `slidev` que vous pouvez utiliser pour développer, construire et exporter vos diapositives.

## Prérequis

Pour utiliser la CLI, vous pouvez soit installer `@slidev/cli` globalement, soit l'installer localement dans votre projet Node.js. Si vous avez créé votre projet avec `npm init slidev`, la CLI est déjà installée localement.

::: warning
En général, `npx slidev` n'est pas supporté car le nom du paquet est en fait `@slidev/cli`.
:::

Les options de ligne de commande des commandes suivent les conventions suivantes :

- la valeur de l'option peut être passée après un espace ou un caractère `=` :

  Exemple : `slidev --port 8080` est équivalent à `slidev --port=8080`

- `true` peut être omis pour les options booléennes :

  Exemple : `slidev --open` est équivalent à `slidev --open true`

::: info

Si vous utilisez npm, n'oubliez pas d'ajouter `--` avant les options pour les passer à Slidev :

```bash
npm run slidev -- --remote --port 8080 --open
```

:::

## `slidev [entry]` {#dev}

Démarre un serveur local pour Slidev.

- `[entry]` (`string`, par défaut : `slides.md`) : chemin vers le fichier markdown contenant vos diapositives.

Options :

- `--port`, `-p` (`number`, par défaut : `3030`) : numéro de port.
- `--base` (`string`, par défaut : `/`) : URL de base (voir https://vitejs.dev/config/shared-options.html#base).
- `--open`, `-o` (`boolean`, par défaut : `false`) : ouvrir dans le navigateur.
- `--remote [password]` (`string`) : écouter sur l'hôte public et activer le contrôle à distance, si une valeur est passée alors le mode présentateur est privé et uniquement accessible en passant le mot de passe donné dans le paramètre de requête URL `password`.
- `--bind` (`string`, par défaut : `0.0.0.0`) : spécifie sur quelles adresses IP le serveur doit écouter en mode distant.
- `--log` (`'error', 'warn', 'info', 'silent'`, par défaut : `'warn'`) : niveau de journalisation.
- `--force`, `-f` (`boolean`, par défaut : `false`) : forcer l'optimiseur à ignorer le cache et re-bundler.
- `--theme`, `-t` (`string`) : remplacer le thème.

## `slidev build [entry]` {#build}

Construit une SPA hébergeable. Voir <LinkInline link="guide/hosting" /> pour plus de détails.

- `[entry]` (`string`, par défaut : `slides.md`) : chemin vers le fichier markdown des diapositives.

Options :

- `--out`, `-o` (`string`, par défaut : `dist`) : répertoire de sortie
- `--base` (`string`, par défaut : `/`) : URL de base (voir https://vitejs.dev/config/shared-options.html#base)
- `--download` (`boolean`, par défaut : `false`) : autoriser le téléchargement des diapositives en PDF dans la SPA
- `--theme`, `-t` (`string`) : remplacer le thème
- `--without-notes` (`boolean`, par défaut : `false`) : exclure les notes du présentateur de la SPA

## `slidev export [...entry]` {#export}

Exporte les diapositives en PDF (ou autre format). Voir <LinkInline link="guide/exporting" /> pour plus de détails.

- `[entry]` (`string`, par défaut : `slides.md`) : chemin vers le fichier markdown des diapositives.

Options :

- `--output` (`string`, par défaut : utilise `exportFilename` (voir https://sli.dev/custom/#frontmatter-configures) ou utilise `[entry]-export`) : chemin de sortie.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, par défaut : `'pdf'`) : format de sortie.
- `--timeout` (`number`, par défaut : `30000`) : délai d'attente pour le rendu de la page d'impression (voir https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`) : plages de pages à exporter (exemple : `'1,4-5,6'`).
- `--dark` (`boolean`, par défaut : `false`) : exporter en thème sombre.
- `--with-clicks`, `-c` (`boolean`, par défaut : `false`) : exporter les pages pour chaque animation de clic (voir https://sli.dev/guide/animations.html#click-animation).
- `--theme`, `-t` (`string`) : remplacer le thème.
- `--omit-background` (`boolean`, par défaut : `false`) : supprimer le fond par défaut du navigateur

## `slidev format [entry]` {#format}

Formate le fichier markdown. Notez que cela ne formatera pas le contenu des diapositives, seulement l'organisation du fichier markdown.

- `[entry]` (`string`, par défaut : `slides.md`) : chemin vers le fichier markdown des diapositives.

## `slidev theme [subcommand]` {#theme}

Opérations liées au thème.

Sous-commandes :

- `eject [entry]` : Éjecter le thème actuel dans le système de fichiers local. Voir <LinkInline link="features/eject-theme" />.
  - `[entry]` (`string`, par défaut : `slides.md`) : chemin vers le fichier markdown des diapositives.
  - Options :
    - `--dir` (`string`, par défaut : `theme`) : le répertoire de sortie.
    - `--theme`, `-t` (`string`) : remplacer le thème.
