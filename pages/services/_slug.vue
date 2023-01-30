<template>
	<div>
		<div class="row">
			<div class="col">
				<article class="pb-5 mb-5">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item" aria-current="page">
								<a href="/">{{ $t('Home') }}</a>
							</li>
							<li class="breadcrumb-item" aria-current="page">
								<a href="/#services">{{ $t('Services') }}</a>
							</li>
						</ol>
					</nav>

					<h1 class="pb-3 border-bottom mb-3">{{ service.title }}</h1>

					<div class="row">
						<div class="col">
							<img v-if="service.image" loading="lazy" :src="`https://sixdegz.mo.cloudinary.net/promoe/assets/images/services/${service.image}`" :alt="service.title" />
							<p class="lead">{{ service.description }}</p>
							<nuxt-content :document="service" />
						</div>
						<div v-if="works.length > 0 || service.featured_image" class="col col-xl-4">

							<div v-if="service.featured_image" class="mb-5">
								<img class="contained-image" loading="lazy" :src="`https://sixdegz.mo.cloudinary.net/promoe/assets/images/services/${service.featured_image}`" :alt="service.title" />
							</div>
							<div v-if="works.length > 0">
								<h4 class="fs-5 fw-bold">Sample works of {{ service.title }}</h4>
								<div class="row row-cols-2 g-1">

									<!-- Featured Images of the related works -->
									<div v-for="work of works" :key="work.createdAt" class="work col bg-light">
										<div class="ratio ratio-1x1">
											<div class="d-flex justify-content-center align-items-center">
												<a :href="localePath(`/works/${work.slug}`)">
												<img class="contained-image" v-if="work.featured_image" :src="`https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/${work.featured_image}`" :alt="work.title" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</article>
			</div>
		</div>

		<PackageCallout class="rounded-3 p-5 bg-primary text-light text-center py-5" v-if="service.packages_link" :text="$t('packages_information_text')" :buttonText="$t('packages_information_button')" :link="localePath(service.packages_link)" />

		<SectionsContact :title="$t('readytojoin')" :subtitle="$t('contactussub')" class="pt-5 mt-5" />
	</div>
</template>

<script>
	import PackageCallout from '../../components/PackageCallout.vue';
	export default {
		layout: 'article',
		// TODO:: remove this when PE adjust the prices.
		mounted(){
			this.$router.push('/maintenance/')
		},
		async asyncData({ $content, params, app }) {
			const service = await $content(app.i18n.locale, 'services', params.slug).fetch();
			const works = await $content(app.i18n.locale, 'works').where({ service: service.friendly_name }).fetch();
			return {
				service,
				works
			};
		},
		components: { PackageCallout },
		head() {
            let samples_of_work = [];
            let image_meta_og = {};
            let image_meta_twitter = {};
            if(this.works.length > 0){
                this.works.forEach(element => {
                    samples_of_work.push(`https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/${element.featured_image}`);
                });
                image_meta_og.name = 'og:image'
                image_meta_og.hid = 'og:image'
                image_meta_og.content = samples_of_work[0];
                image_meta_twitter.name = 'twitter:image'
                image_meta_twitter.hid = 'twitter:image'
                image_meta_twitter.content = samples_of_work[0];
            }

            const that = this;
			return {
				title: that.service.title,
				meta: [
					{hid: 'description',name: 'description',content: that.service.description},
                    { hid: 'og:title', name: 'og:title', content: that.service.title },
                    { hid: 'og:description', name: 'og:description', content: that.service.description },
                    { hid: 'og:url', name: 'og:url', content: `${this.publicPath}` },
                    {...image_meta_og},

                    { hid: 'twitter:title', name: 'twitter:title', content: that.service.title },
                    { hid: 'twitter:description', name: 'twitter:description', content: this.service.description },
                    { hid: 'twitter:url', name: 'twitter:url', content: `${this.publicPath}` },
                    {...image_meta_twitter},
				]
			};
		},
        jsonld() {
            let samples_of_work = [];
            if(this.works.length > 0){
                this.works.forEach(element => {
                    samples_of_work.push(`https://sixdegz.mo.cloudinary.net/promoe/assets/images/works/${element.featured_image}`);
                });
            }
			return {
				'@context': 'https://schema.org',
				'@type': 'Service',
                serviceType: this.service.title,
                name: this.service.title,
                description: this.service.description,
                image: samples_of_work,
			};
		},
        data() {
        return {
            publicPath: process.env.baseUrl,
        }
    },
	};
</script>
