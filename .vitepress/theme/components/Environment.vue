<script setup lang="ts">
defineProps<{ type: 'node' | 'client' | 'both' }>()
</script>

<template>
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environnement:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'both'">
        Cette fonction de configuration s'exécutera à la fois sur <b>Node.js et côté client</b>. Évitez d'utiliser Node.js ou l'API DOM pour éviter les erreurs d'exécution.
      </span>
      <span v-else-if="type === 'node'">
          Cette fonction de configuration ne fonctionnera que sur l'environnement Node.js, vous pouvez avoir accès à l'API de Node.
      </span>
      <span v-else-if="type === 'client'">
        Cette fonction de configuration ne s'exécutera que côté client. Assurez-vous de la compatibilité du navigateur lors de l'importation de packages.
      </span>
    </div>
  </details>
</template>
