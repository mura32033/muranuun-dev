<script setup lang="ts">
defineProps<{
  content?: Object
}>()
const maxSkill = 5
function skillStar(level: number) {
  const stars = []
  for (let i = 0; i < maxSkill; i++) {
    if (i < level) {
      stars.push('★')
    } else {
      stars.push('☆')
    }
  }
  return stars.join('')
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4">
    <div v-for="c in content" class="flex flex-col gap-2 bg-slate-600 rounded p-4">
      <div class="flex flex-col sm:flex-row md:items-center">
        <div class="flex flex-row gap-4 items-center">
          <Icon :name="'vscode-icons:file-type-' + c.icon" class="text-4xl"  />
          <span class="text-base md:text-xl lg:text-2xl font-bold lg:font-normal">{{ c.title }}</span>
        </div>
        <span class="ml-auto text-xs sm:text-sm text-slate-400">{{ skillStar(c.level) }}</span>
      </div>
      <p class="text-sm lg:text-base my-auto" v-if="c.content">{{ c.content }}</p>
    </div>
  </div>
</template>