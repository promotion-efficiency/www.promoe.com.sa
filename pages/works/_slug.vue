<template>
	<article class="pb-5 mb-5">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item" aria-current="page">
					<a href="/">{{ $t('Home') }}</a>
				</li>
				<li class="breadcrumb-item" aria-current="page">
					<a href="/#works">{{ $t('Works') }}</a>
				</li>
			</ol>
		</nav>

		<h1 class="pb-3 border-bottom mb-3">{{ works.title }}</h1>

		<div class="row row-cols-1 row-cols-md-2">
			<div v-if="works.featured_image" class="col-md-4"><img class="contained-image" loading="lazy" style="height:auto;" :src="`https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/${works.featured_image}`" :alt="works.title" /></div>
			<div v-if="works.images" class="col col-md-8">
				<div class="row row-cols-4 g-1">
					<div v-for="sample of works.images" :key="sample" class="work col bg-light">
						<div class="ratio ratio-1x1">
							<div class="d-flex justify-content-center align-items-center">
								<img class="contained-image" loading="lazy" v-if="sample" :src="`https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/${sample}`" :alt="sample" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<nuxt-content class="mt-4" :document="works" />

		<SectionsContact title="Liked this Work?" subtitle="Lets Make a Better One Together" class="pt-5 mt-5" />
	</article>
</template>

<script>
	export default {
		layout: 'article',
		async asyncData({ $content, params, app }) {
			const works = await $content(app.i18n.locale, 'works', params.slug).fetch();
			return {
				works
			};
		},
		data() {
			return {
				publicPath: process.env.baseUrl
			};
		},
		head() {
			return {
				title: this.works.title,
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: this.works.description
					},
					{ hid: 'og:title', name: 'og:title', content: this.works.title },
					{ hid: 'og:description', name: 'og:description', content: this.works.description },
					{ hid: 'og:image', name: 'og:image', content: `https://sixdegz.mo.cloudinary.net/promoe/ssets/images/works/${this.works.featured_image}` },

					{ hid: 'twitter:title', name: 'twitter:title', content: this.works.title },
					{ hid: 'twitter:description', name: 'twitter:description', content: this.works.description },
					{ hid: 'twitter:image', name: 'twitter:image', content: `https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/${this.works.featured_image}` },
				]
			};
		}
	};
</script>