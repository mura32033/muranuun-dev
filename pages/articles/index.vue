<script setup lang="ts">
  useHead({
    title: 'Articles'
  })
  const { data } = await useAsyncData('articles', () => queryContent('/articles').find())
</script>

<template>
  <div>
    <Pagetitle title="Articles" />
    <ContentList path="/articles">
      <template v-slot="{ list }">
        <div v-for="article in list" :key="article._path" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ArticleCard :article="article" />
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
