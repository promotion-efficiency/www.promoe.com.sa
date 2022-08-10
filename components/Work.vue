<template>
  <div class="work col bg-light">
      <div class="ratio ratio-1x1">
          <div class="d-flex justify-content-center align-items-center">
              <img class="contained-image" loading="lazy" v-if="image" :src="require(`~/assets/images/works/${image}`)" :alt="title" />
              <div class="content d-flex flex-column justify-content-center align-items-center text-center">
                  <h3 class="text-white">{{ title }}</h3>
                  <p class="lead d-block text-light">{{ description }}</p>
                  <a :href="link" class="btn btn-sm btn-outline-light">{{ $t('readmore') }}</a>
                </div>
          </div>
          
        </div>
    </div>
</template>

<script>
export default {
    props: ['image','title','description','link'],

}
</script>

<style>

</style>