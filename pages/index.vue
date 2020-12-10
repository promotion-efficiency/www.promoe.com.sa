<template>
  <div class="container">
    Hello
  </div>
</template>

<script>
import HeroSction from '../components/Hero/HeroSction';

export default {
  components: {
    HeroSction,
  },
  head() {
    return {
      title: "Request Service Form"
    }
  },
   async asyncData({ $axios }) {
    const res = await $axios.$get('http://localhost:3000/db.json');
    const data = res.data;
    return { data }

  }
}
</script>

<style>

</style>
