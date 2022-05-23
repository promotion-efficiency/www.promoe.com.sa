<template>
  <section id="hero">
        <div class="layer layer_1 back_mountains" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/back_mountains.webp)' }"></div>
        <div class="layer layer_2 logo" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/logo.webp)' }"></div>
        <div class="layer layer_3 clouds" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/clouds_2.webp)' }"></div>
        <div class="layer layer_4 front_mountain" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/front_mountain.webp)' }"></div>
        <div class="layer layer_5 baloon animate__animated animate__shakeX animate__infinite" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/layer_5.png)' }"></div>
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
