<template>
	<section id="counters">
		<div class="container">
			<div class="row text-center">
				<Counter number="500" text="Coffee Cups" />
                <Counter number="1500" text="Lines of Code" />
                <Counter number="1650" text="Happy Clients" />
                <Counter number="500" text="Social Media Campaigns" />
			</div>
		</div>
	</section>
</template>

<script>
	import Counter from "../Counter.vue";
	export default {
		components: { Counter },
	};
</script>

<style>
</style>