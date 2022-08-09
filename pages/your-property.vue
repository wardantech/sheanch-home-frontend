<template>
  <div>
    <!-- Property Hero Section -->
    <PropertyHero/>
    <!--End Property Hero Section -->

    <!-- Customer Experiences Section -->
    <CustomerExperiences/>
    <!--End Customer Experiences Section -->

    <!-- FAQ -->
    <Faq/>
    <!-- End FAQ -->

    <!-- About Property Section -->
    <AboutProperty/>
    <!-- End About Property Section -->

    <!-- Start newsletter -->
    <Newsletter/>
    <!-- End newsletter -->
  </div>
</template>

<script>
  import PropertyHero from "../components/frontend/PropertyHero";
  import CustomerExperiences from "../components/frontend/CustomerExperiences";
  import Faq from "../components/frontend/Faq";
  import AboutProperty from "../components/frontend/AboutProperty";
  import Newsletter from "../components/frontend/Newsletter";

  export default {
    name: "your-property",
    auth: false,
    components: {Newsletter, AboutProperty, Faq, CustomerExperiences, PropertyHero},
  }
</script>

<style scoped>

</style>
