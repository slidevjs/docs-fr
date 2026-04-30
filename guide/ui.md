---
outline: deep
---

# Interface utilisateur

## Barre de navigation {#navigation-bar}

En mode Lecture, déplacez votre souris dans le coin inférieur gauche de la page pour voir la barre de navigation.
![](/screenshots/navbar.png)

> Vous pouvez étendre la barre de navigation via <LinkInline link="features/global-layers" />.

## Actions de navigation {#navigation-actions}

| Raccourci clavier                   | Bouton dans la barre de navigation                                                       | Description                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <kbd>f</kbd>                        | <carbon-maximize class="inline-icon-btn"/> <carbon-minimize class="inline-icon-btn"/>   | Basculer en plein écran                                         |
| <kbd>right</kbd> / <kbd>space</kbd> | <carbon-arrow-right class="inline-icon-btn"/>                                           | Animation ou diapositive suivante                               |
| <kbd>left</kbd>                     | <carbon-arrow-left class="inline-icon-btn"/>                                            | Animation ou diapositive précédente                             |
| <kbd>up</kbd>                       | -                                                                                        | Diapositive précédente                                          |
| <kbd>down</kbd>                     | -                                                                                        | Diapositive suivante                                            |
| <kbd>o</kbd>                        | <carbon-apps class="inline-icon-btn"/>                                                  | Basculer la [vue d'ensemble rapide](#quick-overview)            |
| <kbd>d</kbd>                        | <carbon-sun class="inline-icon-btn"/> <carbon-moon class="inline-icon-btn"/>            | Basculer le mode sombre                                         |
| -                                   | <carbon-user-avatar class="inline-icon-btn"/>                                           | Basculer la [vue caméra](../features/recording#camera-view)     |
| -                                   | <carbon-video class="inline-icon-btn"/>                                                 | Démarrer <LinkInline link="features/recording" />               |
| -                                   | <carbon-user-speaker class="inline-icon-btn"/>                                          | Entrer dans le [mode présentateur](#presenter-mode)             |
| -                                   | <carbon-text-annotation-toggle class="inline-icon-btn"/>                                | Basculer <LinkInline link="features/side-editor" />             |
| -                                   | <carbon-document-pdf class="inline-icon-btn"/>                                          | Entrer dans l'[exportateur navigateur](#exporter)               |
| -                                   | <carbon-download class="inline-icon-btn"/>                                              | Télécharger le PDF. Voir <LinkInline link="features/build-with-pdf" /> |
| -                                   | <carbon-information class="inline-icon-btn"/>                                           | Afficher les informations sur les diapositives                   |
| -                                   | <carbon-settings-adjust class="inline-icon-btn"/>                                       | Plus d'options                                                  |
| <kbd>g</kbd>                        | -                                                                                        | Afficher aller à...                                             |

> Vous pouvez [configurer les raccourcis](../custom/config-shortcuts).

## Vue d'ensemble rapide {#quick-overview}

En appuyant sur <kbd>o</kbd> ou en cliquant sur le bouton <carbon-apps class="inline-icon-btn"/> dans la barre de navigation, vous pouvez obtenir un aperçu de vos diapositives pour naviguer facilement entre elles.

![](/screenshots/slides-overview.png)

## Mode présentateur {#presenter-mode}

Pour entrer dans le mode présentateur, vous pouvez cliquer sur le bouton <carbon-user-speaker class="inline-icon-btn"/> dans le panneau de navigation, ou visiter `http://localhost:<port>/presenter`.

Lors d'une présentation, il est recommandé d'ouvrir deux fenêtres de navigateur — une en mode lecture pour l'audience, et une autre en mode présentateur pour vous. Vous pouvez ensuite partager le premier écran avec l'audience et garder le second pour vous.

Chaque fois que vous naviguez dans les diapositives en mode présentateur, toutes les autres pages ouvertes suivront automatiquement cette navigation pour rester synchronisées avec le présentateur.

![](/screenshots/presenter-mode.png)

### Dispositions du présentateur {#presenter-layouts}

> Disponible depuis la v0.50.0

La vue du présentateur propose trois dispositions différentes que vous pouvez parcourir en cliquant sur le bouton de bascule de disposition <carbon-template class="inline-icon-btn"/> dans la barre de navigation :

- **Disposition 1** (par défaut) : Diapositive actuelle affichée en grand en haut, avec les notes et l'aperçu de la diapositive suivante en dessous
- **Disposition 2** : Panneau de notes à gauche, diapositive actuelle et diapositive suivante empilées à droite
- **Disposition 3** : Notes et diapositive actuelle à gauche, aperçu plus grand de la diapositive suivante à droite

Chaque disposition est optimisée pour différentes tailles d'écran et préférences de présentation.

### Miroir d'écran {#screen-mirror}

> Disponible depuis la v0.50.0

Dans la vue du présentateur, vous pouvez basculer la zone de diapositive principale en mode « Miroir d'écran ». Cela vous permet de capturer et afficher un autre moniteur ou fenêtre directement dans la vue du présentateur.

Cliquez sur l'option « Miroir d'écran » dans le contrôle segment de la vue du présentateur, puis sélectionnez l'écran ou la fenêtre que vous souhaitez refléter. C'est utile lorsque vous voulez voir exactement ce que votre audience voit sur le projecteur ou l'écran externe (par ex. codage en direct / démo en direct).

## Aperçu des diapositives {#slides-overview}

> Disponible depuis la v0.48.0

<video src="https://github.com/slidevjs/slidev/assets/11247099/01bbf5b3-f916-4646-9ea4-cf269c0567cb"
controls rounded shadow></video>

Vous pouvez consulter un aperçu de toutes vos diapositives en ouvrant d'abord le [panneau de vue d'ensemble rapide](#quick-overview) puis en cliquant sur <carbon-list-boxes class="inline-icon-btn"/> en haut à droite, ou en visitant directement `http://localhost:<port>/overview`.

La page d'aperçu vous donne une liste linéaire de toutes vos diapositives, avec toutes vos notes sur le côté. Vous pouvez double-cliquer sur les notes pour les modifier directement, et glisser les curseurs de clics pour prévisualiser les étapes de vos diapositives.

## Éditeur de notes {#notes-editor}

> Disponible depuis la v0.52.0

Slidev fournit un éditeur de notes par lot à `http://localhost:<port>/notes-edit` où vous pouvez modifier les notes de toutes les diapositives dans une seule zone de texte.

Les notes de chaque diapositive sont séparées par des marqueurs `--- #[slide-number]`. Les modifications sont automatiquement sauvegardées pendant la saisie avec un délai d'attente.

C'est utile lorsque vous souhaitez écrire ou revoir toutes vos notes de présentateur en un seul endroit sans naviguer entre les diapositives.

## Interface de dessin {#drawing}

Voir :

<LinkCard link="features/drawing" />

## Interface d'enregistrement {#recording}

Voir :

<LinkCard link="features/recording"/>

## Exportateur navigateur {#exporter}

Voir :

<LinkCard link="guide/exporting#browser"/>

## Paramètres {#settings}

Cliquez sur le bouton <carbon-settings-adjust class="inline-icon-btn"/> dans la barre de navigation pour accéder aux paramètres supplémentaires.

### Filtres CSS {#css-filters}

> Disponible depuis la v0.50.0

Lors de présentations sur différents projecteurs ou écrans, les couleurs peuvent apparaître différemment de ce qui est attendu. Slidev fournit des contrôles de filtre CSS pour ajuster l'affichage en temps réel :

- **Inverser** : Inverser toutes les couleurs
- **Luminosité** : Ajuster la luminosité globale (0.5 - 1.5)
- **Contraste** : Ajuster les niveaux de contraste (0.5 - 1.5)
- **Saturation** : Ajuster la saturation des couleurs (0.5 - 1.5)
- **Sépia** : Ajouter un effet de ton sépia
- **Rotation de teinte** : Décaler toutes les couleurs en degrés (-180 à 180)

Ces paramètres sont stockés localement et persistent entre les sessions. Un indicateur point apparaît sur le bouton des paramètres lorsqu'un filtre est actif.

### Masquer le curseur inactif {#hide-idle-cursor}

> Disponible depuis la v0.50.0

Lorsque cette option est activée, le curseur se masque automatiquement après une période d'inactivité pendant la présentation. Cela offre une expérience de visionnage plus propre pour votre audience.

### Échelle des diapositives {#slide-scale}

Choisissez entre le mode « Adapter » (redimensionne les diapositives pour remplir la fenêtre) ou le mode « 1:1 » (affiche les diapositives à leur résolution native).

### Verrouillage écran {#wake-lock}

Lorsque cette option est activée, empêche l'écran de se assombrir ou de se verrouiller pendant votre présentation. Nécessite la prise en charge du navigateur pour l'API Wake Lock.

## Calques globaux {#global-layers}

Vous pouvez ajouter une interface utilisateur personnalisée au-dessus ou en dessous de vos diapositives pour l'ensemble de la présentation ou par diapositive :

<LinkCard link="features/global-layers" />
