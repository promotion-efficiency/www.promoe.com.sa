export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Promotion Efficiency | Your Hike to PEAK!',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'In an era where marketing is the battleground for brands today, Promotion Efficiency is a platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement, which makes them create unusual, innovative and out-of-the-box marketing solutions that outperform current conventional methods. As we are a 100% owned and run Saudi establishment specializing in marketing and advertising, we understand our surrounding community, their needs, desires, and how they would like to perceive creative marketing content. This allows us to help our local clients grow their businesses and international companies who are expanding to Saudi Arabia. In addition, we work as one team to produce media content, conduct marketing strategies, and then launch it on the most effective advertising platform to deliver your product/service marketing content to the targeted audience.' },
            { hid: 'keywords', name: 'keywords', content: 'promotion, efficiency, advertisement, marketing, research, design, photography, videography, hike to peak, websites, instagram marketing, snapchat marketing, field marketing, print design' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheets',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap'
            },
            {
                rel: 'stylesheets',
                href: 'https://pro.fontawesome.com/releases/v5.15.1/css/all.css',
                integrity: 'sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB',
                crossorigin: 'anonymous'
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
        { src: '~plugins/carousel', mode: 'client', ssr: false },
    ],

    components: true,

    buildModules: [],

    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000/'
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