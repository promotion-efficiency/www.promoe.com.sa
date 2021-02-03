<template>
    <!-- Our Address Section -->
  <section id="ouraddress" class="bg-white overflow-hidden">

    <b-row no-gutters>
      <b-col cols="12" lg="5"  xl="3" offset-xl="2" class="py-5 text-center text-lg-right px-5">
        <header class="py-2 pt-2 py-lg-3 pt-lg-5">
          <b-img :src="publicPath + '/assets/imgs/logo/greendivider.png'" height="90" alt="" class="d-none d-lg-inline"></b-img>

          <h2 class="pt-3">
            <small class="text-muted"><strong>{{ this.$store.state.jsonData.sections.address.subtitle }}</strong></small><br />
            <span v-html="this.$store.state.jsonData.sections.address.title"></span>
          </h2>
          <a id="trucker" href="https://traccar.promoe.com.sa" target="_bank">Click here to track advertising truck</a><br />

          <address class="mt-5">
            <strong>{{ this.$store.state.jsonData.sections.address.content.city }}</strong><br />
            <span>{{ this.$store.state.jsonData.sections.address.content.address }}</span><br />
            <a :href="'tel:' + this.$store.state.jsonData.sections.address.content.phone.link">{{ this.$store.state.jsonData.sections.address.content.phone.number }}</a><br />
            <a :href="'tel:' + this.$store.state.jsonData.sections.address.content.phone.link2">{{ this.$store.state.jsonData.sections.address.content.phone.number2 }}</a><br />
          </address>
        </header>
        
      </b-col>

      <b-col cols="12" lg="7" class="px-0">
        <!-- <GoogleMap /> -->
     <iframe src="https://snazzymaps.com/embed/281438" width="100%" height="600px" style="border:none;"></iframe>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import GoogleMap from '@/components/_gMaps.vue';

export default {
  data() {
    return {
      publicPath: process.env.baseUrl,
    };
  },
  components: {
    // GoogleMap
  },
};
</script>
