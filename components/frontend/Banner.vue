<template>
  <div>
    <div class="banner image-cover" :style="bannerImage">
      <b-container>
        <div class="banner-content">
          <h1 class="banner-title">Welcome to <br />Sheanch Engineering Ltd.</h1>
          <p class="banner-text">We are committed to providing you with a safe home.</p>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data() {
      return {
        bannerImage: ''
      }
    },
    created() {
      const banner = this.$store.getters['frontend-data/getBanner'];
      this.bannerImage = "background: url(" + banner + ") no-repeat";
    }
  }
</script>

<style scoped>

</style>
