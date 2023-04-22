<script setup lang="ts">
defineProps<{
  way?: string
}>()
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>