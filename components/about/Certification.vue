<script setup lang="ts">
  defineProps<{
    content?: Object
  }>()
</script>

<template>
  <div class="grid grid-cols-3 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col gap-4 border border-slate-400 rounded p-4">
      <div class="flex flex-col my-auto">
        <h3 class="text-2xl">{{ c.title }}</h3>
      </div>
      <p v-if="c.content">{{ c.content }}</p>
    </div>
  </div>
</template>