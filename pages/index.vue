<template>
	<div class="">
		<!-- hero section -->
		<SectionsHero class="" />

		<!-- about section -->
		<SectionsAbout class="py-5 mb-5 bg-light" />

		<!-- services section -->
		<SectionsServices :services="services" class="py-5 mb-5" />

		<!-- counters section -->
		<SectionsCounters class="py-5 mb-5 bg-light" />

		<!-- work section -->
		<SectionsWorks :works="works" class="py-5 mb-5" />
		<SectionsMoreWorks />

		<!-- work partners -->
		<SectionsPartners class="py-5 mb-5" />
	</div>
</template>

<script>
	export default {
		async asyncData({ $content, app }) {
			const works = await $content(app.i18n.locale, 'works').fetch();
			const services = await $content(app.i18n.locale, 'services').fetch();
			console.log(services);
			return { works, services };
		},
		jsonld() {
			return {
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				name: 'Promotion Efficiency',
				description: 'A platform of skilled Saudis who are equipped with ambition and creativity in the fields of marketing and advertisement',
				currenciesAccepted: 'USD, SAR',
				openingHours: ['Sa-Th 9:00-18:00'],
				priceRange: '$$',
				telephone: '+966 56 664 2220',
				url: 'https://www.promoe.com.sa',
				geo: {
					'@type': 'GeoCoordinates',
					latitude: '26.3075213,',
					longitude: '50.2243455'
				},
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '4.85',
					reviewCount: '146'
				},
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'SA',
					addressLocality: 'Khobar',
					addressRegion: 'Eastern',
					postalCode: '34413',
					streetAddress: '6919 Prince Turki Road'
				}
			};
		},
		head() {
			return {
				title: this.$t('mainpage_title'),
				titleTemplate: `${this.$t('title')} | %s`,
				//titleTemplate: null
			};
		}
	};
</script>
