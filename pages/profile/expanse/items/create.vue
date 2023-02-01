<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Create expanse item</h5>
        </div>
      </div>

      <div>
        <div class="form-group">
          <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'profile-expanse-items' }">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            Back to list
          </nuxt-link>
        </div>
      </div>
    </div>

    <div>
      <form @submit.prevent="store">
        <b-row>
          <b-col md="12">
            <b-form-group label="Item name">
              <b-form-input v-model="form.name" class="custom-input-control" type="text"
                placeholder="Item name"></b-form-input>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.name">
                {{ errors.name[0] }}
              </strong>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group class="mt-3">
          <b-button type="submit" class="btn-browse-more btn-height" variant="info">Save</b-button>
        </b-form-group>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: "expanse-items-create",
  data() {
    return {
      form: {
        name: '',
        created_by: this.$auth.user.id
      },
      errors: {},
    }
  },
  methods: {
    async store() {
      await this.$axios.$post('/accounts/expanses-items/store', this.form)
        .then(response => {
          this.$izitoast.success({
            title: 'Success !!',
            message: response.message
          });

          this.$router.push({ name: 'profile-expanse-items' });
        }).catch(error => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors
          }
          else {
            alert(error)
          }
        })
    }
  }
}
</script>

<style>

</style>
