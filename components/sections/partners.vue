<template>
	<section id="partners" class="overflow-hidden">
		<Title :title="$t('ourclients')" divider="divider-blue"></Title>
		<div class="partners_container">
			<div class="box-that-would-animata d-flex flex-nowrap mb-4" style="width: calc(3584px)">
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/1.khobar-municipality.png')" src="/assets/images/partners/new/1.khobar-municipality.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/2.tadbeir.png')" src="/assets/images/partners/new/2.tadbeir.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/3.amana.png')" src="/assets/images/partners/new/3.amana.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/4.sraco.png')" src="/assets/images/partners/new/4.sraco.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/5.kfupm.png')" src="/assets/images/partners/new/5.kfupm.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/6.cac.png')" src="/assets/images/partners/new/6.cac.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/7.kfca.png')" src="/assets/images/partners/new/7.kfca.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/8.srca.png')" src="/assets/images/partners/new/8.srca.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/9.monshaat.png')" src="/assets/images/partners/new/9.monshaat.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/10.ithra.png')" src="/assets/images/partners/new/10.ithra.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/11.moe.png')" src="/assets/images/partners/new/11.moe.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/12.moi.png')" src="/assets/images/partners/new/12.moi.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/13.mong.png')" src="/assets/images/partners/new/13.mong.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/14.mouwasat-hospital.png')" src="/assets/images/partners/new/14.mouwasat-hospital.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/14.retal.png')" src="/assets/images/partners/new/14.retal.png" />
				</div>
			</div>

			<div class="box-that-would-animata reverse d-flex flex-nowrap mb-4" style="width: calc(3584px)">
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/20.sope.png')" src="/assets/images/partners/new/20.sope.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/21.sjn.png')" src="/assets/images/partners/new/21.sjn.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/22.civil-defense.png')" src="/assets/images/partners/new/22.civil-defense.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/24.floward.avif')" src="/assets/images/partners/new/24.floward.avif" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/17.refad.png')" src="/assets/images/partners/new/17.refad.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/23.moc.png')" src="/assets/images/partners/new/23.moc.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/15.moh.png')" src="/assets/images/partners/new/15.moh.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/16.moe.png')" src="/assets/images/partners/new/16.moe.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/19.aramco.png')" src="/assets/images/partners/new/19.aramco..png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/18..satorp.png')" src="/assets/images/partners/new/18..satorp.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/17.refad.png')" src="/assets/images/partners/new/17.refad.png" />
				</div>
				<div class="internal">
					<img loading="lazy" :alt="getAltText('/assets/images/partners/new/23.moc.png')" src="/assets/images/partners/new/23.moc.png" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  methods: {
    // Extract the file name from the image source and use it as the alt text
    getAltText(imageSrc) {
      // Extract the part after the last slash and remove the file extension
      const fileName = imageSrc.split('/').pop().split('.')[0];
      return fileName.replace(/-/g, ' ').replace(/_/g, ' ').trim();
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
