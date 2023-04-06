// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    private: {
      CONTENTFUL_SPACE_ID: process.env.CTF_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
    }
  }
})
