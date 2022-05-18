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

        
	</div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const works = await $content("works").fetch();
        const services = await $content("services").fetch();
        return { works, services };
    },
};
</script>
