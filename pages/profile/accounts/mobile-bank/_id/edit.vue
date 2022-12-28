<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Edit your payment details</h5>
        </div>
      </div>

      <div>
        <div class="form-group">
          <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'profile-accounts-mobile-bank' }">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            Back to list
          </nuxt-link>
        </div>
      </div>
    </div>

    <div>
      <form @submit.prevent="update">
        <b-row>
          <b-col md="6">
            <b-form-group label="Your name">
              <b-form-input :value="this.$auth.user.name" class="custom-input-control" type="text" readonly></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Bank">
              <select v-model="form.mobile_banking_id" class="form-control custom-input-control">
                <option v-for="(bank, index) in banks" :value="bank.id" :key="index">{{ bank.name }}</option>
              </select>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.mobile_banking_id">
                {{ errors.mobile_banking_id[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Account Number">
              <b-form-input v-model="form.account_number" class="custom-input-control" type="text"></b-form-input>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.account_number">
                {{ errors.account_number[0] }}
              </strong>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="button-t-m" style="margin-top: 30px">
              <b-button type="submit" variant="success" :disabled="loading">Update</b-button>
            </div>
          </b-col>
        </b-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: 'mobile-getway-edit',
  data() {
    return {
      loading: false,
      banks: '',
      errors: {},
      form: {
        mobile_banking_id: '',
        user_id: this.$auth.user.landlord_id,
        account_number: '',
      }
    }
  },
  async created() {
    await this.$axios.$post('accounts/mobile-method-edit', { id: this.$route.params.id })
      .then(res => {
        this.form = res.data.paymentMethod;
        this.banks = res.data.banks;
      })
  },
  methods: {
    async update() {
      this.loading = true;
      await this.$axios.$put('accounts/mobile-method-update/' + this.$route.params.id, this.form)
        .then(response => {
          this.loading = false;
          this.$izitoast.success({
            title: 'Success !!',
            message: 'Your payment method successfully added'
          });

          this.$router.push({ name: 'profile-accounts-mobile-bank' });
        })
        .catch(error => {
          this.loading = false;
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
          }
          else {
            alert(error.response.message)
          }
        });
    }
  }
}
</script>

<style>

</style>
