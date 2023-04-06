<script setup lang="ts">
  const route = useRoute()
  useHead({
    title: 'Works',
    meta: [
      {
        name: 'description',
        content: 'Works',
      },
    ],
  })
  const { data } = await useAsyncData('works', () => queryContent('/works').where({id: route.params.slug[0]}).findOne())
</script>
<template>
  <ContentRenderer :value="data" />
</template>