<template>
  <section id="cards" class="pb-5">
    <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden h-100">
      <Navbar />
    </section>
    <div class="container">
      <div class="title pb-5">
        <h1 class="fw-bold display-5 pt-5 text-center">Choose Your Design</h1>
        <h4 class="fw-light text-center py-2">
          Deets card is made for those looking for modernity, <br />convenience,
          and elegance.
        </h4>
      </div>

      <VueSlickCarousel v-bind="settings" class="my-3">
        <div class="py-3 my-4 py-lg-0">
          <img src="../static/assets/imgs/6.png" class="card-img" width="300" />
          <div class="carddetails">
            <p class="m-0 fw-bold pt-1">Deets card black</p>
            <small class="d-block mb-4">250 ر.س</small>
          </div>
        </div>

        <div class="py-3 my-4 py-lg-0">
          <img src="../static/assets/imgs/6.png" class="card-img" width="300" />
          <div class="carddetails">
            <p class="m-0 fw-bold pt-1">Deets card black</p>
            <small class="d-block mb-4">250 ر.س</small>
          </div>
        </div>

        <div class="py-3 my-4 py-lg-0">
          <img src="../static/assets/imgs/6.png" class="card-img" width="300" />
          <div class="carddetails">
            <p class="m-0 fw-bold pt-1">Deets card black</p>
            <small class="d-block mb-4">250 ر.س</small>
          </div>
        </div>

        <div class="py-3 my-4 py-lg-0">
          <img src="../static/assets/imgs/6.png" class="card-img" width="300" />
          <div class="carddetails">
            <p class="m-0 fw-bold pt-1">Deets card black</p>
            <small class="d-block mb-4">250 ر.س</small>
          </div>
        </div>

        <div class="py-3 my-4 py-lg-0">
          <img src="../static/assets/imgs/6.png" class="card-img" width="300" />
          <div class="carddetails">
            <p class="m-0 fw-bold pt-1">Deets card black</p>
            <small class="d-block mb-4">250 ر.س</small>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
};
</script>
