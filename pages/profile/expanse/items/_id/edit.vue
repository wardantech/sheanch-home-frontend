<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Edit expanse item</h5>
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
      <form @submit.prevent="update">
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
          <b-button type="submit" class="btn-browse-more btn-height" variant="info">Update</b-button>
        </b-form-group>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: "expanse-items-edit",
  data() {
    return {
      form: {
        name: '',
        updated_by: this.$auth.user.id
      },
      errors: {},
    }
  },
  async created() {
    await this.$axios.$post('accounts/expanses-items/edit', { id: this.$route.params.id })
      .then(response => {
        this.form.name = response.data.expanseItem.name;
      }).catch(error => {
        alert(error);
      });
  },
  methods: {
    async update() {
      await this.$axios.$put('accounts/expanses-items/update/' + this.$route.params.id, this.form)
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
            alert(error);
          }
        })
    }
  }
}
</script>

<style>

</style>
