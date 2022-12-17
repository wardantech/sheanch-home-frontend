<template>
  <div>
    <section id="u-property-hero" style="background-image: url('https://i.im.ge/2022/07/27/Fi9Cj6.png')">
      <b-container class="px-4 py-5">
        <b-row class="align-items-center g-5 py-5">
          <div class="col-md-6 p-order">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/TXHq199wEbg"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <h1 class="display-5 fw-bold lh-1 mb-3 heading-title">
              Rent or Sell <br> Property Online
            </h1>
            <p class="lead">
              Looking to sell property online or are you in search of tenants?
              Do it with ease with the largest real estate marketplace in
              Bangladesh. Start your journey now!
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">

              <nuxt-link class="btn btn-success" v-if="$auth.loggedIn && $auth.user.landlord_id"
                         :to="{ name: 'profile-property-create'}">
                Get Started
              </nuxt-link>

              <nuxt-link class="btn btn-success" v-else
                         :to="{ name: 'login'}">
                Get Started
              </nuxt-link>

            </div>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  export default {
    name: "PropertyHero",
    created() {
      console.log(this.$auth.loggedIn);
    }
  }
</script>

<style scoped>

</style>
