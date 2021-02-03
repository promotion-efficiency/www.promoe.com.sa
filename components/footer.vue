<template>
  <!-- Footer -->
  <footer class="pt-5 pb-3 text-white">

    <b-container class="text-center">

      <b-row>

        <b-col cols="12" md="12" class=" mb-md-0 mb-2">
          <b-img :src="publicPath + '/assets/imgs/logo/logo-footer.svg'" alt="logo" class="" ></b-img>
          <h4 class="mt-3">Your Hike to <span>PEAK!</span></h4>
        </b-col>

        <b-col cols="12" md="12" class=" mb-md-0 mb-2 icon">
          <!-- <fa icon="instagram" /> -->
          <a href="https://www.instagram.com/promoefficiency/https://www.instagram.com/promoefficiency/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/promoefficiency?s=11" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/promoefficiency/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="linic9sa.com" target="_blank"><i class="fab fa-youtube"></i></a>
        </b-col>
        <b-col cols="12" md="12" class="mt-3 mb-md-0 mb-2">
          <div id="menu" style="">
            <ul>
              <li><a href="/" class="text-white">Home</a></li>
              <li><a href="https://efficiencys.com.sa/" target="_bank" class="text-white">Efficiency Center</a></li>
              <li><a href="/RequestServices" class="text-white">Request Service</a></li>
              <li><a href="http://traccar.promoe.com.sa" target="_bank" class="text-white">Truck tracker</a></li>
              <li><a href="/Jobs" class="text-white">Jobs Application</a></li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <div>
        <p class="copyright pt-0 text-center">
          <a class="text-light" :href="this.$store.state.jsonData.general.url">{{ this.$store.state.jsonData.general.site_name }}</a> All right reserved. copyright 2021
        </p>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.baseUrl,
    };
  },
};
</script>