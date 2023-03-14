<script setup lang="ts">
  useHead({
    title: 'Home Page'
  })
</script>

<template>
  <div>
    <!-- Welcome -->
    <h1>Welcome to the Vue.js App</h1>
    <!-- Navigation -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>
