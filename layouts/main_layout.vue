<template>
  <div>
    <nuxt v-if="!$slots.default" />
    <slot />
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
            title: $t('title'),
            titleTemplate: `%s | ${$t('title')}`,
            htmlAttrs: {
                lang: 'en',
                ...i18nHead.htmlAttrs
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport',content: 'width=device-width, initial-scale=1'},
                {hid: 'description',name: 'description',content: $t('description')},
                {hid: 'keywords', name: 'keywords',content: $t('keywords')},
                {name: 'format-detection',content: 'telephone=no'},
                { name: 'author', content: 'Promotion Efficiency' },
                { name: 'author', type: 'text/plain', href: '/humans.txt' },

                { hid: 'og:type', name: 'og:type', content: 'website' },
                { hid: 'og:title', name: 'og:title', content: $t('title') },
                { hid: 'og:description', name: 'og:description', content: $t('description') },
                { hid: 'og:image', name: 'og:image', content: `${this.publicPath}/assets/images/social_icon.png` },
                { hid: 'og:url', name: 'og:url', content: `${this.publicPath}` },
                { hid: 'og:site_name', name: 'og:site_name', content: 'Promotion Efficiency' },

                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: $t('title') },
                { hid: 'twitter:description', name: 'twitter:description', content: $t('description') },
                { hid: 'twitter:image', name: 'twitter:image', content: `${this.publicPath}/assets/images/social_icon.png` },
                { hid: 'twitter:url', name: 'twitter:url', content: `${this.publicPath}` },
                { hid: 'twitter:site', name: 'twitter:site', content: '@promoefficiency' },
                { hid: 'twitter:creator', name: 'twitter:creator', content: '@promoefficiency' },
                ...i18nHead.meta

            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/svg+xml', href: '/assets/images/logo.svg' },
                { rel: 'icon', type: 'image/png', href: '/ssets/images/logo.png' },
                ...i18nHead.link
            ]
        }
		
	},
}
</script>

<style>

</style>