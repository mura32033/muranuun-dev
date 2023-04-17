<script setup lang="ts">
  defineProps<{
    title: string;
  }>()
</script>
<template>
  <h1 class="capitalize">
    {{ title }}
  </h1>
</template>