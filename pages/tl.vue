<script setup lang="ts">
const config = useRuntimeConfig()
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(config.supabase.url, config.supabase.key)
const whispers = ref([])

async function getWhispers() {
  const { data } = await supabase.from('whisper').select('*').order('inserted_at', { ascending: false })
  whispers.value = data
}

onMounted(() => {
  getWhispers()
})

useHead({
  title: 'Timeline',
  meta: [
    {
      name: 'description',
      content: 'Timeline'
    }
  ]
})

function formatDate(dateStr) {
  let date = new Date(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // JavaScriptの月は0から始まるため、1を加えます
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();

  // 数値が1桁の場合は先頭に0を付けて2桁にする
  month = ('0' + month).slice(-2);
  day = ('0' + day).slice(-2);
  hour = ('0' + hour).slice(-2);

  return `${year}年${month}月${day}日 ${hour}時${minute}分`;
}

</script>
<template>
  <div>
    <Pagetitle title="Self-Timeline" />
    <p>ブログ記事にするほどでもない独り言を垂れ流します．</p>
    <div class="w-1/2 m-auto my-6 lg:my-12">
      <div class="flex flex-row items-start border border-gray-500 py-6 px-6 border-b-0 last:border-b" v-for="w in whispers" :key="w.id">
        <Icon name="twemoji:wolf" class="text-4xl" />
        <div class="flex flex-col ml-4 w-full">
          <div class="flex flex-row items-end space-x-2">
            <span class="text-2xl font-bold font-kaku">むらさん</span>
            <div class="space-x-1 text-sm text-gray-400">
              <span>@muranuun</span>
              <span>・</span>
              <span>{{ formatDate(w.inserted_at) }}</span>
            </div>
          </div>
          <p class="mt-2">{{ w.content }}</p>
        </div>
      </div>
    </div>
    <p>少しTwitterライクなUIにしてみました．</p>
    <p>データベースにはSupabaseを使っています．</p>
  </div>
</template>