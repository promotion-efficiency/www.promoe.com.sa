<template>
	<section id="counters">
		<div class="container">
			<div class="row row-cols-1 row-cols-md-5 text-center">
				<OneCounter endVal="70" :text="$t('accountmanagementplans')" />
				<OneCounter endVal="394" :text="$t('projectscompleted')" />
				<OneCounter endVal="42" :text="$t('businessidentities')" />
				<OneCounter endVal="16" :text="$t('photographyprojects')" />
				<OneCounter endVal="140" :text="$t('happyclients')" />
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