<template>
  <div>
    <nuxt v-if="!$slots.default" />
    <slot />

	<a style="color: inherit;" href="https://api.whatsapp.com/send?phone=+966566642220&text=أرغب في بدء رحلتي للصعود الى القمة" class="layer_999 float" target="_blank">
		<i class="fa fa-whatsapp my-float"></i>
	</a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.baseUrl,
        }
    },
    head() {
        let i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

        return{
            title: this.$t('title'),
            titleTemplate: `%s | ${this.$t('title')}`,
            htmlAttrs: {
                lang: 'en',
                ...i18nHead.htmlAttrs
            },
			script: [
				{type: 'text/javascript',src: 'https://webforms.pipedrive.com/f/loader'},
				{type: 'text/javascript',src: 'https://www.facebook.com/tr?id=588162316234043&ev=PageView&noscript=1'},
			],
            meta: [
                {hid:'charset', charset: 'utf-8'},
                {name: 'viewport',content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description',content: this.$t('description')},
                {hid: 'keywords', name: 'keywords',content: this.$t('keywords')},
                {name: 'format-detection',content: 'telephone=no'},
                { hid: 'author:text', name: 'author', content: 'Promotion Efficiency' },
                { hid: 'author:file',name: 'author', type: 'text/plain', href: '/humans.txt' },
                { hid: 'og:type', name: 'og:type', content: 'website' },
                { hid: 'og:title', name: 'og:title', content: this.$t('title') },
                { hid: 'og:description', name: 'og:description', content: this.$t('description') },
                { hid: 'og:image', name: 'og:image', content: `${this.publicPath}/assets/images/social_icon.png` },
                { hid: 'og:url', name: 'og:url', content: `${this.publicPath}` },
                { hid: 'og:site_name', name: 'og:site_name', content: this.$t('title') },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: this.$t('title') },
                { hid: 'twitter:description', name: 'twitter:description', content: this.$t('description') },
                { hid: 'twitter:image', name: 'twitter:image', content: `${this.publicPath}/assets/images/social_icon.png` },
                { hid: 'twitter:url', name: 'twitter:url', content: `${this.publicPath}` },
                { hid: 'twitter:site', name: 'twitter:site', content: '@promoefficiency' },
                { hid: 'twitter:creator', name: 'twitter:creator', content: '@promoefficiency' },
                { hid: 'google-site-verification', name:'google-site-verification', content: 'RevNHAr-IfmQDdOeeiyeQy6hVmf7CB8pRF8Zx1qo5G8'},

                ...i18nHead.meta

            ],
            link: [
                { hid:'icon:normal', rel: 'icon', href: '/favicon.ico' },
                { hid:'icon:x-icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { hid:'icon:shortcut:x-icon', rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
                { hid:'icon:svg', rel: 'icon', type: 'image/svg+xml', href: '/assets/images/logo.svg' },
                { hid:'icon:png', rel: 'icon', type: 'image/png', href: '/assets/images/logo.png' },

                ...i18nHead.link
            ]
        }

	},
}
</script>

<style>
.float{
	position:fixed;
	z-index: 999;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	font-size:30px;
	box-shadow: 2px 2px 3px #999;
	text-decoration: none;
}

.my-float{
	margin-top:16px;
}
</style>
