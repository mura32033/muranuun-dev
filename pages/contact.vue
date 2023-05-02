<script setup lang="ts">
useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: 'Contact page description'
    }
  ]
})
const contact = [
  {
    name: 'twitter',
    display: '@murasan_tech',
    url: 'https://twitter.com/murasan_tech'
  },
  {
    name: 'mastodon',
    display: '@murasannuun@mstdn.jp',
    url: 'https://mstdn.jp/@murasannuun'
  },
  {
    name: 'github',
    display: 'github/mura32033',
    url: 'https://github.com/mura32033'
  }
]
</script>
<template>
  <div>
    <Pagetitle title="Contact" />
    <div class="space-y-4">
      <NuxtLink v-for="c in contact" class="flex flex-row items-center space-x-4 w-fit hover:underline" :to="c.url" target="_blank">
        <span class="text-xl"><Icon :name="`cib:${c.name}`" /></span>
        <span>{{ c.display }}</span>
      </NuxtLink>
    </div>
    <ContactForm />
    <div>
      <h2>ポリシー</h2>
      <p><NuxtLink class="underline" to="https://muranuun.dev" target="_blank">本サイト</NuxtLink>ならびにmura32033.com下で公開している一部制作物では、Google社提供のアクセス解析ツールであるGoogle Analytics、または、デプロイ先のVercel社のWeb Analyticsを利用しており、データ収集のためにCookieを使用しています。</p>
      <p>ただし、制作物中に別途ポリシーを掲載している場合にはこれに限りません。</p>
      <p>本サイトを利用することにより上記に同意したものとみなします。</p>
      <br>
      <p>詳細は、<NuxtLink class="underline" to="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank">Google アナリティクス利用規約</NuxtLink>・<NuxtLink class="underline" href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank">GOOGLE のサービスを使用するサイトやアプリから収集した情報の GOOGLE による使用</NuxtLink>をご覧ください。</p>
    </div>
  </div>
</template>