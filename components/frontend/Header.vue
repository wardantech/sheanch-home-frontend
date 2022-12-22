<template>
  <div>
    <header class="header header-light head-shadow">
      <b-container>
        <b-navbar class="header-navber" toggleable="lg">
          <nuxt-link :to="{ name: 'index'}" class="navbar-brand-logo">
            <img :src="logo" alt="logo" width="150px" height="45px">
            <!--<img v-else src="https://i.ibb.co/1MFFM3W/Image-not-available.png" alt="logo" width="150px" height="45px">-->
          </nuxt-link>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="custom-navbar">
              <b-nav-item href="#">Company</b-nav-item>
              <b-nav-item href="#">Blog</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto navigation-right">
              <li class="nav-item navigation-right-item">
                <nuxt-link
                  class="nav-link"
                  :to="{ name: 'property-your-property'}">
                  <font-awesome-icon class="mr-2" icon="fa-solid fa-upload"/>
                  Add Property
                </nuxt-link>
              </li>

              <nuxt-link v-if="!$auth.loggedIn"
                class="btn sign-in-button"
                :to="{ name: 'login'}">
                <font-awesome-icon icon="fa-solid fa-user"/>
                Sign In
              </nuxt-link>

              <nuxt-link v-else
                         class="btn sign-in-button"
                         :to="$auth.user.landlord_id ?
                         { name: 'profile-dashboard-landlord'}:
                         { name: 'profile-dashboard-tenant'}">
                <font-awesome-icon icon="fa-solid fa-address-card" />
                Me
              </nuxt-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
          logo:'',
      }
    },
    created() {
      this.logo = this.$store.getters['frontend-data/getLogo'];
    }
  }
</script>

<style scoped>

</style>
