# Mode présentateur

Cliquez sur le bouton <carbon-user-speaker class="inline-icon-btn"/> dans le panneau de navigation, ou visitez manuellement `http://localhost:3030/presenter`, pour accéder au mode présentateur. Pour présenter, vous voudrez ouvrir deux fenêtres de navigateur, une pour le présentateur et une pour le public. Généralement, en maximisant la fenêtre du diaporama sur l'écran du projecteur, puis en la contrôlant depuis l'écran de votre portable, c'est comme ça que les gens présentent avec Slidev.

Chaque fois que vous changez de diapositive en mode présentateur, toutes les autres instances de page changeront automatiquement également, pour rester synchronisées avec le présentateur.

![](/screenshots/presenter-mode.png)

## Désactivation

Le mode présentateur est activé par défaut.

Vous pouvez désactiver cette fonctionnalité avec la configuration suivante :

```md
---
presenter: false
---
```

Vous pouvez également l'activer uniquement pour les modes `dev` ou `build` en définissant le mode souhaité dans la configuration :

```md
---
presenter: dev
---
```

Dans ce cas, le mode présentateur ne sera disponible que lors de l'exécution de `slidev` mais pas lors de l'exécution de `slidev build`.

## Accès restreint à distance

Vous pouvez exécuter votre présentation avec un accès distant en lançant `slidev --remote`.

Si vous souhaitez partager vos diapositives avec d'autres personnes mais que vous ne voulez pas qu'elles accèdent au mode présentateur (soit parce que vous avez honte de vos notes de présentateur, soit parce que vous ne voulez pas qu'elles perturbent votre présentation), vous pouvez fournir un mot de passe pour protéger le serveur du présentateur en lançant `slidev --remote=votre_mot_de_passe`.

Dans ce cas, vous devrez fournir le mot de passe lors de l'accès aux routes `/presenter/*`.
