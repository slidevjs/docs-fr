---
aside: false
---

<script setup>
import AddonGallery from '../.vitepress/theme/components/AddonGallery.vue'
</script>

# Galerie d'addons

Parcourez les addons fantastiques disponibles pour Slidev ici.

En savoir plus sur <LinkInline link="guide/theme-addon#use-addon" /> pour les utiliser, et <LinkInline link="guide/write-addon" /> pour créer votre propre addon.

<!-- ## Official Addons

<ClientOnly>
  <AddonGallery collection="official"/>
</ClientOnly> -->

## Addons communautaires

Voici les addons sélectionnés créés par la communauté.

<!-- Éditer dans ./docs/.vitepress/addons.ts -->
<ClientOnly>
  <AddonGallery collection="community"/>
</ClientOnly>

## Plus d'addons

Retrouvez tous les [addons disponibles sur NPM](https://www.npmjs.com/search?q=keywords%3Aslidev-addon).
