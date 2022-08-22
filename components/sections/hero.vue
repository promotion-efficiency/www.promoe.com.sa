<template>
  <section id="hero">
        <div class="layer layer_1 back_mountains">
            <img  alt="mountains" src="https://sixdegz.mo.cloudinary.net/promoe/assets/images/hero/back_mountains.webp" />
        </div>
        <div class="layer layer_2 logo">
            <img  alt="logo hero" src="https://sixdegz.mo.cloudinary.net/promoe/assets/images/hero/logo.webp" />
        </div>
        <div class="layer layer_3 clouds">
            <img  alt="Clouds hero" src="https://sixdegz.mo.cloudinary.net/promoe/assets/images/hero/clouds_2.webp" />
        </div>
        <div class="layer layer_4 front_mountain">
            <img  alt="Front Mountains" src="https://sixdegz.mo.cloudinary.net/promoe/assets/images/hero/front_mountain.webp" />
        </div>
        <div class="layer layer_5 baloon">
            <img  alt="Front Baloon" src="https://sixdegz.mo.cloudinary.net/promoe/assets/images/hero/layer_5.webp" />
        </div>
    </section>
</template>

<script>
	export default {
        data() {
            return {
                publicPath: process.env.baseUrl,
            }
        },
	};
</script>
