<script setup lang="ts">
defineProps<{
  content?: Object
}>()
</script>

<template>
  <div class="ml-4">
    <ol class="relative border-l border-slate-400">
      <li class="mb-2 md:mb-3 ml-4 last:mb-0 last:pb-2" v-for="c in content">
        <div class="absolute w-2 md:w-3 h-2 md:h-3 bg-slate-400 rounded-full mt-2 -left-1 md:-left-1.5">
        </div>
        <time class="mb-1 text-sm leading-none text-slate-400">{{ c.date }}</time>
        <span class="block text-base lg:text-2xl my-auto">{{ c.title }}</span>
        <p class="text-sm lg:text-base mt-2 text-slate-300">{{ c.content }}</p>
      </li>
    </ol>
  </div>
</template>