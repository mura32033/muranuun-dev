<script setup lang="ts">
  const route = useRoute()
  const { data } = await useAsyncData('works', () => queryContent('/works').where({id: route.params.slug[0]}).findOne())

  useHead({
    title: data.value.title ? data.value.title : 'Works',
    meta: [
      {
        name: 'description',
        content: 'Works',
      },
    ],
  })
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