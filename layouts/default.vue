<template>
  <div class="bg-slate-700 text-slate-300">
    <div class="flex flex-col min-h-screen mx-4 md:w-3/4 md:mx-auto py-4 md:py-8">
      <header class="flex flex-col md:flex-row items-center">
        <router-link to="/" exact><Logo :width="100" /></router-link>
        <Nav />
      </header>
      <main class="flex flex-col flex-1 my-8 p-4">
        <slot />
      </main>
      <footer class="text-center">
        <p>&copy; {{ new Date().getFullYear() }} murasan.</p>
      </footer>
    </div>
  </div>
</template>

<style>
  a.router-link-active {
    @apply font-semibold border-b border-b-slate-400;
  }
</style>