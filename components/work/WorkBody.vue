<script setup lang="ts">
  defineProps<{
    work?: Object
  }>()
</script>

<template>
  <div>
    <Pagetitle :title="work.fields.title" />
    <ContentDoc v-slot="work.fields">
      {{ work.fields.title }}
    </ContentDoc>
  </div>
</template>