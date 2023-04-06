<script setup lang="ts">
defineProps<{
  way?: string
}>()
</script>

<template>
  <div class="flex flex-row gap-4">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>