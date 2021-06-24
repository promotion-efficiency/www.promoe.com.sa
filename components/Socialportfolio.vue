<template>
  <section id="cards" class="pb-5">
    <header class="py-2 py-lg-3 text-center bg-white pt-5">
      <b-img
        :src="publicPath + '/assets/imgs/logo/greendivider.png'"
        alt=""
        height="90"
        class="pt-3 d-none d-lg-inline"
      ></b-img>

      <h2 class="insight2 text-dark mb-2 mb-lg-5 pb-2 pt-3">
        <strong
          v-html="this.$store.state.jsonData.sections.socialplans.title"
        ></strong
        ><br />
        <small class="text-muted"
          ><strong
            v-html="this.$store.state.jsonData.sections.socialplans.subtitle"
          ></strong
        ></small>
      </h2>
    </header>

    <div class="container">

      <carousel :perPage="1" :loop="true" :paginationEnabled="false" :perPageCustom="[[600, 2], [900, 3], [1199, 3]]">
        <slide class="p-1" v-for="socialplan in this.$store.state.jsonData.sections.socialplans.content" v-bind:key="socialplan.client_name">
            <div class="py-3 my-4 py-lg-0">
              <img
                :src="publicPath + socialplan.client_img" class="card-img"
              />
            </div>
        </slide>
      </carousel>

    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      publicPath: process.env.baseUrl
    };
  }
};
</script>
