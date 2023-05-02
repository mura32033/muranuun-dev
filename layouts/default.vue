<script setup lang="ts">
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
<template>
  <div class="bg-slate-700 text-slate-300 inset-0">
    <div class="flex flex-col min-h-screen md:mx-8 lg:mx-auto lg:w-3/4 py-4 lg:py-8">
      <header class="flex flex-col md:flex-row items-center">
        <router-link to="/" exact active-class="disabled">
          <Logo :width="100" />
        </router-link>
        <Nav />
      </header>
      <main class="flex flex-col flex-1 my-8 px-4 py-2 md:p-4">
        <slot />
      </main>
      <footer class="flex flex-row text-sm md:text-base px-4">
        <p class="mr-auto">&copy; {{ new Date().getFullYear() }} murasan.</p>
        <!-- SNS Icons -->
        <div class="flex flex-row items-center gap-8">
          <div class="hidden md:flex md:flex-row items-center gap-4">
            <NuxtLink to="https://twitter.com/murasan_tech" target="_blank">
              <Icon name="uil:twitter" class="text-xl" />
            </NuxtLink>
            <NuxtLink to="https://github.com/mura32033" target="_blank">
              <Icon name="uil:github" class="text-xl" />
            </NuxtLink>
          </div>
          <div @click="scrollTop" class="flex flex-row items-center cursor-pointer">
            <Icon name="uil:arrow-up" class="text-xl" />
            <span class="ml-2">Back to top</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
a.router-link-active {
  @apply font-semibold border-b border-b-slate-400;
}
</style>