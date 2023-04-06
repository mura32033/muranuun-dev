<script setup lang="ts">
  defineProps<{
    content?: Object
  }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col gap-4 border border-slate-400 rounded p-4">
      <div class="flex flex-col my-auto">
        <h3 class="text-2xl">{{ c.status }}</h3>
        <div class="flex flex-col mb-auto ml-auto text-sm text-slate-400 text-right">
          <span>{{ c.certificatedDate }}</span>
          <span>{{ c.certificatedBy }}</span>
        </div>
      </div>
      <p v-if="c.description">{{ c.description }}</p>
    </div>
  </div>
</template>