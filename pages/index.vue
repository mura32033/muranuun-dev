<script setup lang="ts">
useHead({
  title: 'Home Page'
})
</script>

<template>
  <div class="flex flex-col lg:flex-row my-auto mx-auto lg:gap-12 items-center">
    <Pagetitle title="Welcome" />
    <div class="flex flex-col gap-4 text-center lg:text-left text-sm text-slate-400">
      <div class="flex flex-col gap-2">
        <p>こんにちは。</p>
        <p>「むらさん」のポートフォリオサイトへようこそ。</p>
      </div>
      <div class="flex flex-col gap-2">
        <p>犬やオオカミ、サメ、キツネなどの動物が好きです。</p>
        <p>趣味は、音楽鑑賞（ラウドロック系）やYouTube、ゲーム（スプラトゥーン）です。</p>
        <p>JavaScript（特に、Vue/Nuxt）が好きです。</p>
      </div>
      <div>
        <p>このサイトは、Nuxt 3とNuxt Content v2を使って作成し、Vercelでデプロイされています。</p>
      </div>
    </div>
  </div>
</template>