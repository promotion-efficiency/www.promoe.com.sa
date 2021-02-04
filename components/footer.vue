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
          <a :href="this.$store.state.jsonData.general.social_accounts[1].link" target="_blank"><i :class="this.$store.state.jsonData.general.social_accounts[1].fav_icon"></i></a>
          <a :href="this.$store.state.jsonData.general.social_accounts[0].link" target="_blank"><i :class="this.$store.state.jsonData.general.social_accounts[0].fav_icon"></i></a>
          <a :href="this.$store.state.jsonData.general.social_accounts[2].link" target="_blank"><i :class="this.$store.state.jsonData.general.social_accounts[2].fav_icon"></i></a>
          <a :href="this.$store.state.jsonData.general.social_accounts[3].link" target="_blank"><i :class="this.$store.state.jsonData.general.social_accounts[3].fav_icon"></i></a>
        </b-col>
        <b-col cols="12" md="12" class="mt-3 mb-md-0 mb-2">
          <div id="menu" style="">
            <ul>
              <li><a href="/" class="text-white">Home</a></li>
              <li><a href="https://efficiencys.com.sa/" target="_bank" class="text-white">Efficiency Center</a></li>
              <!--<li><a href="/Request" class="text-white">Request Service</a></li>-->
              <li><a href="http://traccar.promoe.com.sa" target="_bank" class="text-white">Truck Tracker</a></li>
              <!-- The form is not working -->
              <!-- <li><a href="/Jobs" class="text-white">Jobs Application</a></li> -->
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