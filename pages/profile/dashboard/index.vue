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
      <b-col lg="4" md="6" sm="12">
        <div class="dashboard-status status-1">
          <div class="dashboard-status-content">
            <h4>{{ data.totalProperties }}</h4>
            <span>Approved properties</span>
          </div>
          <div class="dashboard-status-icon">
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </div>
        </div>
      </b-col>

      <b-col lg="4" md="6" sm="12">
        <div class="dashboard-status status-2">
          <div class="dashboard-status-content">
            <h4>{{ data.totalPropertyAds }}</h4>
            <span>Approved ads</span>
          </div>
          <div class="dashboard-status-icon">
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </div>
        </div>
      </b-col>

      <b-col lg="4" md="6" sm="12">
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
  name: "landlord",
  beforeMount() {
    const authId = this.$auth.user.id;
    if (!authId) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
  },
  data() {
    return {
      data: ''
    }
  },
  async created() {
    const response = await this.$axios.$post('get-dashboard-data', { userId: this.$auth.user.id });
    this.data = response.data;
  },
}
</script>

<style scoped>

</style>
