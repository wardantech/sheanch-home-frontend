<template>
  <div>
    <section class="bg-light">
      <b-container fluid>
        <b-row>
          <!-- Sidebar -->
          <b-col lg="3" md="12">
            <Sidebar/>
          </b-col>
          <!-- /.Sidebar -->

          <!-- Main Content -->
          <b-col lg="9" md="12">
            <div class="dashboard-wrapper">

                <div class="page-search">
                  <div>
                    <div class="form-group">
                      <h5>Create Property Ads</h5>
                    </div>
                  </div>

                  <div>
                    <div class="form-group">
                      <nuxt-link
                        class="btn btn-dark btn-sm"
                        :to="{ name: 'account-property'}">
                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                        Back to list
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              <div>

                <form @submit.prevent="store">
                  <b-row>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="Property">
                        <select @change="setRent" v-model="form.property_id" id=""
                                class="form-control custom-input-control">
                          <option value="">Select</option>
                          <option v-for="(property, i) in properties"
                                  :sale_type="property.sale_type"
                                  :property_category="property.property_category"
                                  :security_money="property.security_money"
                                  :rent_amount="property.rent_amount"
                                  :division_id="property.division_id"
                                  :district_id="property.district_id"
                                  :thana_id="property.thana_id"
                                  :property_type_id="property.property_type_id"
                                  :value="property.id" :key="i">
                            {{ property.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.property_id">{{ errors.property_id[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="Property category">
                        <b-form-input
                          class="custom-input-control"
                          v-model="form.property_category"
                          type="text"
                          placeholder="Property category"
                          readonly
                        >
                        </b-form-input>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.property_category">{{ errors.property_category[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="Rent amount">
                        <b-form-input class="custom-input-control" v-model="form.rent_amount" type="text" placeholder="Rent amount"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.rent_amount">{{ errors.rent_amount[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="Security money">
                        <b-form-input class="custom-input-control" v-model="form.security_money" type="text" placeholder="Rent amount"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.security_money">{{ errors.security_money[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="Start date">
                        <b-form-input class="custom-input-control" v-model="form.start_date" type="date"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.start_date">{{ errors.start_date[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="End date">
                        <b-form-input class="custom-input-control" v-model="form.end_date" type="date"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.start_date">{{ errors.start_date[0] }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group label="Description">
                        <b-form-textarea class="custom-input-control"
                          v-model="form.description"
                          placeholder="Say something..."
                          rows="3"
                        ></b-form-textarea>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-form-group class="mt-3">
                    <b-button type="submit" class="btn-browse-more btn-height" variant="info">Save</b-button>
                  </b-form-group>
                </form>
              </div>
            </div>
          </b-col>
          <!--/. Main Content -->
        </b-row>
      </b-container>
    </section>

    <!-- Start newsletter -->
    <Newsletter/>
    <!-- End newsletter -->
  </div>
</template>

<script>
  import Sidebar from "../../../components/frontend/dashboard/Sidebar";
  import Newsletter from "../../../components/frontend/Newsletter";

  export default {
    name: "create",
    components: {Newsletter, Sidebar},
    data() {
      return {

        form: {
          landlord_name: this.$auth.user.name,
          landlord_id: this.$auth.user.landlord_id,
          sale_type: '',
          property_id:'',
          property_category:'',
          property_category_id:'',
          property_type_id:'',
          division_id:'',
          district_id:'',
          thana_id:'',
          rent_amount: '',
          security_money: '',
          status: '',
          start_date:'',
          end_date:'',
          description: '',

        },
        properties:'',
        errors: {},
      }
    },

    async created() {
      let properties = await this.$axios.$post('property/ad/get-property-as-landlord', {landlordId: this.form.landlord_id});
      this.properties = properties.data;
      console.log(properties.data);

    },

    methods: {
      setRent(event) {
        var options = event.target.options
        if (options.selectedIndex > -1) {
          this.form.rent_amount = options[options.selectedIndex].getAttribute('rent_amount');
          this.form.security_money = options[options.selectedIndex].getAttribute('security_money');
          this.form.sale_type = options[options.selectedIndex].getAttribute('sale_type');

          options[options.selectedIndex].getAttribute('property_category') == 1
            ? this.form.property_category = 'Commercial'
            : this.form.property_category = 'Residential';

          console.log(options[options.selectedIndex].getAttribute('property_category'))

          this.form.division_id = options[options.selectedIndex].getAttribute('division_id');
          this.form.district_id = options[options.selectedIndex].getAttribute('district_id');
          this.form.thana_id = options[options.selectedIndex].getAttribute('thana_id');
          this.form.property_category_id = options[options.selectedIndex].getAttribute('property_category');
          this.form.property_type_id = options[options.selectedIndex].getAttribute('property_type_id');


        }
      },
      async store() {
        await this.$axios.$post('property/ad/store', this.form)
          .then(response => {
            this.$izitoast.success({
              title: 'Success !!',
              message: 'Property ads create successfully!'
            });

            this.$router.push({name: 'account-property-ads'});
          })
          .catch(error => {

            if (error.response.status == 422) {
              this.errors = error.response.data.errors
            }
            else {
              alert(error.response.message)
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
