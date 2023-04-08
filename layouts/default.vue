<template>
  <div class="bg-slate-700 text-slate-300 inset-0">
    <div class="flex flex-col min-h-screen mx-4 md:mx-8 lg:mx-auto lg:w-3/4 py-4 lg:py-8">
      <header class="flex flex-col md:flex-row items-center">
        <router-link to="/" exact active-class="disabled"><Logo :width="100" /></router-link>
        <Nav />
      </header>
      <main class="flex flex-col flex-1 my-8 p-4">
        <slot />
      </main>
      <footer class="flex flex-row">
        <p class="mr-auto">&copy; {{ new Date().getFullYear() }} murasan.</p>
        <!-- SNS Icons -->
        <div class="flex flex-row justify-center gap-4">
          <NuxtLink to="https://twitter.com/murasan_tech" target="_blank">
            <Icon name="uil:twitter" size="24" />
          </NuxtLink>
          <NuxtLink to="https://github.com/mura32033" target="_blank">
            <Icon name="uil:github" size="24" />
          </NuxtLink>
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