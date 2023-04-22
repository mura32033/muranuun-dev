<script setup lang="ts">
useHead({
  title: 'Works',
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
    <Pagetitle title="Works" />
    <p class="mb-6 lg:mb-12">これまでに作ってきたものをご紹介します。</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ContentList path="/works">
        <template v-slot="{ list }">
          <WorkCard v-for="item in list" :key="item.id" :work="item" />
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>
  </div>
</template>