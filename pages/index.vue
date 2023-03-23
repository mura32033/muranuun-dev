<script setup lang="ts">
  useHead({
    title: 'Home Page'
  })
  definePageMeta({
    layout: false
  })
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-700 text-slate-300 p-8">
    <div class="flex flex-col justify-center flex-1 mx-auto">
      <Logo :width="200" />
      <Pagetitle>muranuun.dev</Pagetitle>
      <p>Welcome to muranuun.dev</p>
      <div class="mx-auto my-16">
        <Nav />
      </div>
    </div>
  </div>
</template>
