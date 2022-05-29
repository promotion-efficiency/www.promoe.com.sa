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
            title: 'Promotion Efficiency - Your Hike to PEAK!',
            titleTemplate: '%s | Promotion Efficiency',
            htmlAttrs: {
                lang: 'en',
                ...i18nHead.htmlAttrs
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport',content: 'width=device-width, initial-scale=1'},
                {hid: 'description',name: 'description',content: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement, which makes them create unusual, innovative and out-of-the-box marketing solutions'
                },
                { hid: 'keywords', name: 'keywords',content: 'promotion, efficiency, advertisement, marketing, khobar, eastern, research, design, photography, videography, hike to peak, websites, instagram marketing, snapchat marketing, field marketing, print design'
                },
                {name: 'format-detection',content: 'telephone=no'},
                { name: 'author', content: 'Promotion Efficiency' },
                { name: 'author', type: 'text/plain', href: '/humans.txt' },

                { name: 'og:type', content: 'website' },
                { hid: 'og:title', name: 'og:title', content: 'Promotion Efficiency' },
                { name: 'og:locale', content: 'en_US' },
                { name: 'og:locale:alternate', content: 'ar_SA' },
                { hid: 'og:description', name: 'og:description', content: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement' },
                { hid: 'og:image', name: 'og:image', content: `${this.publicPath}/assets/images/social_icon.png` },
                { name: 'og:url', content: `${this.publicPath}` },
                { name: 'og:site_name', content: 'Promotion Efficiency' },

                { name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: 'Promotion Efficiency' },
                { hid: 'twitter:description', name: 'twitter:description', content: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement' },
                { hid: 'twitter:image', name: 'twitter:image', content: `${this.publicPath}/assets/images/social_icon.png` },
                { name: 'twitter:url', content: `${this.publicPath}` },
                { name: 'twitter:site', content: '@promoefficiency' },
                { name: 'twitter:creator', content: '@promoefficiency' },
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