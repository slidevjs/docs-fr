# Écrire un Addon

> Disponible depuis v0.32.1

## Aptitude

Un addon peut contribuer aux points suivants :

- Styles globaux (à utiliser avec prudence c'est plus le rôle de [themes](/themes/use))
- Fournir des mises en page personnalisées ou remplacer celle existante
- Fournir des composants personnalisés ou remplacer celui existant
- Étendre les configurations Windi CSS
- Configurer des outils comme Monaco et Prism

## Conventions

Les addons sont publiés dans le registre npm et doivent suivre les conventions ci-dessous :

- Le nom du package doit commencer par `slidev-addon-`, par exemple : `slidev-addon-awesome`
- Ajoutez `slidev-addon` et `slidev` dans le champ `keywords` de votre `package.json`

## Installer

### Initialisation

Pour créer votre addon, commencez par créer un répertoire avec créer un fichier `package.json` (vous pouvez utiliser `npm init`).

Ensuite, installez les dépendances slidev :

```bash
$ npm install -D @slidev/cli
```

### Essai

Pour configurer le terrain de jeu de test pour votre addon, vous pouvez créer un fichier `example.md` avec du contenu.

Et éventuellement, vous pouvez également ajouter des scripts à votre `packages.json`

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Pour publier votre addon, lancez simplement `npm publish et vous êtes prêt à partir. Aucun processus de construction n'est requis (ce qui signifie que vous pouvez publier directement les fichiers `.vue` et `.ts`, Slidev est assez intelligent pour les comprendre).

Les points de contribution supplémentaires suivent les mêmes conventions que la personnalisation locale, veuillez vous référer à [la documentation pour les conventions de nommage](/custom/).

## Métadonnées complémentaires

### Version Diapositive

Si l'addon s'appuie sur une fonctionnalité spécifique de Slidev qui vient d'être introduite, vous pouvez définir la version minimale de Slidev requise pour que votre addon fonctionne correctement :

```json
// package.json
{
  "engines": {
    "slidev": ">=0.32.1"
  }
}
```

Si les utilisateurs utilisent des versions plus anciennes de Slidev, une erreur sera générée.
