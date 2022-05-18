<template>
	<div>
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
</template>

<script>
	export default {
		head() {
			return this.$nuxtI18nHead({ addSeoAttributes: true })
		}
	};
</script>

<style>
</style>