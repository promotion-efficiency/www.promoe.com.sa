<template>
	<section id="counters">
		<div class="container">
			<div class="row text-center">
				<Counter number="270+" text="Happy Clients" />
                <Counter number="394+" text="Photography Projects" />
                <Counter number="42+" text="Business Identities" />
                <Counter number="16+" text="Projects Completd" />
                <Counter number="140+" text="Account Management Plans" />
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