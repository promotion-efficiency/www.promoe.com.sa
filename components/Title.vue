<template>
	<div class="heading py-4 text-center w-100 w-md-75 mx-auto">
		<img v-if="divider" :src="require(`~/assets/images/${is_it_dark}.png`)" height="100" alt="heading decorator" />
		<h4 class="display-6 fw-bold mt-1">{{ title }}</h4>
		<p v-if="subtitle" class="lead mb-2">{{ subtitle }}</p>
	</div>
</template>

<script>
	export default {
		props: ['title', 'subtitle', 'divider'],
		data() {
			let divider_color = this.divider;

			return {
				divider_color
			};
		},
		computed: {
			is_it_dark() {
				if (this.$colorMode['value'] == 'dark') {
					switch (this.divider_color) {
						case 'divider-blue':
							this.divider_color = 'divider-white';
							break;
						case 'divider-black':
							this.divider_color = 'divider-white';
							break;
						case 'divider-white':
							this.divider_color = 'divider-blue';
							break;
						default:
							this.divider_color = 'divider-blue';
					}
				} else {
					this.divider_color = this.divider;
				}

				return this.divider_color;
			}
		}
	};
</script>

<style>
</style>
