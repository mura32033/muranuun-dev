<script setup lang="ts">
defineProps<{
  work?: Object
}>()
</script>

<template>
  <NuxtLink :to="'./works/' + work.id"
    class="flex flex-col rounded bg-slate-600 hover:bg-slate-800 hover:border-slate-400 p-4 hover:cursor-pointer">
    <div class="block text-2xl mb-4">{{ work.title }}</div>
    <Work-Tag :tag="work.tags" />
    <p class="text-sm mt-auto">
      {{ work.shortDesc }}
    </p>
  </NuxtLink>
</template>