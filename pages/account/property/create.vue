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
              <form action="">
                <div class="page-search">
                  <div>
                    <div class="form-group">
                      <h5>Create Property</h5>
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
              </form>

              <div>
                <form @submit.prevent="store">
                  <b-row>
                    <b-col lg="6" md="6" sm="12">
                      <b-form-group>
                        <b-form-input v-model="form.landlord_name" class="custom-input-control" type="text"
                                      placeholder="Landlord" readonly></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.landlord_name">{{
                          errors.landlord_name[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group>
                        <select v-model="form.property_type_id"
                                class="form-control custom-input-control">
                          <option value="">Select property types *</option>
                          <option v-for="(type, i) in propertyTypes" :key="i" :value="type.id">
                            {{ type.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.property_type_id">{{ errors.property_type_id[0] }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col lg="6" md="6" sm="12">
                      <b-form-group>
                        <b-form-input v-model="form.name" class="custom-input-control" type="text"
                                      placeholder="Property name *"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.name">{{
                          errors.name[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group>
                        <select @change="getDistricts(form.division_id)" v-model="form.division_id" id=""
                                class="form-control custom-input-control">
                          <option value="">Select division *</option>
                          <option v-for="(division, i) in divisions" :value="division.id" :key="i">
                            {{ division.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.division_id">{{ errors.division_id[0] }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <select @change="getThanas(form.district_id)" v-model="form.district_id" id=""
                                class="form-control custom-input-control">
                          <option value="">Select district *</option>
                          <option v-for="(district, i) in districts" :value="district.id" :key="i">
                            {{ district.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.district_id">{{ errors.district_id[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <select v-model="form.thana_id" class="form-control custom-input-control">
                          <option value="">Select Thana *</option>
                          <option v-for="(thana, i) in thanas" :value="thana.id" :key="i">
                            {{ thana.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.thana_id">{{ errors.thana_id[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <b-form-input v-model="form.zip_code" class="custom-input-control" type="text"
                                      placeholder="Zip Code *"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.zip_code">{{
                          errors.zip_code[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <b-form-input min="1" v-model="form.bed_rooms" class="custom-input-control" type="number"
                                      placeholder="Enter Quantity (Qty)"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.bed_rooms">{{
                          errors.bed_rooms[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <b-form-input min="1" v-model="form.bath_rooms" class="custom-input-control" type="number"
                                      placeholder="Bath Rooms (Qty)"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.bath_rooms">{{
                          errors.bath_rooms[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <b-form-input min="1" v-model="form.units" class="custom-input-control" type="number"
                                      placeholder="Units"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.units">{{
                          errors.units[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <b-form-input min="1" v-model="form.house_no" class="custom-input-control" type="text"
                                      placeholder="House Number"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.house_no">{{
                          errors.house_no[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <select v-model="form.sale_type"
                                class="form-control custom-input-control">
                          <option value="">Select</option>
                          <option value="1">For Rent</option>
                          <option value="2">For Sale</option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.sale_type">{{ errors.sale_type[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="4" md="4" sm="12">
                      <b-form-group>
                        <select v-model="form.lease_type"
                                class="form-control custom-input-control">
                          <option value="">Select lease type</option>
                          <option value="1">Commercial</option>
                          <option value="2">Residential</option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.lease_type">{{ errors.lease_type[0] }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group>
                        <b-form-textarea
                          id="address"
                          placeholder="Address *"
                          rows="3"
                          v-model="form.address"
                          class="custom-input-control"
                        ></b-form-textarea>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.address">{{ errors.address[0] }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col lg="6" md="6" sm="12">
                      <b-form-group>
                        <b-form-input min="0" v-model="form.rent_amount" class="custom-input-control" type="number"
                                      placeholder="Rent Amount *"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.rent_amount">{{
                          errors.rent_amount[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" md="6" sm="12">
                      <b-form-group>
                        <b-form-input v-model="form.security_money" class="custom-input-control" type="number"
                                      placeholder="Security money"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.security_money">{{
                          errors.security_money[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group>
                        <b-form-input min="1" v-model="form.area_size" class="custom-input-control" type="number"
                                      placeholder="Area Size"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.area_size">{{
                          errors.area_size[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group>
                        <b-form-textarea
                          id="description"
                          placeholder="Description..."
                          rows="3"
                          v-model="form.description"
                          class="custom-input-control"
                        ></b-form-textarea>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.description">{{ errors.description[0] }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group>
                        <dropzone id="foo" ref="el"
                                  :options="options"
                                  :destroyDropzone="false"
                        >
                        </dropzone>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <h5> Utilities Paid By Landlord </h5>
                      <b-row>
                        <div class="col-md-6 col-lg-6 col-sm-12 my-2 form-check"
                             v-for="(utilityCategory, i) in utilityCategories" :key="i">
                        <span v-if="utilityCategory.utilities.length > 0">
                          <b>{{utilityCategory.name}}</b>
                          <div class="form-check ml-2" v-for="(utility, j) in utilityCategory.utilities" :key="j">
                            <input class="form-check-input mt-2"
                                   type="checkbox"
                                   :value="utility.id"
                                   v-model="form.utilities_paid_by_landlord"
                                   :id="'utility-'+utility.id">
                            <label class="form-check-label" :for="'utility-'+utility.id">
                              {{ utility.name }}
                            </label>
                          </div>
                        </span>
                        </div>
                      </b-row>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <h5> Utilities Paid By Tenant </h5>
                      <b-row>
                        <div class="col-md-6 col-lg-6 col-sm-12 my-2 form-check"
                             v-for="(utilityCategory, i) in utilityCategories" :key="i">
                          <span v-if="utilityCategory.utilities.length > 0">
                            <b>{{utilityCategory.name}}</b>
                            <div class="form-check ml-2" v-for="(utility, j) in utilityCategory.utilities" :key="j">
                            <input class="form-check-input mt-2"
                                   type="checkbox"
                                   :value="utility.id"
                                   v-model="form.utilities_paid_by_tenant"
                                   :id="'tenantUtility-'+utility.id">
                            <label class="form-check-label" :for="'tenantUtility-'+utility.id">
                              {{ utility.name }}
                            </label>
                          </div>
                          </span>
                        </div>
                      </b-row>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12" class="mt-4">
                      <h5>Facilities</h5>
                      <b-row>
                        <div class="col-md-6 col-lg-6 col-sm-12 my-2 form-check"
                             v-for="(facilityCategory, i) in facilitiesCategories" :key="i">
                          <span v-if="facilityCategory.facilities.length > 0">
                            <b>{{facilityCategory.name}}</b>
                            <div class="form-check ml-2" v-for="(facility, j) in facilityCategory.facilities" :key="j">
                            <input class="form-check-input mt-2"
                                   type="checkbox"
                                   :value="facility.id"
                                   v-model="form.facilities"
                                   :id="'facilityUtility-'+facility.id">
                            <label class="form-check-label" :for="'facilityUtility-'+facility.id">
                              {{ facility.name }}
                            </label>
                          </div>
                          </span>
                        </div>
                      </b-row>
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
        options: {
          url: "url",
          addRemoveLinks: true,
          headers: {"Authorization": this.$auth.strategy.token.get()},
          // maxFiles: 1,
          autoProcessQueue: false,
          acceptedFiles: ".jpeg,.jpg,.png",
          parallelUploads: 20,
          maxFilesize: 2,
          maxFiles: 20, // Test
        },

        form: {
          landlord_name: this.$auth.user.name,
          landlord_id: this.$auth.user.id,
          property_type_id: '',
          name: '',
          division_id: '',
          district_id: '',
          thanas: '',
          zip_code: '',
          bed_rooms: '',
          bath_rooms: '',
          units: '',
          house_no: '',
          sale_type: '',
          lease_type: '',
          address: '',
          rent_amount: '',
          security_money: '',
          area_size: '',
          status: '',
          description: '',
          image: '',
          facilities: [],
          utilities_paid_by_tenant: [],
          utilities_paid_by_landlord: []
        },
        previewImage: null,
        propertyTypes: '',
        landlord: '',
        divisions: '',
        districts: '',
        thanas: '',
        utilityCategories: '',
        facilitiesCategories: '',
        errors: {},
      }
    },

    async created() {
      const propertyTypes = await this.$axios.$get('property/get-property-type');
      this.propertyTypes = propertyTypes.data;

      const utilityCategories = await this.$axios.$get('property/get-utilities');
      this.utilityCategories = utilityCategories.data;

      const facilitiesCategories = await this.$axios.$get('property/get-facilities');
      this.facilitiesCategories = facilitiesCategories.data;

      const divisions = await this.$axios.$get('settings/divisions');
      this.divisions = divisions.data;
    },

    methods: {
      async getDistricts(division_id) {
        this.thanas = '';
        let district = await this.$axios.$post('settings/districts', {divisionId: division_id});
        this.districts = district.data;
      },

      async getThanas(district_id) {
        let thanas = await this.$axios.$post('settings/thanas', {districtId: district_id});
        this.thanas = thanas.data;
      },

      async store() {
        await this.$axios.$post('property/store', this.form)
          .then(response => {
            this.$izitoast.success({
              title: 'Success !!',
              message: 'Property create successfully!'
            });

            this.$refs.el.dropzone.options.url = process.env.APP_ROOT_API + 'property/image-upload/' + response.data.id;
            this.$refs.el.dropzone.processQueue();

            this.$router.push({name: 'account-property'});
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
