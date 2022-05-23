export default {
	target: 'static',

	ssr: false,

    
	head: {
		title: 'Promotion Efficiency - Your Hike to PEAK!',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'a platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement, which makes them create unusual, innovative and out-of-the-box marketing solutions'
			},
            {
				hid: 'keywords',
				name: 'keywords',
				content: 'promotion, efficiency, advertisement, marketing, khobar, eastern, research, design, photography, videography, hike to peak, websites, instagram marketing, snapchat marketing, field marketing, print design'
			},
			{
				name: 'format-detection',
				content: 'telephone=no'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},

	css: [
		'~/assets/scss/main.scss'
	],

	plugins: [{
			src: '~/plugins/bootstrap.client.js'
		},
		{
			src: '~/plugins/countup.client.js'
		}
	],

	components: true,

	buildModules: [
		'@nuxtjs/color-mode'
	],

	modules: [
		'@nuxt/content', '@nuxtjs/i18n',

	],

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

	colorMode: {

	},

	content: {},

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

	build: {

	},

	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	}
}
