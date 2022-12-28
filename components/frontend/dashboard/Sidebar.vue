<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-widgets">
        <div class="sidebar-navbar">
          <div class="profile-avater">
            <b-img :src="imageUrl + profileImage" alt="Profile Image"
              style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">
            </b-img>
            <h4>{{ user }}</h4>
          </div>
          <div class="profile-navigation">
            <ul>
              <li class="active">
                <nuxt-link
                  :to="$auth.user.type == 2 ? { name: 'profile-dashboard-landlord' } : { name: 'profile-dashboard-tenant' }">
                  <b-icon icon="speedometer2" font-scale="1"></b-icon>
                  Dashboard
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 2">
                <nuxt-link :to="{ name: 'profile-me-id-landloard', params: { id: $auth.user.landlord_id } }">
                  <b-icon icon="person" font-scale="1"></b-icon>
                  Profile
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 3">
                <nuxt-link :to="{ name: 'profile-me-id-tenant', params: { id: $auth.user.tenant_id } }">
                  <b-icon icon="person" font-scale="1"></b-icon>
                  Profile
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 2">
                <nuxt-link :to="{ name: 'profile-property' }">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Properties
                </nuxt-link>
              </li>
              <li v-if="$auth.loggedIn && $auth.user.type == 2">
                <nuxt-link :to="{ name: 'profile-property-ads' }">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Ads
                </nuxt-link>
              </li>
              <li>
                <nuxt-link v-if="$auth.loggedIn && $auth.user.type == 2"
                  :to="{ name: 'profile-property-deed-landlord' }">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Property Deed
                </nuxt-link>

                <nuxt-link v-if="$auth.loggedIn && $auth.user.type == 3" :to="{ name: 'profile-property-deed-tenant' }">
                  <b-icon icon="newspaper" font-scale="1"></b-icon>
                  Property Deed
                </nuxt-link>
              </li>

              <!-- Accoutns -->
              <li v-if="$auth.loggedIn && $auth.user.type == 2" v-b-toggle.accounts>
                <a>
                  <font-awesome-icon icon="fa-solid fa-briefcase" />
                  Accouns
                  <font-awesome-icon class="drop-arrow" icon="fa-solid fa-arrow-right" />
                </a>
              </li>
              <b-collapse id="accounts">
                <li>
                  <nuxt-link class="ml-3" :to="{ name: 'profile-accounts-bank' }">
                    Bank
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="ml-3" :to="{ name: 'profile-accounts-rent-collection' }">
                    Property Payments
                  </nuxt-link>
                </li>
              </b-collapse>
              <!-- ./ Accoutns -->

              <li>
                <nuxt-link v-if="$auth.loggedIn && $auth.user.type == 3" :to="{ name: 'profile-wishlist' }">
                  <b-icon icon="heart-fill" font-scale="1"></b-icon>
                  Wishlist
                </nuxt-link>
              </li>
              <li>
                <b-link @click="logout">
                  <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
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
      'profileImage': ''
    }
  },
  computed: {
    user() {
      return this.$auth.user.name;
    },

    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}`
    }
  },
  async created() {
    if (this.$auth.user.landlord_id) {
      const response = await this.$axios.$post('profile/landlord', { id: this.$auth.user.landlord_id });
      this.profileImage = response.data.landlord.image;
    } else if (this.$auth.user.tenant_id) {
      const response = await this.$axios.$post('profile/tenant', { id: this.$auth.user.tenant_id });
      this.profileImage = response.data.tenant.image;
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$store.dispatch('wishlist/storeWishlist', 0);
      this.$nuxt.$options.router.push({ name: 'login' })
    },
  }
}
</script>

<style scoped>

</style>
