<script setup lang="ts">
function formatDatetime(datetime: string) {
  const date = new Date(datetime)
  return date.toLocaleDateString('ja', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center gap-2 mb-2">
      <NuxtLink to="/articles" class="flex flex-row items-center text-sm md:text-base">
        Articles
      </NuxtLink>
      <span>/</span>
      <NuxtLink :to="`/articles/${$route.params.slug[0]}`"
        class="flex flex-row items-center text-sm md:text-base capitalize">
        {{ $route.params.slug[0] }}
      </NuxtLink>
      <span>/</span>
      <span class="text-slate-400">{{ $route.params.slug[1] }}</span>
    </div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <Pagetitle :title="doc.title" />
        <div class="flex flex-row items-center gap-2 ml-auto mb-8 text-sm lg:text-base text-slate-400">
          <Icon name="mdi:alarm" />
          <span>{{ formatDatetime(doc.createdAt) }}</span>
        </div>
        <div class="p-4 rounded bg-slate-600 mb-8">
          <span class="block text-2xl font-bold mb-4">この記事に書かれていること</span>
          <ul class="ml-4 leading-relaxed">
            <template v-for="l in doc.body.toc.links">
              <template v-if="l.depth === 2">
                <li class="text-xl leading-loose"><a :href="`#${l.id}`">{{ l.text }}</a></li>
              </template>
              <template v-if="l.children">
                <template v-for="c in l.children">
                  <template v-if="c.depth === 3">
                    <li class="ml-4 text-base"><a :href="`#${c.id}`">{{ c.text }}</a></li>
                  </template>
                </template>
              </template>
            </template>
          </ul>
        </div>
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