// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - むらさん'
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'tailwindcss': {},
      'autoprefixer': {}
    }
  },
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt'
  ],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: ['xml']
    }
  }
})
