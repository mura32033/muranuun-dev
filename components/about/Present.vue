<script setup lang="ts">
defineProps<{
  content?: Object
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col border border-slate-400 rounded p-4">
      <h3 class="my-auto text-2xl">{{ c.title }}</h3>
      <div class="flex flex-col ml-auto mt-auto text-sm text-slate-400 text-right self-end">
        <span>{{ c.detail.date }}</span>
        <span>{{ c.detail.place }}</span>
      </div>
    </div>
  </div>
</template>