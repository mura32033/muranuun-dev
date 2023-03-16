<script setup lang="ts">
  useHead({
    title: 'Articles'
  })
  const { data } = await useAsyncData('articles', () => queryContent('/articles').find())
</script>

<template>
  <div>
    <!-- Welcome -->
    <h1 class="text-3xl">Articles</h1>
    <ContentList path="/articles">
      <template v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <h2 class="text-2xl underline">> {{ article.title }}</h2>
          </NuxtLink>
          <p class="pl-4">{{ article.description }}</p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
