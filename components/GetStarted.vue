<template>
  <!-- Get Started Section -->
  <section
    id="getstarted"
    class="py-5 text-center separatorArrow bg-white overflow-hidden"
    :style="{
      backgroundImage:
        'url(' + publicPath + 'assets/imgs/getstarted/getstarted.png)',
    }"
  >
    <header>
      <b-img
        :src="publicPath + '/assets/imgs/logo/greendivider.png'"
        alt=""
        height="90"
        class="pt-3 d-none d-lg-inline"
      ></b-img>
      <h2 class="insight2 text-dark mb-5 pb-2 pt-3">
        <small class="text-muted mt-5"><span v-html="this.$store.state.jsonData.sections.getstarted.title"></span></small><br />
          
          <strong>{{ this.$store.state.jsonData.sections.getstarted.subtitle }}</strong>
      </h2>
    </header>

    <b-container>
      <b-row>
        <b-col cols="12" lg="6" class="mb-5 mb-lg-0 text-lg-right">
          <a role="button" class="btn btn-success py-3 px-5 text-dark border-0 font-weight-normal" href="/ContactUS" >REQUEST CONSULTATION</a>
        </b-col>
        <b-col cols="12" lg="6" class="text-lg-left">
          <a target="_blank" role="button" class="btn btn-danger py-3 px-5 text-white border-0 font-weight-normal" :href="publicPath + this.$store.state.jsonData.sections.getstarted.content.profile_link">
            <i class="far fa-file-pdf mr-2"></i> DOWNLOAD PROFILE</a>
        </b-col>
      </b-row>
    </b-container>

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-5 mb-lg-0 text-lg-right"></div>
        <div class="col-12 col-lg-6 text-lg-left"></div>
      </div>
    </div>
  </section>
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
