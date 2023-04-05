<template>
  <div class="font-maru">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all .3s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>