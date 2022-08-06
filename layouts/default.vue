<template>
  <div>
    <div id="fix-container"></div>

    <div id="wrapper">
      <!-- Start Top Bar -->
      <!--<Topbar/>-->
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
  import Topbar from "../components/frontend/Topbar";
  import Header from "../components/frontend/Header";
  import Banner from "../components/frontend/Banner";
  import Work from "../components/frontend/Work";
  import Place from "../components/frontend/Property";
  import Location from "../components/frontend/Location";
  import Package from "../components/frontend/Package";
  import Newsletter from "../components/frontend/Newsletter";
  import Footer from "../components/frontend/Footer";

  export default {
    name: "default",
    components: {Footer, Newsletter, Package, Location, Place, Work, Banner, Header, Topbar},
  }
</script>

<style scoped>

</style>
