<template>
  <div>
    <div class="mb-2">
      <NuxtLink to="/articles" class="text-sm md:text-base">
        &larr; Back to articles
      </NuxtLink>
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