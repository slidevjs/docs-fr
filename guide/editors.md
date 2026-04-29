# Support de l'éditeur

Puisque Slidev utilise Markdown comme entrée source, vous pouvez utiliser TOUS les éditeurs que vous aimez pour l'écrire.

Si vous souhaitez une gestion de haut niveau de vos diapositives, nous avons fourni les intégrations d'éditeur suivantes pour vous !

## Éditeur intégré

Slidev est livré avec un éditeur intégré [CodeMirror](https://codemirror.net/) qui rechargera et enregistrera instantanément les modifications apportées à votre fichier.

Cliquez sur le bouton <carbon-edit class="inline-icon-btn" /> pour l'ouvrir.

![](/screenshots/integrated-editor.png)

## VS Code Extension

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300"/>
    </a>
    <br>
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
    </a>
    &nbsp;
    <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
        <img src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
    </a>
</p>

L'extension VS Code fournit certaines fonctionnalités pour vous aider à mieux organiser vos diapositives et en avoir un aperçu rapide.

### Caractéristiques

- Afficher les diapositives dans le panneau latéral
- Vue arborescente des diapositives
- Réorganiser les diapositives
- Pliage pour blocs coulissants
- Support de projets multiples
- Démarrer le serveur de développement en un clic

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

::: code-group

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

:::

### Installation

Vous pouvez installer l'extension depuis le [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev).

### Utilisation

Cliquez sur l'icône `Slidev` dans la barre d'activités pour ouvrir le **panneau Slidev**. Dans le panneau Slidev, vous pouvez voir la vue arborescente des projets, la vue arborescente des diapositives et la prévisualisation webview.

Dans la **vue arborescente des projets**, vous pouvez voir tous les projets Slidev dans votre espace de travail. Vous pouvez cliquer sur l'élément pour ouvrir le fichier correspondant, et cliquer sur l'icône <codicon-eye /> au-dessus pour changer le projet actif. L'icône <codicon-add /> vous permet de charger un projet de diapositives qui n'a pas été analysé automatiquement.

Dans la **vue arborescente des diapositives**, vous pouvez voir toutes les diapositives du projet actif. Vous pouvez cliquer sur l'élément pour déplacer votre curseur vers la diapositive dans l'éditeur, et faire glisser-déposer pour réorganiser les diapositives.

Dans la **prévisualisation webview**, vous pouvez cliquer sur l'icône <codicon-run-all /> pour démarrer le serveur de développement et cliquer sur l'icône <codicon-globe /> pour ouvrir les diapositives dans le navigateur. Activez l'icône <codicon-lock /> pour synchroniser/désynchroniser la navigation de la prévisualisation avec le curseur de l'éditeur.

Il y a aussi quelques **commandes** que vous pouvez utiliser. Tapez `Slidev` dans la palette de commandes pour les voir.

Vous pouvez ajouter des modèles globaux à la configuration `slidev.include` pour inclure des fichiers en tant qu'entrées Slidev. La valeur par défaut est `["**/*.md"]`. Exemple :

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

## Prettier Plugin

Slidev fournit également un plugin Prettier pour formater vos diapositives. Vous pouvez l'utiliser avec votre éditeur préféré qui prend en charge Prettier. La documentation du plugin se trouve [ici](https://github.com/slidevjs/prettier-plugin).
