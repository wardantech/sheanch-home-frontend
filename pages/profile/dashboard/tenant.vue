<template>
  <div>
    <b-row>
      <b-col lg="12" md="12" sm="12">
        <h4>
          Your Current Credits:
          <span class="pc-title">0</span>
        </h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="6" md="6" sm="12">
        <div class="dashboard-status status-2">
          <div class="dashboard-status-content">
            <h4>{{ data.totalRequestDeed }}</h4>
            <span>Total request deeds</span>
          </div>
          <div class="dashboard-status-icon">
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </div>
        </div>
      </b-col>

      <b-col lg="6" md="6" sm="12">
        <div class="dashboard-status status-3">
          <div class="dashboard-status-content">
            <h4>{{ data.totalCompleteDeed }}</h4>
            <span>Total complete deeds</span>
          </div>
          <div class="dashboard-status-icon">
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: "tenant",
  beforeMount() {
    const authId = this.$auth.user.tenant_id;
    if (!authId) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
  },
  data() {
    return {
      data: ''
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const response = await this.$axios.$post('get-tenant-dashboard-data', { tenantId: this.$auth.user.tenant_id });
      this.data = response.data;
      console.log('nice wer')
      this.$store.dispatch('wishlist/storeWishlist', this.data.wishlistCount);
    },
  }
}
</script>

<style scoped>

</style>
