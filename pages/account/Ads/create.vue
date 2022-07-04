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

                    <b-col lg="12" md="12" sm="12">
                      <b-form-group label="Property">
                        <select @change="setRent" v-model="form.property_id" id=""
                                class="form-control custom-input-control">
                          <option value="">Select</option>
                          <option v-for="(property, i) in properties"
                                  :sale_type="property.sale_type"
                                  :security_money="property.security_money"
                                  :rent_amount="property.rent_amount" :value="property.id" :key="i">
                            {{ property.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.property_id">{{ errors.property_id[0] }}</strong>
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
                      <b-form-group label="Status">
                        <select v-model="form.status" id="" class="form-control custom-input-control">
                          <option value="">Select</option>
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>

                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.status">{{ errors.status[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group label="Start date">
                        <b-form-input class="custom-input-control" v-model="form.start_date" type="date"></b-form-input>
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
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'

  export default {
    name: "create",
    components: {Dropzone, Newsletter, Sidebar},
    data() {
      return {

        form: {
          landlord_name: this.$auth.user.name,
          landlord_id: this.$auth.user.landlord_id,
          sale_type: '',
          property_id:'',
          lease_type: '',
          rent_amount: '',
          security_money: '',
          status: '',
          start_date:'',
          description: '',

        },
        properties:'',
        errors: {},
      }
    },

    async created() {
      let properties = await this.$axios.$post('property/ad/get-property-as-landlord', {landlordId: this.form.landlord_id});
      this.properties = properties.data;
    },

    methods: {
      setRent(event) {
        var options = event.target.options
        if (options.selectedIndex > -1) {
          this.form.rent_amount = options[options.selectedIndex].getAttribute('rent_amount');
          this.form.security_money = options[options.selectedIndex].getAttribute('security_money');
          this.form.sale_type = options[options.selectedIndex].getAttribute('sale_type');
          console.log(this.form.sale_type);
        }
      },
      async store() {
        await this.$axios.$post('property/ad/store', this.form)
          .then(response => {
            this.$izitoast.success({
              title: 'Success !!',
              message: 'Property create successfully!'
            });

            this.$router.push({name: 'account-Ads'});
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
