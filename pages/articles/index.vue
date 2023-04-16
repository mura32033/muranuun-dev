<script setup lang="ts">
useHead({
  title: 'Articles'
})
const limit = 3
const tech = await queryContent('articles', 'tech').limit(limit).only(['_path', 'title', 'description']).sort({createdAt: -1}).find()
const blog = await queryContent('articles', 'blog').limit(limit).only(['_path', 'title', 'description']).sort({createdAt: -1}).find()
</script>

<template>
  <div>
    <Pagetitle title="Articles" />
    <p>カテゴリごとに最新記事{{ limit }}件を表示しています。</p>
    <div class="flex flex-col gap-8 mt-8">
      <div>
        <NuxtLink to="/articles/tech">
          <h2 class="text-4xl mb-4">Tech <Icon name="mdi:dots-horizontal" size="24" /></h2>
        </NuxtLink>
        <p class="mb-8">技術記事を掲載しています。</p>
        <articles-ArticleCardGroup :data="tech" :slug="'tech'" />
      </div>
      <div>
        <NuxtLink to="/articles/blog">
          <h2 class="text-4xl mb-4">Blog <Icon name="mdi:dots-horizontal" size="24" /></h2>
        </NuxtLink>
        <p class="mb-8">何気ない日常や思ったことを掲載しています。</p>
        <articles-ArticleCardGroup :data="blog" :slug="'blog'" />
      </div>
    </div>

  </div>
</template>
