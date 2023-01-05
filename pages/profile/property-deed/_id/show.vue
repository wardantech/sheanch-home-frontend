<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Property Deed Details</h5>
        </div>
      </div>
      <div>
        <div class="form-group">
          <nuxt-link class="btn btn-info btn-sm" :to="{ name: 'profile-property' }">
            Submit Tenant Info.
          </nuxt-link>
        </div>
      </div>
    </div>

    <b-row>
      <b-col md="4" class="mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img :src="imageUrl + deed.image" alt="Tenant" class="rounded-circle" width="100px" height="100px">
              <div class="mt-3">
                <h4>{{ deed.name }}</h4>
                <button class="btn btn-primary">Accept</button>
                <button class="btn btn-outline-danger">Decline</button>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="8" class="mb-3">
        <div class="card">
          <div class="card-body">
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Name:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.name }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Mobile:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.mobile }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Email:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.email }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">NID:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.nid }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Post Code:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.post }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Present Address:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.present_address }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Division:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.division }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">District:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.district }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">Thana:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.thana }}</b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col sm="3">
                <h6 class="mb-0">About me:</h6>
              </b-col>
              <b-col sm="9" class="text-secondary">{{ deed.description }}</b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: 'property-deed-show',
  data() {
    return {
      deed: {}
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}`
    }
  },
  async created() {
    await this.$axios.$post('property/deed/show', { deedId: this.$route.params.id })
      .then(res => {
        this.deed = res.data.deed;
        console.log(res);
      }).catch(err => {
        alert(err);
      });
  },
}
</script>

<style scoped>

</style>
