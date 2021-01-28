<template>
  <div id="RequestServices">
    <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden h-100">
      <header class="container sticky">
        <header class="wrap">
         <Navbar />
       </header>
      </header>
    </section>
    <RequestFormhtml />
  </div>
</template>

<script>
import RequestFormhtml from '../components/RequestFormhtml'
export default {
    components: {
      RequestFormhtml 
    }
}
</script>

<style src="@/assets/css/pages/RequestServices.css">

</style>