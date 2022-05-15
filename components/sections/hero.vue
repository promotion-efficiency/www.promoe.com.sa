<template>
  <section id="hero" class="p-3 container">
        <div class="layer layer_1" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/layer_1.png)' }"></div>
        <div class="layer layer_2" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/layer_2.png)' }"></div>
        <div class="layer layer_3" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/layer_3.png)' }"></div>
        <div class="layer layer_4" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/layer_4.png)' }"></div>
        <div class="layer layer_5 animate__animated animate__shakeX animate__infinite" :style="{ backgroundImage: 'url(' + publicPath + '/assets/images/hero/layer_5.png)' }"></div>
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
