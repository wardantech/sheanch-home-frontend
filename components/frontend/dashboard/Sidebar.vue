<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-widgets">
        <div class="sidebar-navbar">
          <div class="profile-avater">
            <b-img
              :src="imageUrl+profileImage"
              alt="Profile Image"
              style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">
            </b-img>
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
                  :to="{ name: 'account-profile-id-landloard', params: { id: $auth.user.landlord_id }}">
                  <b-icon icon="person" font-scale="1"></b-icon>
                  Profile
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 3">
                <nuxt-link
                  :to="{ name: 'account-profile-id-tenant', params: { id: $auth.user.tenant_id }}">
                  <b-icon icon="person" font-scale="1"></b-icon>
                  Profile
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
                <nuxt-link v-if="$auth.loggedIn && $auth.user.type == 2"
                  :to="{ name: 'account-property-deed-landlord'}">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Property Deed
                </nuxt-link>

                <nuxt-link v-if="$auth.loggedIn && $auth.user.type == 3"
                           :to="{ name: 'account-property-deed-tenant'}">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Property Deed
                </nuxt-link>
              </li>
<!--              <li>-->
<!--                <nuxt-link-->
<!--                  :to="{ name: 'account-settings'}">-->
<!--                  <b-icon icon="gear" font-scale="1"></b-icon>-->
<!--                  Settings-->
<!--                </nuxt-link>-->
<!--              </li>-->

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
    return {
      'profileImage': 'asdasdasd'
    }
  },
  computed: {
    user() {
      return this.$auth.user.name;
    },

    imageUrl(){
      return `${process.env.APP_ROOT_IMG_URL}`
    }
  },
  async created() {
    const response = await this.$axios.$post('profile/landlord', {id: this.$auth.user.landlord_id});

    this.profileImage = response.data.landlord.image;
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
