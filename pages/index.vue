<template>
  <div>
    <!-- Start Banner -->
    <Banner />
    <!-- End Banner -->

    <!-- Search -->
    <!-- <Search /> -->
    <!-- /. Search -->

    <!-- Start place section -->
    <Property />
    <!-- End place section -->

    <!-- Start how work section -->
    <Work />
    <!-- End how work section -->

    <!-- Start Location -->
    <!-- <Location/> -->
    <!-- End Location -->

    <!-- Start newsletter -->
    <Newsletter />
    <!-- End newsletter -->
  </div>
</template>

<script>
  import Banner from "@/components/frontend/Banner";
  import Work from "@/components/frontend/Work";
  import Property from "@/components/frontend/Property";
  import Newsletter from "@/components/frontend/Newsletter";
  import Search from "@/components/frontend/Search";

  export default {
    name: 'IndexPage',
    auth: false,
    components: { Newsletter, Property, Work, Banner, Search }
  }
</script>
