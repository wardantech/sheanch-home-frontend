<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Due Collection</h5>
        </div>
      </div>

      <div>
        <div class="form-group">
          <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'profile-accounts-due-collection' }">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            Back to list
          </nuxt-link>
        </div>
      </div>
    </div>

    <div>
      <form @submit.prevent="store">
        <b-row>
          <b-col md="6">
            <b-form-group label="Select Property">
              <select v-model="form.property_id" class="form-control custom-input-control" @change="propertyInfo">
                <option v-for="(deed, index) in deeds" :value="deed.property.id" :key="index">
                  {{ deed.property.name }} - ( {{ deed.tenant.name }} )
                </option>
              </select>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.property_id">
                {{ errors.property_id[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Due amount">
              <b-form-input v-model="due" class="custom-input-control" type="text" readonly></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Paid amount">
              <b-form-input v-model="form.cash_in" @keyup="chackAmount" class="custom-input-control" type="number" min="0"
                placeholder="Enter amount" :disabled="isPaidAmount"></b-form-input>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.cash_in">
                {{ errors.cash_in[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Due amount">
              <b-form-input v-model="form.due_amount" class="custom-input-control" type="number"
                placeholder="Due amount" readonly></b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Date">
              <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2" :disabled="isPaidAmount"></b-form-datepicker>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.date">
                {{ errors.date[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Select Method">
              <select v-model="form.payment_method" class="form-control custom-input-control" @change="paymentMethod" :disabled="isPaidAmount">
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
              <select v-model="form.bank_id" class="form-control custom-input-control" :disabled="isPaidAmount">
                <option v-for="(method, index) in paymentMethods" :value="method.bank.id" :key="index">
                  {{ method.bank.name }}
                </option>
              </select>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 3" md="6">
            <b-form-group label="Mobile Bank">
              <select v-model="form.mobile_banking_id" class="form-control custom-input-control" :disabled="isPaidAmount">
                <option v-for="(method, index) in paymentMethods" :value="method.mobile_bank.id" :key="index">
                  {{ method.mobile_bank.name }}
                </option>
              </select>
            </b-form-group>
          </b-col>

          <b-col v-if="isPaymentMethod == 3" md="6">
            <b-form-group label="Transaction id">
              <b-form-input v-model="form.transaction_id" class="custom-input-control" type="number"
                placeholder="Transaction id" :disabled="isPaidAmount"></b-form-input>
              <strong class="text-danger" style="font-size: 12px" v-if="errors.transaction_id">
                {{ errors.transaction_id[0] }}
              </strong>
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-group label="Description">
              <b-form-textarea id="description" placeholder="Description..." rows="3" v-model="form.remark"
                class="custom-input-control" :disabled="isPaidAmount"></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div class="button-t-m" style="margin-top: 30px">
              <b-button type="submit" variant="success" :disabled="loading">Add Payment</b-button>
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
  name: "rent-collection-create",
  data() {
    return {
      loading: true,
      deeds: '',
      tenantId: '',
      due: '',
      paymentMethods: [],
      isPaymentMethod: '',
      isPaidAmount: true,
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
        created_by: '',
        date: '',
        remark: ''
      }
    }
  },
  async created() {
    await this.$axios.$post('property/deed/get-due-deed', { userId: this.$auth.user.id })
      .then(res => {
        this.deeds = res.data.deeds;
      })
      .catch(err => {
        alert(err);
      });
  },
  methods: {
    async propertyInfo(event) {
      let propertyId = event.target.value;

      await this.$axios.$post('property/deed/get-due-amount', { propertyId: propertyId })
        .then(res => {
          this.due = res.data.totalDue;
          this.tenantId = res.data.property.deed[0].tenant_id;

          if (this.due > 0) {
            this.isPaidAmount = false;
            this.loading = false;
          }

          // Form
          this.form.user_id = this.$auth.user.id;
          this.form.created_by = this.$auth.user.id;
          this.form.property_deed_id = res.data.property.deed[0].id;
        })
        .catch(err => {
          alert(err);
        });
    },
    async paymentMethod(event) {
      const tenantId = this.tenantId;
      if (!tenantId) {
        alert('Select Propert First');
        this.form.payment_method = '';
        return;
      }

      const value = event.target.value;
      this.isPaymentMethod = event.target.value;
      this.paymentMethods = [];
      if (value == 2 || value == 3) {
        await this.$axios.$post('property/deed/get-payment-method', { userId: tenantId, method: value })
          .then(res => {
            this.paymentMethods = res.data.banks;
          });
      }
    },
    async store() {
      this.loading = true;
      await this.$axios.$post('property/deed/due-property/store', this.form)
        .then(response => {
          this.loading = false;
          this.$izitoast.success({
            title: 'Success !!',
            message: 'Due Payment Successfully Added'
          });

          // this.$router.push({ name: 'profile-accounts-rent-collection' });
        }).catch(error => {
          this.loading = false;
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
          }
          else {
            alert(error.response.message)
          }
        });
    },
    chackAmount(event) {
      const value = event.target.value;
      if (value > this.due) {
        alert('Amount cannot be greater than due amount');
        this.form.cash_in = '';
        this.form.due_amount = '';
      }else {
        this.form.due_amount = (this.due - event.target.value);
      }
    }
  }
}
</script>

<style>

</style>
