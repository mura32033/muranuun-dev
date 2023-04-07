<script setup lang="ts">
  useHead({
    title: 'About'
  })
  const { data } = await useAsyncData('about', () => queryContent('about/').sort({ order: 1 }).find())
</script>

<template>
  <div>
    <Pagetitle title="About" />
    <div v-for="item in data" :key="item._path" class="mb-8">
      <h1 class="text-4xl mb-4">{{ item.title }}</h1>
      <template v-if="item.title === 'Skill'">
        <about-skill :content="item.body" />
      </template>
      <template v-else-if="item.title === 'Certification'">
        <about-certification :content="item.body" />
      </template>
      <template v-if="item.title === 'Award'">
        <about-award :content="item.body" />
      </template>
      <template v-else-if="item.title === 'Presentation'">
        <about-present :content="item.body" />
      </template>
      <template v-else-if="item.title === 'Publication'">
        <about-publication :content="item.body" />
      </template>
      <template v-else-if="item.title === 'History'">
        <about-history :content="item.body" />
      </template>
    </div>
  </div>
</template>