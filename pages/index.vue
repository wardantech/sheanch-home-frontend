<template>
    <div>
        <!-- Start Banner -->
        <Banner/>
        <!-- End Banner -->

        <!-- Start how work section -->
        <Work/>
        <!-- End how work section -->

        <!-- Start place section -->
        <Property :propertyData="property"/>
        <!-- End place section -->

        <!-- Start Location -->
        <!--<Location/>-->
        <!-- End Location -->

        <!-- Start Packages -->
        <!--<Package/>-->
        <!-- End Packages -->

        <!-- Start newsletter -->
        <Newsletter/>
        <!-- End newsletter -->
    </div>
</template>

<script>
    import Banner from "../components/frontend/Banner";
    import Work from "../components/frontend/Work";
    import Property from "../components/frontend/Property";
    import Location from "../components/frontend/Location";
    import Package from "../components/frontend/Package";
    import Newsletter from "../components/frontend/Newsletter";
    export default {
      name: 'IndexPage',
      auth: false,
      components: {Newsletter, Package, Location, Property, Work, Banner},
      data() {
        return {
          property: [],
        }
      },

      async fetch() {
        const propertiesAds = await this.$axios.$post('property/ad/active-property/list');
        this.property = propertiesAds.data;
        console.log(propertiesAds.data)
      },

    }

</script>
