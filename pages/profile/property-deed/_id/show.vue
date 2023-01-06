<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Property Deed Details</h5>
        </div>
      </div>
      <!-- <div>
        <div class="form-group">
          <nuxt-link class="btn btn-info btn-sm" :to="{ name: 'profile-property' }">
            Submit Tenant Info.
          </nuxt-link>
        </div>
      </div> -->
    </div>

    <b-row>
      <b-col md="4" class="mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img :src="imageUrl + deed.image" alt="Tenant" class="rounded-circle" width="100px" height="100px">
              <div class="mt-3">
                <h4>{{ deed.name }}</h4>
                <button class="btn btn-sm btn-success" @click="accept" :disabled="deed.status == 2">Accept</button>
                <button class="btn btn-sm btn-outline-danger" @click="decline" :disabled="deed.status == 2">Decline</button>
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
      deed: {},
      userId: this.$auth.user.id,
      deedId: this.$route.params.id
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}`
    }
  },
  async created() {
    await this.$axios.$post('property/deed/show', { deedId: this.deedId, userId: this.userId })
      .then(res => {
        this.deed = res.data.deed;
      }).catch(err => {
        alert(err);
      });
  },
  methods: {
    accept() {
      this.$swal.fire({
        title: 'Are you confirm to accept tenant for this property?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const data = {
            deedId: this.deedId,
            userId: this.userId
          }
          this.$axios.$post('property/deed/accept', data)
            .then(response => {
              this.$swal.fire('Success', 'Deed successfully accepted');
            }).catch(error => {
              alert(error);
            })
        }
      })
    },
    decline() {
      this.$swal.fire({
        title: 'Are you confirm to decline this request?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const data = {
            deedId: this.$route.params.id,
            userId: this.userId
          }
          this.$axios.$post('property/deed/decline', data)
            .then(response => {
              this.$swal.fire('Success', 'Request successfully decline');
            }).catch(error => {
              alert(error);
            })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
