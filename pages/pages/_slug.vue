<template>
  <article class="pb-5 mb-5">
    <h1 class="pb-3 border-bottom mb-3"><strong class="text-primary">Pages</strong> / {{ page.title }}</h1>
    <div class="">
        <img v-if="page.image" :src="require(`~/assets/images/pages/${page.image}`)" :alt="title" />
    </div>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
    layout: 'article',
	async asyncData({ $content, params }) {
		const page = await $content('pages', params.slug)
			.fetch();
		return {
			page
		}
	}
}
</script>