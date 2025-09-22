<template>
<default-layout>
	<div :class="{ 'privacy-policy-page': isPrivacyPolicy }">
		<!-- header section -->
		<Header />

		<div class="container py-1 py-md-5">
			<div class="row">
				<div class="col">
					<nuxt />
				</div>
			</div>
		</div>

		<!-- contact section -->

		<!-- footer section -->
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
		components: {
			DefaultLayout,
		},
		computed: {
			isPrivacyPolicy() {
				return this.$route && this.$route.name && this.$route.name.includes('pages-slug') && this.$route.params && this.$route.params.slug === 'privacy-policy';
			}
		}
	};
</script>

<style>
/* Force black footer background only on privacy policy page */
.privacy-policy-page footer {
	background-color: #000000 !important;
}
</style>