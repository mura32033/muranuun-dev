<template>
  <div>
    <div class="mb-2">
      <NuxtLink to="/articles" class="text-sm md:text-base">
        &larr; Back to articles
      </NuxtLink>
    </div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <h1 class="text-5xl mb-8">{{ doc.title }}</h1>
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
  .content h2 {
    @apply text-3xl mb-4;
  }
  .content h3 {
    @apply text-2xl mb-2;
  }
  .content p {
    @apply mb-4 leading-relaxed;
  }
  .content p:last-child {
    @apply mb-0;
  }
</style>