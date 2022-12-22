<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Get rent from tenant.</h5>
        </div>
      </div>

      <div>
        <div class="form-group">
          <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'profile-property-deed-landlord' }">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            Back to list
          </nuxt-link>
        </div>
      </div>
    </div>

    <div>
      <h6>Property: {{ propertyName }}</h6>
      <h6>
        Tenant:
        <nuxt-link class="text-info" :to="{ name: 'profile-me-id-show-tenant', params: { id: tenantId } }">
          {{ tenantName }}
        </nuxt-link>
      </h6>
      <hr>

      <form @submit.prevent="store">
        <b-row>
          <b-col md="6">
            <b-form-group label="Rent amount">
              <b-form-input v-model="rent" class="custom-input-control" type="text" readonly></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Paid amount">
              <b-form-input v-model="form.cash_in" class="custom-input-control" type="text"
                placeholder="Enter amount"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Due amount ( If have due! )">
              <b-form-input v-model="form.due_amount" class="custom-input-control" type="text"
                placeholder="Due amount"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Date">
              <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Method">
              <select v-model="form.payment_method" class="form-control custom-input-control" @change="paymentMethod">
                <option value="">Select</option>
                <option value="1">Cash</option>
                <option value="2">Bank</option>
                <option value="3">Mobile Bank</option>
              </select>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 2" md="6">
            <b-form-group label="Banks">
              <select v-model="form.bank_id" class="form-control custom-input-control">
                <option v-for="(bank, index) in banks" :value="bank.id" :key="index">{{ bank.name }}</option>
              </select>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 3" md="6">
            <b-form-group label="Paid amount">
              <select v-model="form.mobile_banking_id" class="form-control custom-input-control">
                <option v-for="(bank, index) in mobiles" :value="bank.id" :key="index">{{ bank.name }}</option>
              </select>
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-group label="Description">
              <b-form-textarea id="description" placeholder="Description..." rows="3" v-model="form.remark"
                class="custom-input-control"></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="button-t-m" style="margin-top: 30px">
              <b-button type="submit" variant="success">Add Payment</b-button>
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
  name: 'get-rent',
  data() {
    return {
      propertyName: '',
      tenantName: '',
      tenantId: '',
      rent: '',
      banks: '',
      mobiles: '',
      isPaymentMethod: '',
      form: {
        user_id: '',
        property_id: '',
        bank_id: '',
        mobile_banking_id: '',
        property_deed_id: '',
        due_amount: '',
        cash_in: '',
        payment_method: '',
        created_by: '',
        date: '',
        remark: ''
      }
    }
  },
  async created() {
    const res = await this.$axios.$post('property/deed/get-rent-property', { deedId: this.$route.params.id });

    this.mobiles = res.data.mobiles;
    this.banks = res.data.banks;

    this.propertyName = res.data.deed.property.name;
    this.tenantName = res.data.deed.tenant.name;
    this.tenantId = res.data.deed.tenant.id;
    this.rent = res.data.deed.property.rent_amount;

    // Form
    this.form.user_id = this.$auth.user.landlord_id;
    this.form.property_id = res.data.deed.property.id;
    this.form.created_by = this.$auth.user.landlord_id;
    this.form.property_deed_id = this.$route.params.id;
  },
  methods: {
    paymentMethod(event) {
      this.isPaymentMethod = event.target.value;
    },

    async store() {
      await this.$axios.$post('property/deed/rent-property/store', this.form)
        .then(response => {

          console.log(response);

          this.$izitoast.success({
            title: 'Success !!',
            message: 'Payment Done!'
          });

          // this.$router.push({ name: 'profile-property' });
        })
        .catch(error => {

          console.log(error);

          // if (error.response.status == 422) {
          //   this.errors = error.response.data.errors
          // }
          // else {
          //   alert(error.response.message)
          // }
        })
    }
  }
}
</script>

<style>

</style>
