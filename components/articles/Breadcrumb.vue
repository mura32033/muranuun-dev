<template>
  <div class="flex flex-row items-center capitalize">
    <template v-for="(s, i) in $route.path.substring(1).split('/')">
      <div v-if="i === 0" class="flex flex-row items-center">
        <NuxtLink :to="'/' + s">{{ s }}</NuxtLink>
        <Icon name="mdi:chevron-right" class="mx-2 text-2xl" />
      </div>
      <div v-else-if="$route.path.substring(1).split('/').length > 2 && i === 1" class="flex flex-row items-center">
        <NuxtLink :to="'/articles/' + s">{{ s }}</NuxtLink>
        <Icon name="mdi:chevron-right" class="mx-2 text-2xl" />
      </div>
      <span v-else class="text-slate-400">{{ s }}</span>
    </template>
  </div>
</template>