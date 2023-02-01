<template>
  <div>
    <!-- Start Banner -->
    <Banner />
    <!-- End Banner -->

    <!-- Start place section -->
    <Property />
    <!-- End place section -->

    <!-- Start how work section -->
    <Work />
    <!-- End how work section -->

    <!-- Start Location -->
    <!-- <Location/> -->
    <!-- End Location -->

    <!-- Start Packages -->
    <!-- <Package/> -->
    <!-- End Packages -->

    <!-- Start newsletter -->
    <Newsletter />
    <!-- End newsletter -->
  </div>
</template>

<script>
  import Banner from "../components/frontend/Banner";
  import Work from "../components/frontend/Work";
  import Property from "../components/frontend/Property";
  import Newsletter from "../components/frontend/Newsletter";

  export default {
    name: 'IndexPage',
    auth: false,
    components: { Newsletter, Property, Work, Banner }
  }
</script>
