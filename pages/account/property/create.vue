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
                    <h5>Create Property</h5>
                  </div>
                </div>

                <div>
                  <div class="form-group">
                    <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'account-property' }">
                      <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                      Back to list
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div>
                <form @submit.prevent="store">
                  <b-row>
                    <b-col md="4">
                      <b-form-group label="Property Category">
                        <select v-model="form.property_category"
                                class="form-control custom-input-control">
                          <option value="">Select</option>
                          <option value="1">Commercial</option>
                          <option value="2">Residential</option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.property_category">{{ errors.property_category[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group label="Property Types">
                        <select v-model="form.property_type_id"
                                class="form-control custom-input-control">
                          <option value="">Select</option>
                          <option v-for="(type, i) in propertyTypes" :key="i" :value="type.id">
                            {{ type.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.property_type_id">{{ errors.property_type_id[0] }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group label="Sale/Lease Type">
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
                  </b-row>

                  <b-row>
                    <b-col md="4">
                      <b-form-group label="Property name">
                        <b-form-input v-model="form.name" class="custom-input-control" type="text"
                                      placeholder="Property name"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.name">{{
                          errors.name[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group label="Area Size">
                        <b-form-input min="1" v-model="form.area_size" class="custom-input-control" type="number"
                                      placeholder="Area Size"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.area_size">{{
                          errors.area_size[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group label="Bedroom Quantity (Qty)">
                        <b-form-input min="1" v-model="form.bed_rooms" class="custom-input-control" type="number"
                                      placeholder="Enter Bedroom Quantity (Qty)"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.bed_rooms">{{
                          errors.bed_rooms[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="6">
                      <b-form-group label="Bath Rooms (Qty)">
                        <b-form-input min="1" v-model="form.bath_rooms" class="custom-input-control" type="number"
                                      placeholder="Bath Rooms (Qty)"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.bath_rooms">{{
                          errors.bath_rooms[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="6">
                      <b-form-group label="Select division">
                        <select @change="getDistricts(form.division_id)" v-model="form.division_id" id=""
                                class="form-control custom-input-control">
                          <option value="">Select division</option>
                          <option v-for="(division, i) in divisions" :value="division.id" :key="i">
                            {{ division.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.division_id">{{
                          errors.division_id[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="6">
                      <b-form-group label="Select district">
                        <select @change="getThanas(form.district_id)" v-model="form.district_id" id=""
                                class="form-control custom-input-control">
                          <option value="">Select district</option>
                          <option v-for="(district, i) in districts" :value="district.id" :key="i">
                            {{ district.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.district_id">{{
                          errors.district_id[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="6">
                      <b-form-group label="Select Thana">
                        <select v-model="form.thana_id" class="form-control custom-input-control">
                          <option value="">Select Thana</option>
                          <option v-for="(thana, i) in thanas" :value="thana.id" :key="i">
                            {{ thana.name }}
                          </option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.thana_id">{{ errors.thana_id[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="6">
                      <b-form-group label="Rent Amount">
                        <b-form-input min="0" v-model="form.rent_amount" class="custom-input-control" type="number"
                                      placeholder="Rent Amount"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.rent_amount">{{
                          errors.rent_amount[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="6">
                      <b-form-group label="Security money">
                        <b-form-input v-model="form.security_money" class="custom-input-control" type="number"
                                      placeholder="Security money"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.security_money">{{
                          errors.security_money[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="6">
                      <b-form-group label="Zip Code">
                        <b-form-input v-model="form.zip_code" class="custom-input-control" type="text"
                                      placeholder="Zip Code"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.zip_code">{{
                          errors.zip_code[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="6">
                      <b-form-group label="House/Holding/Unit Number">
                        <b-form-input min="1" v-model="form.house_no" class="custom-input-control" type="text"
                                      placeholder="House Number"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.house_no">{{
                          errors.house_no[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group label="Address">
                        <b-form-textarea id="address" placeholder="Address" rows="3" v-model="form.address"
                                         class="custom-input-control"></b-form-textarea>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.address">{{ errors.address[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <b-form-group label="Description">
                        <b-form-textarea id="description" placeholder="Description..." rows="3"
                                         v-model="form.description" class="custom-input-control"></b-form-textarea>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.description">{{
                          errors.description[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <!-- Add Utilities -->
                  <b-row>
                    <b-col md="4">
                      <b-form-group label="Utilities">
                        <select v-model="utility" class="form-control custom-select-form-control" name="" id="">
                          <option value="">select</option>
                          <option v-for="(utility, n) in utilities" :value="utility">
                            {{ utility.name }}
                          </option>
                        </select>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <div class="button-t-m" style="margin-top: 30px">
                        <b-button variant="success" @click="addUtilityRow(utility)">Add utility</b-button>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row class="align-items-center" v-for="(utility, n) in form.utilities" :key="utility">
                    <b-col md="4">
                      <b-form-group label="Utility Name">
                        <b-form-input readonly v-model="utility.utility_name" :id="'utility_name' + n" min="1"
                                      class="custom-form-control" type="text" placeholder="Area Size">
                        </b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.security_money">{{
                          errors.security_money[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group label="Paid By">
                        <select @click="utilityPaidBy(n, utility)" name="" :id="'utility_paid_by' + n"
                                class="form-control custom-select-form-control">
                          <option value="0">select</option>
                          <option value="1">Paid By Landlord</option>
                          <option value="2">Paid By Tenant</option>
                        </select>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.area_size">{{
                          errors.area_size[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="3">
                      <b-form-group label="Amount">
                        <b-form-input @input="utilityAmount(n, utility)" :id="'utility_amount' + n" min="1"
                                      class="custom-form-control" type="text" placeholder="Amount"></b-form-input>
                        <strong class="text-danger" style="font-size: 12px" v-if="errors.area_size">{{
                          errors.area_size[0]
                          }}</strong>
                      </b-form-group>
                    </b-col>

                    <b-col md="1" @click="deleteUtilityRow(n, utility)">
                      <div class="button-t-m" style="margin-top: 16px;">
                        <b-button variant="danger">-</b-button>
                      </div>
                    </b-col>
                  </b-row>
                  <!-- End Add Utilities -->

                  <!-- Add Facility -->
                  <b-row>
                    <b-col md="4">
                      <b-form-group label="Facility">
                        <select v-model="facility" class="form-control custom-select-form-control" name="" id="">
                          <option value="">select</option>
                          <option v-for="(facility, f) in facilities" :value="facility">
                            {{ facility.name }}
                          </option>
                        </select>
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <div class="button-t-m" style="margin-top: 30px">
                        <b-button variant="success" @click="addFacilityRow(facility)">Add facility</b-button>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row class="align-items-center" v-for="(facility, n) in form.facilities" :key="utility">
                    <b-col md="4">
                      <b-form-group label="Facility name">
                        <b-form-input readonly v-model="facility.facility_name" :id="'facility_name' + n" min="1"
                                      class="custom-form-control" type="text" placeholder="Facility name">
                        </b-form-input>

                      </b-form-group>
                    </b-col>

                    <b-col md="3">
                      <b-form-group label="Amount">
                        <b-form-input @input="facilityAmount(n, facility)" :id="'facility_amount' + n" min="1"
                                      class="custom-form-control" type="text" placeholder="Amount"></b-form-input>
                      </b-form-group>
                    </b-col>

                    <b-col md="1" @click="deleteFacilityRow(n, facility)">
                      <div class="button-t-m" style="margin-top: 16px;">
                        <b-button variant="danger">-</b-button>
                      </div>
                    </b-col>
                  </b-row>
                  <!-- End Add Facility -->

                  <b-row>
                    <b-col md="12">
                      <b-form-group label="Image Upload">
                        <dropzone id="foo" ref="el" :options="options" @vdropzone-files-added="processFile"
                                  @vdropzone-removed-file="fileRemoved" :destroyDropzone="false">
                        </dropzone>
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
          name: '',
          thana_id: '',
          district_id: '',
          division_id: '',
          property_category: '',
          property_type_id: '',
          bed_rooms: '',
          bath_rooms: '',
          address: '',
          area_size: '',
          rent_amount: '',
          security_money: '',
          status: '',
          description: '',
          landlord_id: this.$auth.user.landlord_id,
          images: [],
          lease_type: '',
          sale_type: '',
          house_no: '',
          facilities: [],
          utilities: []
        },
        propertyTypes: '',
        landlords: '',
        utilities: '',
        utility: '',
        facility: '',
        facilities: '',
        divisions: '',
        districts: '',
        thanas: '',
        errors: {},
      }
    },

    async created() {
      const data = await this.$axios.$post('property/get-create-data');

      this.divisions = data.data.divisions;
      this.utilities = data.data.utilities;
      this.facilities = data.data.facilities;
      this.propertyTypes = data.data.propertyTypes;
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

      processFile(file) {
        let image = Array.from(file)
        image.forEach(element => {
          const reader = new FileReader()
          reader.readAsDataURL(element)

          reader.onload = event => {
            const fileObj = {}
            fileObj.name = element.name
            fileObj.description = ''
            fileObj.data = event.target.result
            fileObj.size = (element.size / (1024 * 1024)).toFixed(2)
            fileObj.type = element.type

            this.form.images.push(fileObj)
          }
        })
      },

      fileRemoved(file) {
        if (file.dataURL) {
          this.form.images = this.form.images.filter(element => element.data !== file.dataURL)
        } else {
          this.form.images = this.form.images.filter(element => element.name !== file.name)
        }
      },

      addUtilityRow(data) {
        this.form.utilities.push({
          'utility_id': data.id,
          'utility_name': data.name,
          'utility_paid_by': '',
          'utility_amount': '',
        })
      },

      deleteUtilityRow(index, utility) {
        let idx = this.form.utilities.indexOf(utility);
        if (idx > -1) {
          this.form.utilities.splice(idx, 1);
        }
      },

      utilityPaidBy(n, utility) {
        let paid_by = document.getElementById('utility_paid_by' + n).value
        this.form.utilities[n].utility_paid_by = paid_by;
      },

      utilityAmount(n, utility) {
        let amount = document.getElementById('utility_amount' + n).value
        this.form.utilities[n].utility_amount = amount;
      },

      addFacilityRow(data) {
        this.form.facilities.push({
          'facility_id': data.id,
          'facility_name': data.name,
          'facility_amount': '',
        })
      },

      deleteFacilityRow(index, facility) {
        let idx = this.form.facilities.indexOf(facility);
        if (idx > -1) {
          this.form.facilities.splice(idx, 1);
        }
      },

      facilityAmount(n, facility) {
        let amount = document.getElementById('facility_amount' + n).value
        this.form.facilities[n].facility_amount = amount;
      },

      async store() {
        await this.$axios.$post('property/store', this.form)
          .then(response => {
            this.$izitoast.success({
              title: 'Success !!',
              message: 'Property create successfully!'
            });

            // this.$refs.el.dropzone.options.url = process.env.APP_ROOT_API + 'property/image-upload/' + response.data.id;
            // this.$refs.el.dropzone.processQueue();

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
