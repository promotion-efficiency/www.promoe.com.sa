export default {
	target: 'static',
	ssr: true,

	head: {
		title: 'Promotion Efficiency - Your Hike to PEAK!',
		titleTemplate: '%s | Promotion Efficiency',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
            {hid:'charset', charset: 'utf-8'},
            {name:"theme-color",content:"#006999"},
			{name: 'viewport',content: 'width=device-width, initial-scale=1'},
			{hid: 'description',name: 'description',content: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement, which makes them create unusual, innovative and out-of-the-box marketing solutions'},
			{hid: 'keywords',name: 'keywords',content: 'promotion, efficiency, advertisement, marketing, khobar, eastern, research, design, photography, videography, hike to peak, websites, instagram marketing, snapchat marketing, field marketing, print design'},
			{name: 'format-detection',content: 'telephone=no'},
			{hid: 'author:text',name: 'author',content: 'Promotion Efficiency'},
			{hid: 'author:file',name: 'author',type: 'text/plain',href: '/humans.txt'},
            {hid: 'og:type',name: 'og:type',content: 'website'},
			{hid: 'og:title',name: 'og:title',content: 'Promotion Efficiency'},
			{hid: 'og:description',name: 'og:description',content: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement'},
			{hid: 'og:image',name: 'og:image',content: 'https://www.promoe.com.sa/assets/images/social_icon.png'},
			{hid: 'og:url',name: 'og:url',content: 'https://www.promoe.com.sa'},
			{hid: 'og:site_name',name: 'og:site_name',content: 'Promotion Efficiency'},
            {hid: 'twitter:card',name: 'twitter:card',content: 'summary_large_image'},
			{hid: 'twitter:title',name: 'twitter:title',content: 'Promotion Efficiency'},
			{hid: 'twitter:description',name: 'twitter:description',content: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement'},
			{hid: 'twitter:image',name: 'twitter:image',content: 'https://www.promoe.com.sa/assets/images/social_icon.png'},
			{hid: 'twitter:url',name: 'twitter:url',content: 'https://www.promoe.com.sa'},
			{hid: 'twitter:site',name: 'twitter:site',content: '@promoefficiency'},
			{hid: 'twitter:creator',name: 'twitter:creator',content: '@promoefficiency'},
		],
		link: [
            { hid:'icon:normal', rel: 'icon', href: '/favicon.ico' },
            { hid:'icon:x-icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { hid:'icon:shortcut:x-icon', rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
            { hid:'icon:svg', rel: 'icon', type: 'image/svg+xml', href: '/assets/images/logo.svg' },
            { hid:'icon:png', rel: 'icon', type: 'image/png', href: '/ssets/images/logo.png' },
		]
	},

	css: [
		'~/assets/scss/main.scss'
	],

	plugins: [{
			src: '~/plugins/bootstrap.client.js'
		},
		{
			src: '~/plugins/countup.client.js'
		},
		{
			src: '~/plugins/jsonld'
		},
		{
			src: '~/plugins/snaptr.js', mode: 'client' // Snapchat pixel tracking plugin
		},
	],

	buildModules: [
		'@nuxtjs/color-mode',
		'@luxdamore/nuxt-humans-txt'
	],

	modules: [
		'@nuxt/content',
        '@nuxtjs/i18n',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
	],

    robots: [
        {
          UserAgent: '*',
          Disallow: ['/thanks','/ar/thanks', '/en/thanks']
        }

      ],
	components: true,

	build: {

	},

	generate: {
		async routes() {
			const {
				$content
			} = require('@nuxt/content')

			const files = await $content({
				deep: true
			}).only(['path']).fetch()

			return files.map(file => file.path === '/index' ? '/' : file.path)
		}
	},

	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	},


	i18n: {
		strategy: 'prefix',

		locales: [{
				code: 'en',
				iso: 'en-US',
				file: 'en-US.js',
				dir: 'ltr'
			},
			{
				code: 'ar',
				iso: 'ar-SA',
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

    sitemap: {
        // options
        hostname: "https://www.promoe.com.sa",
        gzip: true,
        i18n: true,
        // nuxt-i18n notation (advanced)
        i18n: {
            locales: ['en', 'ar'],
            routesNameSeparator: '___'
        }

    },

	colorMode: {

	},

	content: {},

	humansTxt: {
		enabled: true,
		hideGenericMessagesInConsole: false, // Disabled in production
		hideErrorsInConsole: false,
		fileName: 'humans.txt',
		fileEncoding: 'utf8',
		link: {
			// Inject `<link type="text/plain" rel="<link.rel>" href="<link.href><filename>" />` inside the `head`
			// Set to `link: false` to disable this behavior
			rel: 'author',
			href: '',
			hid: 'humans-txt',
		},
		keepDevelopersInformations: true, // Keep info of my work in your `humans.txt` file 😍
		// "The internet is for humans"
		thanksTo: [
			'BACKSTAGE',
            {
                key: 'Promotion Efficiency CEO',
                value: 'Adel Omer',
            },
            {
                key: 'From',
                value: 'Khobar, Saudi Arabia',
            },
            {
                key: 'Twitter',
                value: '@promoefficiency',
            },
            {
                key: '6 Degrees',
                value: 'https://www.6d.com.sa',
            },
		],
		site: [
			'SITE',
			{
				key: 'Last update',
				value: new Date().toLocaleDateString(
					'en-US', {
						month: '2-digit',
						day: '2-digit',
						year: 'numeric',
					}
				),
			},
			{
				key: 'Standards',
				value: [
					'HTML5',
					'CSS3',
					'Javascript',
				],
			},
			{
				key: 'Components',
				value: 'VueJs',
			},
			{
				key: 'Software',
				value: 'NuxtJs',
			},
			{
				key: 'Language',
				value: 'English/Arabic',
			},
			{
				key: 'Doctype',
				value: 'HTML5',
			},
		],
	},


}
