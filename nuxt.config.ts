// https://nuxt.com/docs/api/configuration/nuxt-config
import 'dotenv/config'
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      titleTemplate: '%s - むらさん'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
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
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: ['xml']
    }
  },
  plugins: [
    {
      src: '~/plugins/vercel.ts',
      mode: 'client'
    }
  ],
  runtimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
})
