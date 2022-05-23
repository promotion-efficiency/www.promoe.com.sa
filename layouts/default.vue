<template>
	<div>
		<!-- header section -->
		<Header />

		<nuxt />

		<!-- contact section -->
		<SectionsContact :title="$t('contactus')" :subtitle="$t('contactussub')" class="py-5 mb-5" />

		<!-- footer section -->
		<Footer />
	</div>
</template>

<script>
	export default {
		head() {
			return this.$nuxtI18nHead({ addSeoAttributes: true })
		},
		mounted() {
			//const colorMode = useColorMode()

		}
	};
</script>

<style>
</style>