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
		<SectionsWorks  :works="works"  class="py-5 mb-5" />
        <SectionsMoreWorks />

        <!-- work partners -->
		<SectionsPartners   class="py-5 mb-5" />        
	</div>
</template>

<script>
export default {
    async asyncData({ $content, app }) {
        const works = await $content(app.i18n.locale,"works").fetch();
        const services = await $content(app.i18n.locale,"services").fetch();
        return { works, services };
    },
};
</script>
