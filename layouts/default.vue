<template>
  <div>
    <div id="fix-container"></div>

    <div id="wrapper">
      <!-- Start Top Bar -->
      <Topbar/>
      <!-- End Top Bar -->

      <!-- Start Navigation -->

      <Header/>

      <!-- End Navigation -->

      <Nuxt/>

      <!-- Start Footer -->
      <Footer/>
      <!-- End Footer -->
    </div>
  </div>
</template>

<script>

import Topbar from "@/components/frontend/Topbar";
import Header from "@/components/frontend/Header";
import Footer from "@/components/frontend/Footer";

export default {
  name: "default",
  components: {Footer, Header, Topbar},
  data() {
    return {
      foo: '',
      footerData:{},
    }
  },

  async fetch() {
    const res = await this.$axios.$post('get-general-setting-images');
    this.$store.dispatch('frontend-data/storeFrontend', res);

    if (res.data.media.length > 0) {
      for (const element of res.data.media) {
        if (element.collection_name == "logo") {
          this.$store.dispatch('frontend-data/storeLogo', element.original_url);
        }
        if (element.collection_name == "footerLogo") {
          this.$store.dispatch('frontend-data/storeFooterLogo', element.original_url);
        }

        if (element.collection_name == "banner") {
          this.$store.dispatch('frontend-data/storeBanner', element.original_url);
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
