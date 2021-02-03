export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Promotion Efficiency | Your Hike to PEAK!',
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
    'bootstrap-vue/dist/bootstrap-vue.css',
    '@/assets/css/main.scss'
  ],

  plugins: [
    '~plugins/bootstrap-vue',
    // '~plugins/carousel',
    { src: '~plugins/carousel', mode: 'client', ssr: false  },
  ],

  components: true,

  buildModules: [
  ],
  
  env: {
    baseUrl: process.env.BASE_URL || 'https://dev.promoe.com.sa/'
  },
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  build: {
    babel: {
      compact: true
    },
  }
}
