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
			{ hid: 'charset', charset: 'utf-8' },
			{ name: 'theme-color', content: '#006999' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement, which makes them create unusual, innovative and out-of-the-box marketing solutions',
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'promotion, efficiency, advertisement, marketing, khobar, eastern, research, design, photography, videography, hike to peak, websites, instagram marketing, snapchat marketing, field marketing, print design',
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ hid: 'author:text', name: 'author', content: 'Promotion Efficiency' },
			{ hid: 'author:file', name: 'author', type: 'text/plain', href: '/humans.txt' },
			{ hid: 'og:type', name: 'og:type', content: 'website' },
			{ hid: 'og:title', name: 'og:title', content: 'Promotion Efficiency' },
			{
				hid: 'og:description',
				name: 'og:description',
				content:
					'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement',
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: 'https://sixdegz.mo.cloudinary.net/promoe/assets/images/social_icon.png',
			},
			{ hid: 'og:url', name: 'og:url', content: 'https://www.promoe.com.sa' },
			{ hid: 'og:site_name', name: 'og:site_name', content: 'Promotion Efficiency' },
			{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
			{ hid: 'twitter:title', name: 'twitter:title', content: 'Promotion Efficiency' },
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content:
					'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement',
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: 'https://sixdegz.mo.cloudinary.net/promoe/assets/images/social_icon.png',
			},
			{ hid: 'twitter:url', name: 'twitter:url', content: 'https://www.promoe.com.sa' },
			{ hid: 'twitter:site', name: 'twitter:site', content: '@promoefficiency' },
			{ hid: 'twitter:creator', name: 'twitter:creator', content: '@promoefficiency' },
		],
		link: [
			{ hid: 'icon:normal', rel: 'icon', href: '/favicon.ico' },
			{ hid: 'icon:x-icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ hid: 'icon:shortcut:x-icon', rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ hid: 'icon:svg', rel: 'icon', type: 'image/svg+xml', href: 'https://sixdegz.mo.cloudinary.net/promoe/assets/images/logo.svg' },
			{ hid: 'icon:png', rel: 'icon', type: 'image/png', href: 'https://sixdegz.mo.cloudinary.net/promoe/assets/images/logo.png' },
			{ rel: 'preload', href: 'https://sixdegz.mo.cloudinary.net/promoe/assets/images/logo.png' },
			{ rel: 'preload', href: 'https://sixdegz.mo.cloudinary.net/promoe/assets/images/white-logo.png' },
		],
		script: [
			{
				hid: 'gtm-init',
				innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-KSTNS9NQ');`,
				type: 'text/javascript',
				charset: 'utf-8',
			},
			{
				hid: 'tiktok-pixel',
				innerHTML: `!function (w, d, t) {
					w.TiktokAnalyticsObject = t;
					var ttq = w[t] = w[t] || [];
					ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
					ttq.setAndDefer = function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
					for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
					ttq.instance = function(t) {
						for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
						return e;
					};
					ttq.load = function(e,n) {
						var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
						var o = n && n.partner;
						ttq._i = ttq._i || {};
						ttq._i[e] = [];
						ttq._i[e]._u = r;
						ttq._t = ttq._t || {};
						ttq._t[e] = +new Date;
						ttq._o = ttq._o || {};
						ttq._o[e] = n || {};
						var scriptEl = d.createElement("script");
						scriptEl.type = "text/javascript";
						scriptEl.async = true;
						scriptEl.src = r + "?sdkid=" + e + "&lib=" + t;
						var firstScript = d.getElementsByTagName("script")[0];
						firstScript.parentNode.insertBefore(scriptEl, firstScript);
					};
					ttq.load("D0M41UJC77U0TEM7BVH0");
					ttq.page();
				}(window, document, "ttq");`,
				type: 'text/javascript',
				charset: 'utf-8',
			}
		],
		__dangerouslyDisableSanitizersByTagID: {
			'gtm-init': ['innerHTML'],
			'tiktok-pixel': ['innerHTML']
		}
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
		{
			src: '~/plugins/facebook.js', mode: 'client'
		},
		{ src: '~/plugins/gtag-conversion.js', mode: 'client' },
		{ src: '~/plugins/google-analytics.js', mode: 'client' }
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
		'@nuxtjs/google-gtag'
	],

	gtm: {
		id: 'GTM-TWB3BDQ',
		enabled: true
	},

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
		//minify: false,
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

	router: {
		trailingSlash: true,
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
		trailingSlash: true,
		exclude: ['/'],

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
