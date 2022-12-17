<template>
  <div>
    <div id="wrapper">
      <!-- Start Top Bar -->
      <Topbar />
      <!-- End Top Bar -->

      <!-- Start Navigation -->

      <Header />

      <!-- End Navigation -->

      <Nuxt />

      <!-- Start Footer -->
      <Footer />
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
  components: { Footer, Header, Topbar },
  data() {
    return {
      foo: '',
      footerData: {},
      tenant_id: '',
    }
  },


  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      if (this.$auth.loggedIn && this.$auth.user.tenant_id) {
        this.tenant_id = this.$auth.user.tenant_id;
      }
      const response = await this.$axios.post('get-frontend-data', {
        tenantId: this.tenant_id,
      });

      this.$store.dispatch('frontend-data/storeFrontend', response.data.frontendData);
      this.$store.dispatch('wishlist/storeWishlist',
        response.data.wishlistCount ? response.data.wishlistCount : 0
      );

      if (response.data.frontendData.media.length > 0) {
        for (const element of response.data.frontendData.media) {
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
}
</script>

<style scoped>

</style>
