<script setup lang="ts">
const props = defineProps<{
  slug: string;
}>()
const { slug } = toRefs(props)
const data = await queryContent('articles', slug.value).only(['_path', 'title', 'description']).sort({createdAt: -1}).find()
</script>
<template>
  <div>
    <articles-breadcrumb />
    <Pagetitle :title="slug" />
    <div class="flex flex-col gap-4">
      <articles-ArticleCardGroup :data="data" :slug="slug" />
    </div>
  </div>
</template>