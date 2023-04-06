<script setup lang="ts">
defineProps<{
  text?: string
  url?: string
  type?: string
}>()
</script>

<template>
  <div class="ml-4 inline-block">
    <NuxtLink :to="url" target="_blank" class="inline-block hover:underline">
      <div class="flex flex-row gap-2 items-center">
        <template v-if="type === 'github'">
          <Icon name="mdi:github" size="24" />
        </template>
        <template v-else>
          <Icon name="mdi:open-in-new" size="24" />
        </template>
        <p>{{ text }}</p>
      </div>
    </NuxtLink>
  </div>
</template>