<template>
	<section id="services">
		<Title
			:title="$t('Services')"
			subtitle="THAT YOU'LL DEFINETLY ENJOY"
			divider="divider-black"
		></Title>
		<div class="container">
			<div class="row row-cols-1 row-cols-md-4 g-4 text-center justify-content-center">
				<Service
					v-for="service of services"
					:key="service.createdAt"
					:icon="service.icon"
					:title="service.title"
					:description="service.description"
                    :link="`services/${service.slug}`"
				/>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ["services"],
		mounted() {
		},
	};
</script>

<style>
</style>