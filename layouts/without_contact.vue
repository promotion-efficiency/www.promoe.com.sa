<template>
	<default-layout>
		<div>
			<!-- header section -->
			<Header />
			<nuxt />
			<Footer />
		</div>
	</default-layout>
</template>

<script>
  import DefaultLayout from '~/layouts/main_layout.vue';

	export default {
		head() {
			return {
				htmlAttrs: {
					lang: this.$i18n.locale
				}
			};
		},
		mounted() {
			//const colorMode = useColorMode()
		},
        components: {
            DefaultLayout,
        },
	};
</script>

<style>
</style>
