<template>
  <div class="coming-soon-container">
    <video 
      ref="video"
      autoplay 
      muted 
      loop 
      playsinline
      class="coming-soon-video"
      @error="onVideoError"
      @loadeddata="onVideoLoaded"
    >
      <source src="/soon.mp4" type="video/mp4">
      <source src="/videos/soon.mp4" type="video/mp4">
      <source src="/assets/videos/soon.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div v-if="showError" class="error-message">
      Video not available
    </div>
  </div>
</template>

<script>
export default {
  layout: 'coming-soon',
  data() {
    return {
      showError: false
    }
  },
  mounted() {
    this.playVideo()
  },
  methods: {
    playVideo() {
      if (this.$refs.video) {
        this.$refs.video.play().catch(e => {
          console.log('Video autoplay failed:', e)
        })
      }
    },
    onVideoError(e) {
      console.log('Video error:', e)
      this.showError = true
    },
    onVideoLoaded() {
      console.log('Video loaded successfully')
      this.showError = false
    }
  },
  head() {
    return {
      title: 'Coming Soon',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Website Under Construction'
        }
      ]
    }
  }
}
</script>

<style scoped>
.coming-soon-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000000;
}

.coming-soon-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  object-fit: cover;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  z-index: 2;
  text-align: center;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .coming-soon-video {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .error-message {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .coming-soon-video {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .error-message {
    font-size: 1.2rem;
  }
}
</style>
