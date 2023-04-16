<script setup lang="ts">
const props = defineProps<{
  slug: string;
}>()
const { slug } = toRefs(props)
const data = await queryContent('articles', slug.value).only(['_path', 'title', 'description']).sort({createdAt: -1}).find()
</script>
<template>
  <div>
    <div class="flex flex-row items-center gap-2">
      <NuxtLink to="/articles">Articles</NuxtLink>
      <span>/</span>
      <span class="text-slate-400 capitalize">{{ slug }}</span>
    </div>
    <Pagetitle :title="slug" />
    <div class="flex flex-col gap-4">
      <articles-ArticleCardGroup :data="data" :slug="slug" />
    </div>
  </div>
</template>