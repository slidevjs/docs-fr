---
depends:
  - guide/ui#navigation-bar
relates:
  - RecordRTC: https://github.com/muaz-khan/RecordRTC
  - WebRTC API: https://webrtc.org/
tags: [presenter, tool]
description: |
  Enregistrer votre présentation avec la vue caméra et la fonctionnalité d'enregistrement intégrées.
---

# Enregistrement

Slidev dispose d'une fonctionnalité intégrée de vue caméra et d'enregistrement. Elles simplifient l'enregistrement de votre présentation sans avoir à basculer entre d'autres outils d'enregistrement pendant la présentation.

## Vue caméra {#camera-view}

Cliquez sur le bouton <carbon-user-avatar class="inline-icon-btn"/> dans la [barre de navigation](../guide/ui#navigation-bar) pour afficher votre vue caméra dans la présentation. Vous pouvez la faire glisser pour la déplacer, et utiliser la poignée dans le coin inférieur droit pour la redimensionner. La taille et la position seront conservées entre les rechargements.

<TheTweet id="1395006771027120133" />

## Commencer l'enregistrement {#start-recording}

Cliquer sur le bouton <carbon-video class="inline-icon-btn"/> dans la [barre de navigation](../guide/ui#navigation-bar) ouvrira une boîte de dialogue. Ici, vous pouvez choisir soit d'enregistrer la sortie de votre caméra intégrée dans vos diapositives, soit de les séparer en deux fichiers vidéo.

Cette fonctionnalité est propulsée par [RecordRTC](https://github.com/muaz-khan/RecordRTC) et utilise l'[API WebRTC](https://webrtc.org/).

![](/screenshots/recording.png)
