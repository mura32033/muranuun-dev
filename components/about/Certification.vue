<script setup lang="ts">
  defineProps<{
    content?: Object
  }>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col gap-2 border border-slate-400 rounded p-4">
      <div class="flex flex-col my-auto">
        <h3 class="text-base md:text-xl lg:text-2xl font-bold lg:font-normal">{{ c.title }}</h3>
      </div>
      <p class="text-sm lg:text-base" v-if="c.content">{{ c.content }}</p>
    </div>
  </div>
</template>