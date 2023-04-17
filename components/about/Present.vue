<script setup lang="ts">
defineProps<{
  content?: Object
}>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col gap-4 border border-slate-400 rounded p-4">
      <h3 class="lg:text-2xl my-auto">{{ c.title }}</h3>
      <div class="flex flex-col ml-auto mt-auto text-xs md:text-sm text-slate-400 text-right self-end">
        <span>{{ c.detail.date }}</span>
        <span>{{ c.detail.place }}</span>
      </div>
    </div>
  </div>
</template>