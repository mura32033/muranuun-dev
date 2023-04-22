<script setup lang="ts">
defineProps<{
  links?: {
    id: string
    text: string
    depth: number
    children?: {
      id: string
      text: string
      depth: number
    }[]
  }[]
}>()
</script>
<template>
  <div class="mb-8 p-4 rounded bg-slate-600 leading-relaxed">
    <span class="block text-xl font-bold mb-2">この記事に書かれていること</span>
    <ul class="ml-4">
      <template v-for="l in links">
        <template v-if="l.depth === 2">
          <li class="flex flex-row items-center gap-2">
            <Icon name="mdi:circle" size="8" /><a :href="`#${l.id}`">{{ l.text }}</a>
          </li>
        </template>
        <template v-if="l.children">
          <template v-for="c in l.children">
            <template v-if="c.depth === 3">
              <li class="ml-4 flex flex-row items-center gap-2">
                <Icon name="mdi:circle-outline" size="8" /><a :href="`#${c.id}`">{{ c.text }}</a>
              </li>
            </template>
          </template>
        </template>
      </template>
    </ul>
  </div>
</template>
