<script setup lang="ts">
  defineProps<{
    content?: Object
  }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-4 ml-4">
    <div v-for="c in content" class="border border-slate-400 rounded p-4">
      <div class="flex flex-col mb-4">
        <h3 class="text-2xl">{{ c.title }}</h3>
        <div class="flex flex-col ml-auto text-sm text-slate-400 text-right">
          <span>{{ c.detail.date }}</span>
          <span>{{ c.detail.place }}</span>
        </div>
      </div>
    </div>
  </div>
</template>