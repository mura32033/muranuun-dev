<script setup lang="ts">
  defineProps<{
    article?: Object
  }>()
</script>

<template>
  <div class="flex flex-col border border-slate-500 rounded hover:cursor-pointer hover:bg-slate-600 hover:border-slate-400">
    <NuxtLink :to="article._path" class="flex flex-col flex-1 p-4">
      <span class="block text-2xl mb-4">{{ article.title }}</span>
      <p class="text-sm pl-4 mt-auto">{{ article.description }}</p>
    </NuxtLink>
  </div>
</template>