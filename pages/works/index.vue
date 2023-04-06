<script setup lang="ts">
  useHead({
    title: 'Works',
    meta: [
      {
        name: 'description',
        content: 'Works',
      },
    ],
  })
</script>
<template>
  <Pagetitle title="Works" />
  <div class="grid grid-cols-3 gap-8">
    <ContentList path="/works">
      <template v-slot="{ list }">
        <div v-for="item in list" :key="item.id" class="flex flex-col border border-slate-500 rounded hover:cursor-pointer hover:bg-slate-600 hover:border-slate-400">
          <WorkCard :work="item" />
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>