<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Environment:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        Cette fonction de configuration ne fonctionnera que sur l'environnement Node.js, vous pouvez avoir accès à l'API de Node.
      </span>
      <span v-else>
        Cette fonction de configuration ne fonctionnera que du côté client. Assurez-vous de la compatibilité du navigateur lors de l'importation de packages.
      </span>
    </div>
  </details>
</template>
