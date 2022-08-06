<template>
  <div>
    <header class="header header-light head-shadow">
      <b-container>
        <b-navbar class="header-navber" toggleable="lg">
          <nuxt-link :to="{ name: 'index'}" class="navbar-brand-logo">
            <img src="../../assets/frontend/images/logo.png" alt="logo">
          </nuxt-link>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="custom-navbar">
              <b-nav-item href="#">Company</b-nav-item>
              <b-nav-item href="#">Blog</b-nav-item>

              <!--<b-nav-item-dropdown class="custom-dropdown-menu" text="Listing" right>-->
                <!--<b-dropdown-item href="#">Listing Layout</b-dropdown-item>-->
                <!--<b-dropdown-item href="#">Grid Layout</b-dropdown-item>-->
                <!--<b-dropdown-item href="#">Half Map Search</b-dropdown-item>-->
              <!--</b-nav-item-dropdown>-->

              <li class="nav-item b-nav-dropdown dropdown custom-dropdown-menu">
                <nuxt-link
                  class="mt-2 ml-1"
                  :to="{ name: 'register'}">
                  Sign Up
                </nuxt-link>
              </li>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto navigation-right">
              <li class="nav-item navigation-right-item">
                <nuxt-link
                  class="nav-link"
                  :to="{ name: 'your-property'}">
                  <font-awesome-icon class="mr-2" icon="fa-solid fa-upload"/>
                  Add Property
                </nuxt-link>
              </li>

              <nuxt-link
                class="btn sign-in-button"
                :to="{ name: 'login'}">
                <font-awesome-icon icon="fa-solid fa-user"/>
                Sign In
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
    created() {
    }
  }
</script>

<style scoped>

</style>
