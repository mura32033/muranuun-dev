<script setup lang="ts">
  defineProps<{
    tag?: Array<string>
  }>()
</script>
<template>
  <div class="flex flex-row gap-2 ml-auto my-2">
    <span v-for="t in tag" :key="t"
      class="inline-block whitespace-nowrap bg-slate-500 text-slate-300 px-1 py-1 rounded-full text-center align-baseline text-xs font-bold leading-none tracking-wider">
      {{ t }}
    </span>
  </div>
</template>