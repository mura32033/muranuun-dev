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
    <div class="flex flex-col">
      <div>
        <NuxtLink to="/articles/tech">
          <h2>Tech <Icon name="mdi:dots-horizontal" size="24" /></h2>
        </NuxtLink>
        <p class="mb-8">技術記事を掲載しています。</p>
        <articles-ArticleCardGroup :data="tech" :slug="'tech'" />
      </div>
      <div>
        <h2>Blog</h2>
        <p class="mb-4">何気ない日常や思ったことを掲載しています。</p>
        <NuxtLink to="https://blog.muranuun.dev/" class="flex flex-col flex-1 p-4">
          <div class="flex flex-col border border-slate-500 rounded hover:cursor-pointer hover:bg-slate-600 hover:border-slate-400">
            <div class="flex flex-col flex-1 p-4">
              <span class="block text-xl lg:text-2xl mb-4">むらのブログ</span>
              <p class="text-sm lg:text-base pl-4 mt-auto">ブログは移行しました</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
