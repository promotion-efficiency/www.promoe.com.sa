<template>
  <div>
    <imagesheader />
    <Nuxt />
  </div>
</template>

<script>
import Imagesheader from '../components/Imagesheader';


export default {
  components: {
    Imagesheader,
  },
  head() {
      return {
        title: "Request Form"
      }
  }
}
</script>

<style>
body {
  background-color: #f6f7f8 !important;
  font-family: 'Montserrat', sans-serif !important;
}
</style>
