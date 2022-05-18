<template>
  <article class="pb-5 mb-5">
    <h1 class="pb-3 border-bottom mb-3"><strong class="text-primary">SERVICES</strong> / {{ service.title }}</h1>
    <div class="">
        <img v-if="service.image" :src="require(`~/assets/images/services/${service.image}`)" :alt="title" />
    </div>
    <nuxt-content :document="service" />

    <SectionsContact title="Ready To Join?" subtitle="Type your message below and we will get back to you sooner than you think" class="py-5 mb-5" />

  </article>
</template>

<script>
export default {
    layout: 'article',
	async asyncData({ $content, params }) {
		const service = await $content('services', params.slug)
			.fetch();
		return {
			service
		}
	}
}
</script>