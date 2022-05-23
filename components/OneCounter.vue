<template>
	<div class="col p-3 border-1">
		<span class="number fw-bolder"><ICountUp :delay="delay" :endVal="parseInt(endVal)" :options="options" />+</span>
		<h3 class="h5">{{ text }}</h3>
	</div>
</template>

<script>
	import ICountUp from 'vue-countup-v2';
	export default {
		props: ['endVal', 'text'],
		components: { ICountUp },
		data() {
			return {
				delay: 1000,
				options: {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: '',
                    enableScrollSpy: true,
                    scrollSpyDelay: 1000,
                    scrollSpyOnce: true
				}
			};
		},
		methods: {
			
		}
	};
</script>

<style>
</style>