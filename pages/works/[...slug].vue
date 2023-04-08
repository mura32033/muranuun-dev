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
  <div>
    <div class="flex flex-row items-center mb-8">
      <Icon name="mdi:arrow-left" class="mr-2" />
      <NuxtLink to="/works">Back</NuxtLink>
    </div>
    <ContentRenderer :value="data" />
  </div>
</template>