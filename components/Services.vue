<template>
  <!-- Services Section -->
  <section id="services" class="py-1 pb-5 py-lg-5 bg-white overflow-hidden">
    <header class="py-2 py-lg-3 text-center bg-white pt-5">
      <b-img :src="publicPath + '/assets/imgs/logo/greendivider.png'" alt="" height="90" class="pt-3 d-none d-lg-inline" ></b-img>

      <h2 class="insight2 text-dark mb-2 mb-lg-5 pb-2 pt-3">
        <strong v-html="this.$store.state.jsonData.sections.services.title"></strong><br />
        <small class="text-muted"><strong v-html="this.$store.state.jsonData.sections.services.subtitle"></strong></small>
      </h2>
    </header>

    <b-container>
      <b-row class="text-center">
        <b-col cols="12">
          <carousel :perPage="1" :loop="true" :paginationEnabled="false" :perPageCustom="[[600, 2], [900, 3], [1199, 4]]">
            <slide class="p-1">
              <div class="py-3" style="background-image: url(/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                  <h4 class="mb-4">Photography</h4>
                  <p>Creative photography services to document every worth capturing moment.</p>
              </div>
            </slide>
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Photography</h4>
                  <p>Creative photography services to document every worth capturing moment.</p>
                </div>
              </b-card>
            </slide>    
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Videography</h4>
                  <p>Professional videography services to achieve your business goals and ambitions.</p>
                </div>
              </b-card>
            </slide>            
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Designing</h4>
                  <p>Out of the box graphic designs to visualize your ideas, goals and messages</p>
                </div>
              </b-card>
            </slide>
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Copywriting</h4>
                  <p>Professional copywriting to state your objectives and communicate your message.</p>
                </div>
              </b-card>
            </slide>
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Social Media Accounts Management</h4>
                  <p>Social media accounts management and content creation to take your pages to a new level of creativity.</p>
                </div>
              </b-card>
            </slide>
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Marketing</h4>
                  <p>Marketing strategies and solutions based on your business objectives, competitors, and targeted audience’s needs and interests.</p>
                </div>
              </b-card>
            </slide>
            <slide class="p-1">
              <b-card class="py-3" style="background-image:url('/assets/imgs/services/pexels-cottonbro-5095887.jpg')">
                <div>
                  <h4 class="mb-4">Advertising</h4>
                  <p>Unconventional advertising services to help you deliver your ad. to the targeted audience and achieve your business goals.</p>
                </div>
              </b-card>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {  
  data() {
    return {
      publicPath: process.env.baseUrl,
    };
  },
 methods: {
    letterIcon: function(path) {
      return require("@" + path);
    },
    imglink: function(someImageName) { 
      return require(`..${someImageName}`);
    }
  },
};
</script>
