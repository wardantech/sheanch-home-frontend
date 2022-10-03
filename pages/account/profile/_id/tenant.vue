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
                    <h5>Profile</h5>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <nuxt-link class="btn btn-success btn-sm" :to="{ name: 'account-profile-id-change-password', params: { id: $auth.user.landlord_id }}">
                      <font-awesome-icon icon="fa-solid fa-key" />
                      Change password
                    </nuxt-link>

                    <nuxt-link class="btn btn-dark btn-sm" :to="{ name: 'account-dashboard-tenant' }">
                      <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
                      Back to dashboard
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div>
                <b-row>
                  <b-col md="8">
                    <b-form @submit.prevent="update">
                      <b-row>
                        <b-col md="12">
                          <b-form-group label="Name">
                            <b-form-input v-model="form.name" type="text" class="custom-form-control"
                                          placeholder="Name"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px" v-if="errors.name">{{
                              errors.name[0]
                              }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Email">
                            <b-form-input v-model="form.email" type="email" class="custom-form-control"
                                          placeholder="Email"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px" v-if="errors.email">{{
                              errors.email[0]
                              }}</strong>
                          </b-form-group>
                        </b-col>

                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Mobile">
                            <b-form-input v-model="form.mobile" type="text" class="custom-form-control"
                                          placeholder="Mobile"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px" v-if="errors.mobile">{{
                              errors.mobile[0]
                              }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Division">
                            <select @change="getDistricts(form.division_id)" v-model="form.division_id" id=""
                                    class="form-control custom-form-control">
                              <option value="">Select</option>
                              <option v-for="(division, i) in divisions" :value="division.id" :key="i">
                                {{ division.name }}
                              </option>
                            </select>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.division_id">{{ errors.division_id[0] }}</strong>
                          </b-form-group>
                        </b-col>

                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="District">
                            <select @change="getThanas(form.district_id)" v-model="form.district_id" id=""
                                    class="form-control custom-form-control">
                              <option value="">Select</option>
                              <option v-for="(district, i) in districts" :value="district.id" :key="i">
                                {{ district.name }}
                              </option>
                            </select>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.district_id">{{ errors.district_id[0] }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Thana">
                            <select v-model="form.thana_id" id="" class="form-control custom-form-control">
                              <option value="">Select</option>
                              <option v-for="(thana, i) in thanas" :value="thana.id" :key="i">
                                {{ thana.name }}
                              </option>
                            </select>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.thana_id">{{ errors.thana_id[0] }}</strong>
                          </b-form-group>
                        </b-col>

                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Status">
                            <select v-model="form.status" id="" class="form-control custom-form-control">
                              <option value="">Select</option>
                              <option value="1">Active</option>
                              <option value="0">Inactive</option>

                            </select>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.status">{{ errors.status[0] }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Gender">
                            <select v-model="form.gender" id="" class="form-control custom-form-control">
                              <option value="">Select</option>
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                              <option value="3">Others</option>

                            </select>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.gender">{{ errors.gender[0] }}</strong>
                          </b-form-group>
                        </b-col>

                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Date of birth">
                            <b-form-input v-model="form.dob" type="date"
                                          placeholder="Date of Birth" class="custom-form-control"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.dob">{{ errors.dob[0] }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="National Id">
                            <b-form-input v-model="form.nid" class="custom-form-control" type="text"
                                          placeholder="National Id"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.nid">{{ errors.nid[0] }}</strong>
                          </b-form-group>
                        </b-col>

                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Passport No">
                            <b-form-input v-model="form.passport_no" class="custom-form-control" type="text"
                                          placeholder="Passport No"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.passport_no">{{ errors.passport_no[0] }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Marital status">
                            <select v-model="form.marital_status" id="" class="form-control custom-form-control">
                              <option value="">Select</option>
                              <option value="1">Married</option>
                              <option value="2">Unmarried</option>

                            </select>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.marital_status">{{ errors.marital_status[0] }}</strong>
                          </b-form-group>
                        </b-col>

                        <b-col lg="6" md="6" sm="12">
                          <b-form-group label="Postal code">
                            <b-form-input v-model="form.postal_code" class="custom-form-control" type="text"
                                          placeholder="Postal code"></b-form-input>
                            <strong class="text-danger" style="font-size: 12px"
                                    v-if="errors.postal_code">{{ errors.postal_code[0] }}</strong>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-form-group label="Postal Address">
                        <b-form-textarea
                          id="postal"
                          placeholder="Postal Address..."
                          rows="3"
                          v-model="form.postal_address"
                        ></b-form-textarea>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.postal_address">{{ errors.postal_address[0] }}</strong>
                      </b-form-group>

                      <b-form-group label="Physical Address">
                        <b-form-textarea
                          id="physical_address"
                          placeholder="Physical Address..."
                          rows="3"
                          v-model="form.physical_address"
                        ></b-form-textarea>
                        <strong class="text-danger" style="font-size: 12px"
                                v-if="errors.physical_address">{{ errors.physical_address[0] }}</strong>
                      </b-form-group>

                      <b-row>
                        <b-col>
                          <b-form-group>
                            <b-button type="submit" variant="dark">Update</b-button>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-col>
                  <b-col md="4">
                    <b-card class="mt-3" header="Image">
                      <td>
                        <img style="height: 200px; width: 100%; object-fit: cover;" v-model="form.oldImage"
                             :src="imageUrl+form.image" alt="">
                      </td>
                      <b-form-group label="Image upload">
                        <Dropzone id="foo" ref="el"
                                  :options="options"
                                  :destroyDropzone="false"
                        >
                        </Dropzone>
                      </b-form-group>
                    </b-card>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
          <!-- /.Main Content -->

        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import Sidebar from "@/components/frontend/dashboard/Sidebar";
  import Dropzone from 'nuxt-dropzone';
  import 'nuxt-dropzone/dropzone.css';

  export default {
    name: "tenant",
    components: {Sidebar, Dropzone},
    computed: {
      imageUrl() {
        return `${process.env.APP_ROOT_IMG_URL}`
      }
    },
    data() {
      return {
        options: {
          url: "url",
          addRemoveLinks: true,
          headers: {"Authorization": this.$auth.strategy.token.get()},
          maxFiles: 1,
          autoProcessQueue: false,
          acceptedFiles: ".jpeg,.jpg,.png"
        },
        form: {
          name: '',
          email: '',
          mobile: '',
          thana_id: '',
          district_id: '',
          division_id: '',
          gender: '',
          dob: '',
          nid: '',
          marital_status: '',
          postal_address: '',
          physical_address: '',
          postal_code: '',
          passport_no: '',
          password: '',
          password_confirmation: ''
        },
        previewImage: null,
        landlord: '',
        divisions: '',
        districts: '',
        thanas: '',
        errors: {}
      }
    },
    mounted() {
      const authId = this.$auth.user.tenant_id;
      if (!authId) {
        this.$router.push({name: 'account-dashboard-tenant'});
      }
    },
    async created() {
      const response = await this.$axios.$post('profile/tenant', {id: this.$auth.user.tenant_id});

      this.form = response.data.tenant;
      this.form.oldImage = response.data.image;
      this.divisions = response.data.divisions;
      this.districts = response.data.districts;
      this.thanas = response.data.thanas;
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

      async update() {
        await this.$axios.$post('profile/tenant/update/'+this.$auth.user.tenant_id, this.form, )
          .then(response => {
            this.$izitoast.success({
              title: 'Success !!',
              message: 'Tenant updated successfully!'
            })
            this.$refs.el.dropzone.options.url = process.env.APP_ROOT_API+'profile/tenant/tenant-image-upload/'+response.data.id;
            this.$refs.el.dropzone.processQueue();
            this.$router.push({name: 'account-profile-id-tenant'});
          })
          .catch(error => {
            if(error.response.status == 422){
              this.errors = error.response.data.errors
            }
            else{
              alert(error.response.message)
            }
          })
      },
    }
  }
</script>

<style scoped>

</style>
