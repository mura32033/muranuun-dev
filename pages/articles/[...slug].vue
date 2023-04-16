<template>
  <div>
    <div class="flex flex-row items-center gap-2 mb-2">
      <NuxtLink to="/articles" class="flex flex-row items-center text-sm md:text-base">
        Articles
      </NuxtLink>
      <span>/</span>
      <NuxtLink :to="`/articles/${$route.params.slug[0]}`" class="flex flex-row items-center text-sm md:text-base capitalize">
        {{ $route.params.slug[0] }}
      </NuxtLink>
      <span>/</span>
      <span class="text-slate-400">{{ $route.params.slug[1] }}</span>
    </div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <Pagetitle :title="doc.title" />
        <ContentRenderer :value="doc" class="content" />
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style>
  .content {
    @apply text-slate-300;
  }
</style>