<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-widgets">
        <div class="sidebar-navbar">
          <div class="profile-avater">
            <b-img src="../../../assets/frontend/images/profile/user.png" width="150px" alt="Profile Image"></b-img>
            <h4>{{user}}</h4>
          </div>
          <div class="profile-navigation">
            <ul>
              <li class="active">
                <nuxt-link
                  :to="{ name: 'account-dashboard'}">
                  <b-icon icon="speedometer2" font-scale="1"></b-icon>
                  Dashboard
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 2">
                <nuxt-link
                  :to="{ name: 'account-property'}">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Properties
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 2">
                <nuxt-link
                  :to="{ name: 'account-property-ads'}">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Ads
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="{ name: 'account-property-leases'}">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  leases
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="{ name: 'account-settings'}">
                  <b-icon icon="gear" font-scale="1"></b-icon>
                  Settings
                </nuxt-link>
              </li>

              <li>
                <b-link @click="logout">
                  <font-awesome-icon icon="fa-solid fa-right-from-bracket"/>
                  Logout
                </b-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$auth.user.name;
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      //this.$toast.error('Logged out successfully!');
      this.$nuxt.$options.router.push({name: 'login'})
    },
  }
}
</script>

<style scoped>

</style>
