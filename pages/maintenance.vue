<template lang="html">
	<div class="content">
		<div class="maintenance p-5 pb-3">
			<h1> {{ this.$t('pageUnderMaintenance') }} </h1>
			<h1> {{ this.$t('pageUnderMaintenanceDescription') }} </h1>
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'without_contact',
	}
</script>
<style lang="css" scoped >
	.maintenance h1 {
		font-size: 200%;
		color: #fff;
		text-shadow: -2px 2px 3px rgba(0,0,0,0.5);
		color: white;
		text-align: center;
	}
	.maintenance {
		height: 200px;
		left: 50%;
		top: 50%;
	}
</style>
