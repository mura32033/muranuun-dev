<script setup lang="ts">
  defineProps<{
    content?: Object
  }>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col gap-4 bg-slate-600 rounded p-4">
      <div class="flex flex-col my-auto">
        <h3 class="lg:text-2xl my-auto">{{ c.title }}</h3>
        <div class="flex flex-col mb-auto ml-auto text-xs md:text-sm text-slate-400 text-right">
          <span>{{ c.date }}</span>
          <span>{{ c.place }}</span>
        </div>
      </div>
      <p class="text-sm lg:text-base" v-if="c.content">{{ c.content }}</p>
    </div>
  </div>
</template>