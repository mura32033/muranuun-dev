<script setup lang="ts">
  defineProps<{
    type?: string
    content?: Object
  }>()
</script>

<template>
  <div class="mb-4">
    <h2 class="mb-4 text-4xl capitalize">{{ type }}</h2>
    <template v-if="type == 'award' || type == 'present'">
      <about-award :content="content" />
    </template>
  </div>
</template>