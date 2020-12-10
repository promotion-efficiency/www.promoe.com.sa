export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'requestform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:'stylesheets', 
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap'
      }
    ]
    
  },

  css: [
    '@/assets/css/main.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],

  build: {
  }
}
