<script setup lang="ts">
defineProps<{
  data?: Object,
  slug?: string
}>()
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <articles-ArticleCard v-for="article in data" :key="article._path" :article="article" />
  </div>
</template>