<template>
<div>
    
    <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden h-100" style="padding: 0 !important;">
      <header class="container sticky" style="position: fixed !important; right:0; left:0">
        <header class="container" style="height: 88px;z-index: 7;right: 0;left: 0;margin-top: 15px; position: absolute;">
         <Navbar />
       </header>
      </header>
     <iframe src="https://snazzymaps.com/embed/281438" width="100%" height="600px" style="border:none;"></iframe>
    </section>
    <template>
  <!-- Contact Us Section -->
  <div>
  <section id="contact" class="py-2 py-md-5 text-white text-center overflow-hidden" style="background-color: #f9f9f9 !important;">
    
    <b-container class="mt-5">
      <header>
        <h2 class="mb-5 pt-3">
          Ready For Your<strong> FUTURE?</strong><br />
          <small class="">Contact <strong>Us</strong></small>
        </h2>
      </header>

      <form action="https://formsubmit.co/contact@promoe.com.sa" method="POST" id="contact-form" class="needs-validation" novalidate>
        <div class="form-group ">
          <input type="name" class="form-control" id="name" placeholder="Name" name="name">
        </div>

        <div class="form-group form-row">
          <div class="col-12 col-md-6 mb-2">
            <input type="email" class="form-control" id="email" placeholder="Email" name="email">
          </div>
          <div class="col-12 col-md-6 mb-2">
            <input type="website" class="form-control" id="website" placeholder="Website" name="website">
          </div>
        </div>

        <div class="form-group form-row">
          <div class="col-12 col-md-6 mb-2">
            <input type="tel" class="form-control" id="phonenumber" placeholder="+966-5....." name="phonenumber">
          </div>
          <div class="col-12 col-md-6 mb-2">
            <input type="text" class="form-control" id="business" placeholder="Your Business Name" name="business">
          </div>
        </div>

        <div class="form-group form-row">
          <div class="col-12 mb-2">
            <textarea rows="3" type="text" class="form-control" id="message" placeholder="A breif Message" name="message"></textarea>
          </div>
          
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary border-0 my-4 px-5 py-3 font-weight-normal">GET IN TOUCH</button>
        </div>
      </form>
    </b-container>
  </section>
      <div class="workinghours">
          <h5>Keep In Touch</h5>
          <p>Khobar - Kornich Park, Prince</p>
          <p>Mutib Road, Office 333, Floor 3</p>
          <p>0581115550</p>
          <p>0581115550</p>

          <div>
              <h5>Working Hours</h5>
              <p>Saturday - thursday</p>
              <p>8am - 5pm</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
};
</script>

</div>
</template>

<script>
import Navbar from '@/components/_Navbar.vue';
export default {
    name: 'Home',
  components: {},
}
</script>

<style scoped src="@/assets/css/pages/contactus.css">
</style>