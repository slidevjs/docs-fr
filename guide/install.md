# Installation

## Modèle de démarrage

> Slidev nécessite [**Node.js> = 14.0**](https://nodejs.org/)

La meilleure façon de commencer est d'utiliser notre modèle de démarrage officiel.

Avec NPM:

```bash
$ npm init slidev@latest
```

Avec Yarn:

```bash
$ yarn create slidev@latest
```

Suivez les invites et il ouvrira le diaporama à http://localhost:3030/ automatiquement pour vous.

Il contient également la configuration de base et une courte démo avec des instructions sur la façon de démarrer avec Slidev.

## Installer manuellement

Si vous préférez toujours installer Slidev manuellement ou souhaitez l'intégrer dans vos projets existants, vous pouvez faire:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Veuillez noter que si vous utilisez [pnpm](https://pnpm.io), vous devrez activer l'option [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) pour que Slidev fonctionne correctement :
>
> ```bash
> echo 'shamefully-flatten=true' >> .npmrc
> ```

## Installer sur Docker

Si vous avez besoin d'un moyen rapide d'exécuter une présentation avec des conteneurs, vous pouvez utiliser l'image prédéfinie [docker](https://hub.docker.com/r/stig124/slidev) maintenue par [stig124](https://github.com/Stig124), ou créez le vôtre.

Reportez-vous au [slidevjs/container repo](https://github.com/slidevjs/container) pour plus de détails.
