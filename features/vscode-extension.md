---
relates:
  - VS Code: https://code.visualstudio.com/
  - View in Marketplace: https://marketplace.visualstudio.com/items?itemName=antfu.slidev
  - View in OVSX: https://open-vsx.org/extension/antfu/slidev
tags: [editor]
description: |
  Vous aider à mieux organiser vos diapositives et en avoir un aperçu rapide.
---

# Extension VS Code

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300" />
    </a>
</p>

<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
</a> &nbsp;
<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
</a>

L'extension VS Code fournit des fonctionnalités pour vous aider à mieux organiser vos diapositives et en avoir un aperçu rapide.

### Fonctionnalités

- Aperçu des diapositives dans le panneau latéral
- Vue arborescente des diapositives avec numéros
- Réorganisation des diapositives par glisser-déposer
- Repli pour les blocs de diapositives
- Support de plusieurs projets de diapositives
- Démarrer le serveur de développement en un clic
- Intégration AI/Copilot via les outils de modèle de langage

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

### Installation

Vous pouvez installer l'extension depuis le [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev) ou l'[Open VSX Registry](https://open-vsx.org/extension/antfu/slidev).

### Utilisation

Cliquez sur l'icône `Slidev` dans la barre d'activités pour ouvrir le **panneau Slidev**. Dans le panneau Slidev, vous pouvez voir la vue arborescente des projets, la vue arborescente des diapositives et l'aperçu webview.

Dans la **vue arborescente des projets**, vous pouvez voir tous les projets Slidev dans votre espace de travail. Vous pouvez cliquer sur l'élément pour ouvrir le fichier correspondant, et cliquer sur l'icône <codicon-eye /> au-dessus pour basculer le projet actif. L'icône <codicon-add /> vous permet de charger un projet de diapositives qui n'a pas été scanné automatiquement.

Dans la **vue arborescente des diapositives**, vous pouvez voir toutes les diapositives du projet actif. Vous pouvez cliquer sur l'élément pour déplacer votre curseur vers la diapositive dans l'éditeur, et glisser-déposer pour réorganiser les diapositives.

Dans l'**aperçu webview**, vous pouvez cliquer sur l'icône <codicon-run-all /> pour démarrer le serveur de développement et cliquer sur l'icône <codicon-globe /> pour ouvrir les diapositives dans le navigateur. Basculez l'icône <codicon-lock /> pour synchroniser/désynchroniser la navigation de l'aperçu avec le curseur de l'éditeur.

Il existe également des **commandes** que vous pouvez utiliser. Tapez `Slidev` dans la palette de commandes pour les voir.

Vous pouvez ajouter des motifs glob à la configuration `slidev.include` pour inclure des fichiers comme entrées Slidev. La valeur par défaut est `["**/*.md"]`. Exemple :

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

#### Commande Dev {#dev-command}

Vous pouvez personnaliser la commande pour démarrer le serveur de développement en définissant la configuration `slidev.dev-command`. La valeur par défaut est `npm exec -c 'slidev ${args}'`.

La commande configurée peut contenir des espaces réservés :

- `${args}` : Tous les arguments CLI. Par ex. `slides.md --port 3000 --remote`
- `${port}` : Le numéro de port. Par ex. `3000`

Exemples :

- Installation globale : `slidev ${args}`
- Pour les utilisateurs PNPM, vous pouvez la définir sur `pnpm slidev ${args}`.
- Pour les utilisateurs [code-server](https://coder.com/docs/code-server/), vous pouvez la définir sur `pnpm slidev ${args} --base /proxy/${port}/`. Cela rendra le serveur de développement accessible à `http://localhost:8080/proxy/3000/`.

#### Vue arborescente des diapositives {#slides-tree}

> Disponible depuis la v0.52.0

La vue arborescente des diapositives affiche toutes les diapositives de votre présentation avec leurs numéros et titres. Chaque diapositive est affichée comme `{slideNo}. {title}` ce qui facilite la navigation vers des diapositives spécifiques.

#### Intégration AI/Copilot {#ai-integration}

> Disponible depuis la v0.52.0

L'extension fournit des outils de modèle de langage qui permettent au Copilot de VSCode et à d'autres assistants IA d'interagir avec votre projet Slidev. Les outils suivants sont disponibles :

- `slidev_getActiveSlide` - Obtenir des informations sur la diapositive active actuelle et le projet
- `slidev_getSlideContent` - Récupérer le contenu d'une diapositive spécifique par numéro
- `slidev_getAllSlideTitles` - Lister tous les titres des diapositives de la présentation
- `slidev_findSlideNoByTitle` - Trouver un numéro de diapositive par son titre
- `slidev_listEntries` - Lister toutes les entrées de projet Slidev chargées
- `slidev_getPreviewPort` - Obtenir le port du serveur d'aperçu pour un projet
- `slidev_chooseEntry` - Changer l'entrée Slidev active

Ces outils permettent aux assistants IA de vous aider à naviguer, modifier et comprendre vos diapositives plus efficacement.
