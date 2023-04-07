<script setup lang="ts">
defineProps<{
  content?: Object
}>()
</script>

<template>
  <div class="ml-4">
    <ol class="relative border-l border-slate-400">
      <li class="mb-6 ml-4 last:mb-0 last:pb-2" v-for="c in content">
        <div class="absolute w-3 h-3 bg-slate-400 rounded-full mt-2 -left-1.5">
        </div>
        <time class="mb-1 text-sm leading-none text-slate-400">{{ c.date }}</time>
        <h3 class="text-xl font-semibold text-slate-200">{{ c.title }}</h3>
        <p class="mt-2 text-slate-300">{{ c.content }}</p>
      </li>
    </ol>
  </div>
</template>