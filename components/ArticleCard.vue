<script setup lang="ts">
  defineProps<{
    article?: Object
  }>()
</script>

<template>
  <div class="flex flex-col border border-slate-500 rounded hover:cursor-pointer hover:bg-slate-600 hover:border-slate-400">
    <NuxtLink :to="article._path" class="p-4">
      <h2 class="text-2xl mb-2">{{ article.title }}</h2>
      <p class="text-sm pl-4">{{ article.description }}</p>
    </NuxtLink>
  </div>
</template>