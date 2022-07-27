<template>
	<section id="counters">
		<div class="container">
			<div class="row row-cols-1 row-cols-md-5 text-center">
				<OneCounter endVal="291" :text="$t('clients')" />
				<OneCounter endVal="245" :text="$t('socailmediaplans')" />
				<OneCounter endVal="13" :text="$t('platforms')" />
				<OneCounter endVal="394" :text="$t('photographyprojects')" />
				<OneCounter endVal="42" :text="$t('brandcreation')" />
				<OneCounter endVal="14" :text="$t('citiesreached')" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
};
</script>

<style>
</style>
