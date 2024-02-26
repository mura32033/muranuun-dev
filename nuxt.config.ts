// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: '%s - むらさん',
      link: [
        {
          rel: 'icon',
          href: '/logo.png'
        }
      ]
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
      preload: ['xml', 'tex']
    }
  },
  plugins: [
    {
      src: '~/plugins/vercel.ts',
      mode: 'client'
    }
  ]
})
