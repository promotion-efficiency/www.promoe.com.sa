<template>
	<div>
	  <!-- Google Tag Manager (noscript) -->
	  <noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSTNS9NQ"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>
	  </noscript>
	  <!-- End Google Tag Manager (noscript) -->
  
	  <default-layout>
		<!-- header section -->
		<Header />
  
		<nuxt />
  
		<!-- contact section -->
		<!-- <SectionsContact :title="$t('contactus')" :subtitle="$t('contactussub')" class="py-5 mb-5" /> -->
  
		<!-- footer section -->
		<Footer />
	  </default-layout>
	</div>
  </template>
  
  <script>
  import DefaultLayout from '~/layouts/main_layout.vue';
  
  export default {
	head() {
	  return {
		htmlAttrs: {
		  lang: this.$i18n.locale
		},
		script: [
		  {
			hid: 'gtm-init',
			innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-KSTNS9NQ');`,
			type: 'text/javascript',
			charset: 'utf-8'
		  }
		],
		__dangerouslyDisableSanitizersByTagID: {
		  'gtm-init': ['innerHTML']
		}
	  };
	},
	components: {
	  DefaultLayout,
	  Header: () => import('~/components/Header.vue'),
	  Footer: () => import('~/components/Footer.vue'),
	  // SectionsContact: () => import('~/components/SectionsContact.vue') // Uncomment if used
	}
  };
  </script>
  
  <style>
  </style>
  