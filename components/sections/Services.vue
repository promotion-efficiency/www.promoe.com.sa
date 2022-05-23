<template>
	<section id="services">
		
		<div class="container">
            <Title
			:title="$t('Services')"
			:subtitle="$t('thatyouwillenjoy')"
			divider="divider-black"
		></Title>
			<div class="row row-cols-1 row-cols-md-4 g-4 text-center justify-content-center">
				<Service
					v-for="service of services"
					:key="localePath(service.path)"
					:icon="service.icon"
					:title="service.title"
                    :image="service.featured_image"
					:description="service.description"
                    :link="localePath(service.path)"
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