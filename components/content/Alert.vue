<script setup lang="ts">
defineProps<{
  type?: string
}>()
</script>
<template>
  <div :class="`flex flex-row items-center my-4 p-4 text-white border rounded bg-slate-500 border-slate-400 ${type}`">
    <Icon v-if="type === 'error'" name="mdi:alert-circle-outline" size="24" class="mr-8" />
    <Icon v-else-if="type === 'warning'" name="mdi:alert" size="24" class="mr-8" />
    <Icon v-else name="mdi:information-outline" size="24" class="mr-8" />
    <div>
      <slot />
    </div>
  </div>
</template>
<style>
  .warning {
    @apply bg-yellow-500 border-yellow-400 bg-opacity-30 border-opacity-50;
  }
  .error {
    @apply bg-red-500 border-red-400 bg-opacity-50;
  }
  .info {
    @apply bg-slate-500 border-slate-400 bg-opacity-50;
  }
</style>