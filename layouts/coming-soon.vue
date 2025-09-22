<template>
  <div class="coming-soon-layout">
    <!-- Header with logo -->
    <Header />

    <nuxt />
    
    <!-- Contact section -->
    <SectionsContact :title="$t('contactus')" :subtitle="$t('contactussub')" class="py-5 mb-5" />

    <!-- Footer section -->
    <Footer />

    <!-- WhatsApp floating action button -->
    <a style="color: inherit;" href="https://wa.me/966566642220" class="layer_999 float d-flex align-items-center justify-content-center" target="_blank">
      <i class="bi text-white bi-whatsapp my-float"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ComingSoonLayout'
}
</script>

<style>
.coming-soon-layout {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  background: #000000 !important;
  color: #ffffff !important;
}

/* Hide header/navbar items but keep the brand (logo) visible */
.coming-soon-layout .navbar-nav,
.coming-soon-layout .navbar-toggler {
  display: none !important;
}

/* Ensure navbar is visible on coming soon; let Bootstrap control brand visibility */
.coming-soon-layout .navbar,
.coming-soon-layout header,
.coming-soon-layout .header {
  display: block !important;
}

/* Ensure header/logo appears above the hero video */
.coming-soon-layout header,
.coming-soon-layout .navbar {
  position: relative;
  z-index: 3;
  background: transparent !important;
}

/* Place header/logo above the video at the very top */
.coming-soon-layout header,
.coming-soon-layout .navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: transparent !important;
}

/* Add a small safe area padding so the logo isn't flush to the edges */
.coming-soon-layout .navbar .container {
  padding-top: 8px;
  padding-bottom: 8px;
}

/* WhatsApp float button styling */
.float{
  position:fixed;
  z-index: 999;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 2px 2px 3px #999;
  text-decoration: none;
}

/* Footer styling */
.coming-soon-layout .bg-dark {
  background-color: #000000 !important;
  color: #ffffff !important;
}

/* Hide footer logo on coming soon to avoid duplicate logos */
.coming-soon-layout footer img {
  display: none !important;
}

/* Basic responsive tweak for iframes/maps inside contact */
@media (max-width: 768px) {
  .coming-soon-layout iframe { height: 200px !important; }
}

@media (max-width: 576px) {
  .coming-soon-layout iframe { height: 150px !important; }
}

body {
  margin: 0;
  padding: 0;
  background: #000000 !important;
}
</style>
