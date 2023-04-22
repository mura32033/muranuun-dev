<template>
  <NuxtLink :to="refinedSrc" target="_blank">
    <img :src="refinedSrc" :alt="alt" :width="width" :height="height" class="mx-auto w-full h-64 md:h-auto md:w-2/3 lg:w-1/2 object-contain">
  </NuxtLink>
</template>

<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})
const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    return withBase(props.src, useRuntimeConfig().app.baseURL)
  }
  return props.src
})
</script>