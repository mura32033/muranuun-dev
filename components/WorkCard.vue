<script setup lang="ts">
  defineProps<{
    work?: Object
  }>()
</script>

<template>
  <NuxtLink :to="'./works/' + work.id">
    <div class="flex flex-col p-4">
      <h2 class="text-2xl mb-2">{{ work.title }}</h2>
      <Work-Tag :tag="work.tags" />
      <p class="mt-2 text-sm">
        {{ work.shortDesc }}
      </p>
    </div>
  </NuxtLink>
</template>