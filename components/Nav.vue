<script setup lang="ts">
const links = [
  { to: "/about", text: "About" },
  { to: "/articles", text: "Articles" },
  { to: "/works", text: "Works" },
  { to: "/contact", text: "Contact" },
]
</script>

<template>
  <nav class="flex flex-row gap-4 mt-2 md:ml-auto md:mt-0 text-sm md:text-base">
    <router-link
      v-for="link in links"
      :key="link.text"
      :to="link.to"
      class="hover:font-bold"
      >{{ link.text }}</router-link
    >
  </nav>
</template>