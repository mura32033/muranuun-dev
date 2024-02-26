<script setup lang="ts">
useHead({
  title: 'About'
})
const { data } = await useAsyncData('about', () => queryContent('about/').sort({ order: 1 }).find())
</script>

<template>
  <div>
    <Pagetitle title="About" />
    <div class="md:flex rounded-xl p-6 md:p-4 w-fit mx-auto mb-4">
      <img class="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto md:m-0 object-cover" src="/img/selfie.png" alt="" width="384" height="512">
      <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
        <div class="flex flex-col md:flex-row gap-1 md:gap-4 md:items-baseline font-bold">
          <p class="text-xl md:text-2xl">村田 大河</p>
          <p class="text-slate-400 text-lg">MURATA Taiga</p>
        </div>
        <div class="text-sm md:text-base text-slate-400">
          <p>静岡県浜松市</p>
          <p>静岡大学大学院総合科学技術研究科情報学専攻修士2年</p>
        </div>
      </div>
    </div>
    <div v-for="item in data" :key="item._path" class="mb-8">
      <h2>{{ item.title }}</h2>
      <template v-if="item.title === 'Skill'">
        <about-skill :content="item.body" />
      </template>
      <template v-else-if="item.title === 'Certification'">
        <about-certification :content="item.body" />
      </template>
      <template v-if="item.title === 'Award'">
        <about-award :content="item.body" />
      </template>
      <template v-else-if="item.title === 'Presentation'">
        <about-present :content="item.body" />
      </template>
      <template v-else-if="item.title === 'Publication'">
        <about-publication :content="item.body" />
      </template>
      <template v-else-if="item.title === 'History'">
        <about-history :content="item.body" />
      </template>
    </div>
  </div>
</template>