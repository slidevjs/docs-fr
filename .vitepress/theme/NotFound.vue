<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="site.base" aria-label="go to home">Retournez à l'accueil</a>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const {site} = useData()
const msgs = [
  'Il n\'y a rien par ici.',
  'Comment sommes-nous arrivé ici ?',
  'On dirait que nous avons des liens rompus.',
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
