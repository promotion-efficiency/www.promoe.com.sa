<template>
<default-layout>
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
    };
</script>

<style>
</style>