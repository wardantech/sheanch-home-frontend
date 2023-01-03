<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Edit Rent Collection.</h5>
        </div>
      </div>

      <div>
        <div class="form-group">
          <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'profile-accounts-rent-collection' }">
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

      <form @submit.prevent="update">
        <b-row>
          <b-col md="6">
            <b-form-group label="Rent amount">
              <b-form-input v-model="rent" class="custom-input-control" type="text" readonly></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Paid amount">
              <b-form-input v-model="form.cash_in" @keyup="dueAmount" class="custom-input-control" type="number" min="0"
                placeholder="Enter amount"></b-form-input>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.cash_in">
                {{ errors.cash_in[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Due amount ( If have due! )">
              <b-form-input v-model="form.due_amount" class="custom-input-control" type="number"
                placeholder="Due amount" readonly></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Date">
              <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.date">
                {{ errors.date[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Method">
              <select v-model="form.payment_method" class="form-control custom-input-control" @change="paymentMethod()">
                <option value="">Select</option>
                <option value="1">Cash</option>
                <option value="2">Bank</option>
                <option value="3">Mobile Bank</option>
              </select>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.payment_method">
                {{ errors.payment_method[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 2" md="6">
            <b-form-group label="Banks">
              <select v-model="form.bank_id" class="form-control custom-input-control">
                <option v-for="(method, index) in paymentMethods" :value="method.bank.id" :key="index">
                  {{ method.bank.name }}
                </option>
              </select>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 3" md="6">
            <b-form-group label="Mobile Bank">
              <select v-model="form.mobile_banking_id" class="form-control custom-input-control">
                <option v-for="(method, index) in paymentMethods" :value="method.mobile_bank.id" :key="index">
                  {{ method.mobile_bank.name }}
                </option>
              </select>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 3" md="6">
            <b-form-group label="Transaction id">
              <b-form-input v-model="form.transaction_id" class="custom-input-control" type="number"
                placeholder="Transaction id"></b-form-input>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.transaction_id">
                {{ errors.transaction_id[0] }}
              </strong>
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
              <b-button type="submit" variant="success" :disabled="loading">Update Payment</b-button>
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
  name: 'edit-rent',
  data() {
    return {
      loading: false,
      propertyName: '',
      tenantName: '',
      tenantId: '',
      rent: '',
      paymentMethods: [],
      isPaymentMethod: '',
      errors: {},
      form: {
        user_id: '',
        property_id: '',
        bank_id: '',
        mobile_banking_id: '',
        property_deed_id: '',
        due_amount: '',
        cash_in: '',
        payment_method: '',
        transaction_id: '',
        updated_by: '',
        date: '',
        remark: ''
      }
    }
  },
  async created() {
    await this.$axios.$post('property/deed/rent-property/edit', { transactionId: this.$route.params.id })
      .then(res => {
        this.propertyName = res.data.transaction.property.name;
        this.tenantName = res.data.transaction.deed.tenant.name;
        this.tenantId = res.data.transaction.deed.tenant.id;
        this.rent = res.data.transaction.property.rent_amount;
        this.isPaymentMethod = res.data.transaction.payment_method;

        // Form Data
        this.form.updated_by = this.$auth.user.landlord_id;
        this.form.cash_in = res.data.transaction.cash_in;

        if (res.data.transaction.due === null) {
          this.form.due_amount = 0;
        } else {
          this.form.due_amount = res.data.transaction.due.amount;
        }

        this.form.date = res.data.transaction.date;
        this.form.payment_method = res.data.transaction.payment_method;
        this.form.bank_id = res.data.transaction.bank_id;
        this.form.mobile_banking_id = res.data.transaction.mobile_banking_id;
        this.form.transaction_id = res.data.transaction.transaction_id;
        this.form.remark = res.data.transaction.remark;

        this.form.user_id = this.$auth.user.landlord_id;
        this.form.property_id = res.data.transaction.property.id;
        this.form.property_deed_id = res.data.transaction.deed.id;

        this.paymentMethod();
      });
  },
  methods: {
    dueAmount(event) {
      const value = event.target.value;
      if (value > this.rent) {
        alert('Amount cannot be greater than rent');
        this.form.cash_in = '';
        this.form.due_amount = '';
      } else {
        this.form.due_amount = (this.rent - event.target.value);
      }
    },

    async paymentMethod() {
      this.isPaymentMethod = this.form.payment_method;;
      const value = this.form.payment_method;;
      const userId = this.$auth.user.landlord_id

      this.paymentMethods = [];

      if (value == 2 || value == 3) {
        await this.$axios.$post('property/deed/get-payment-method', { userId: userId, method: value })
          .then(res => {
            this.paymentMethods = res.data.banks;
          });
      }
    },

    async update() {
      this.loading = true;
      await this.$axios.$put('property/deed/rent-property/update/'+this.$route.params.id, this.form)
        .then(response => {
          this.loading = false;
          this.$izitoast.success({
            title: 'Success !!',
            message: 'Payment Updated!'
          });

          this.$router.push({ name: 'profile-accounts-rent-collection' });
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
    },
  }
}
</script>

<style>

</style>