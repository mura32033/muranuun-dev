<template>
  <div class="bg-slate-700 text-slate-300">
    <div class="flex flex-col h-screen w-1/2 mx-auto py-8">
      <header class="flex flex-row items-center">
        <div class="text-4xl font-bold">むらさん</div>
        <nav class="ml-auto">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
      </header>
      <main class="bg-slate-600 text-slate-200 flex-1 my-8 p-4 rounded border border-slate-500 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <slot />
      </main>
      <footer class="text-center">
        <p>&copy; {{ new Date().getFullYear() }} murasan.</p>
      </footer>
    </div>
  </div>
</template>
