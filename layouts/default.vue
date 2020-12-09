<template>
  <div>
    <imagesheader />
    <!-- <Nuxt /> -->
    <RequestFormhtml />
  </div>
</template>

<script>
import Imagesheader from '../components/Imagesheader';
import RequestFormhtml from '../components/RequestFormhtml'

export default {
  components: {
    Imagesheader,
    head() {
      return {
        title: "Request Form"
      }
    }
  }
}
</script>

<style>

</style>
