<template>
	<div>
		<div class="row">
			<div class="col">
				<article class="pb-5 mb-5">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item" aria-current="page"><a href="/">{{ $t('Home') }}</a></li>
							<li class="breadcrumb-item" aria-current="page"><a href="/#services">{{ $t('Services') }}</a></li>
						</ol>
					</nav>

					<h1 class="pb-3 border-bottom mb-3">{{ service.title }}</h1>

					<div class="row">
						<div class="col">
							<img v-if="service.image" :src="require(`~/assets/images/services/${service.image}`)" :alt="service.title" />
							<p class="lead">{{ service.description }}</p>
							<nuxt-content :document="service" />
						</div>
						<div v-if="works.length > 0" class="col col-xl-4">
							<h4 class="fs-5 fw-bold">Sample works of {{ service.title }}</h4>
							<div class="row row-cols-2 g-1">
								<div v-for="work of works" :key="work.createdAt" class="work col bg-light">
									<div class="ratio ratio-1x1">
										<div class="d-flex justify-content-center align-items-center">
											<a :href="localePath(`/works/${work.slug}`)"><img class="contained-image" v-if="work.featured_image" :src="require(`~/assets/images/works/${work.featured_image}`)" :alt="work.title" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>

		<PackageCallout class="rounded-3 bg-primary text-light text-center py-5" v-if="service.packages_link" text="Something to do" buttonText="Lets Go" :link="service.packages_link" />

		<SectionsContact :title="$t('readytojoin')" :subtitle="$t('contactussub')" class="pt-5 mt-5" />
	</div>
</template>

<script>
	import PackageCallout from '../../components/PackageCallout.vue';
	export default {
		layout: 'article',
		async asyncData({ $content, params, app }) {
			const service = await $content(app.i18n.locale, 'services', params.slug).fetch();
			const works = await $content(app.i18n.locale, 'works').where({ service: service.title }).fetch();
			return {
				service,
				works
			};
		},
		components: { PackageCallout }
	};
</script>