export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'js_nuxt_promoe.com.sa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
        '~/assets/scss/main.scss'
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content', '@nuxtjs/i18n',
    
  ],

  i18n: {
    locales: [
        {
          code: 'en',
          iso:'en-US',
          file: 'en-US.js',
          dir: 'ltr'
        },
        {
          code: 'ar',
          iso:'ar-SA',
          file: 'ar-SA.js',
          dir: 'rtl'
        }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',

    vueI18n: {
      fallbackLocale: 'en'
    }
  },
  colorMode: {

  },


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
