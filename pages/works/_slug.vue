<template>
	<article class="pb-5 mb-5">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item" aria-current="page"><a href="/">Home</a></li>
				<li class="breadcrumb-item" aria-current="page"><a href="/#works">Works</a></li>
			</ol>
		</nav>
		<h1 class="pb-3 border-bottom mb-3">{{ works.title }}</h1>
		<div class="">
			<img class="contained-image" :src="require(`~/assets/images/works/${works.image}`)" :alt="title" />
		</div>
		<nuxt-content :document="works" />
		<SectionsContact title="Liked this Work?" subtitle="Lets Make a Better One Together" class="py-5 mb-5" />
	</article>
</template>

<script>
	export default {
		layout: 'article',
		async asyncData({ $content, params }) {
			const works = await $content('works', params.slug).fetch();
			return {
				works
			};
		}
	};
</script>