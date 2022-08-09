<template>
  <div>
    <section id="search">
      <b-container>
        <div class="filter">
          <b-row>
            <b-col md="3">
              <b-form-group label="Min Price" label-for="min_price">
                <select class="form-control custom-input-control" id="min_price">
                  <option>No Min</option>
                  <option>500</option>
                  <option>1000</option>
                  <option>2000</option>
                  <option>50000</option>
                  <option>10000</option>
                </select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Max Price" label-for="max_price">
                <select class="form-control custom-input-control" id="max_price">
                  <option>No Max</option>
                  <option>1000</option>
                  <option>2000</option>
                  <option>5000</option>
                  <option>10000</option>
                  <option>20000</option>
                </select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Property Category" label-for="property_category">
                <select class="form-control custom-input-control" id="property_category">
                  <option>Commercial</option>
                  <option>Residential</option>
                </select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Property Type" label-for="property_type">
                <select v-model="form.property_type_id"
                        class="form-control custom-input-control">
                  <option value="">Select</option>
                  <option v-for="(type, i) in propertyTypes" :key="i" :value="type.id">
                    {{ type.name }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="3">
              <b-form-group label="Sale/Lease Type" label-for="sale_lease_type">
                <select class="form-control custom-input-control" id="sale_lease_type">
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Select divisions" label-for="division_id">
                <select @change="getDistricts(form.division_id)" v-model="form.division_id" id=""
                        class="form-control custom-input-control">
                  <option value="">Select</option>
                  <option v-for="(division, i) in divisions" :value="division.id" :key="i">
                    {{ division.name }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Select district" label-for="district_id">
                <select @change="getThanas(form.district_id)" v-model="form.district_id" id=""
                        class="form-control custom-input-control">
                  <option value="">Select</option>
                  <option v-for="(district, i) in districts" :value="district.id" :key="i">
                    {{ district.name }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group label="Select Thana" label-for="thana_id">
                <select v-model="form.thana_id" class="form-control custom-input-control">
                  <option value="">Select</option>
                  <option v-for="(thana, i) in thanas" :value="thana.id" :key="i">
                    {{ thana.name }}
                  </option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <!-- Start newsletter -->
    <Newsletter/>
    <!-- End newsletter -->
  </div>
</template>

<script>
  import Newsletter from "@/components/frontend/Newsletter";
  export default {
    name: "index",
    components: {Newsletter},
    data() {
      return {
        form: {
          property_type_id: '',
          division_id: '',
          district_id: '',
          thana_id: '',
        },
        units: '',
        thanas: '',
        divisions: '',
        districts: '',
        propertyTypes: '',
        bannerImage: ''
      }
    },
    async created() {
      const propertyTypes = await this.$axios.$get('property/get-property-type');
      this.propertyTypes = propertyTypes.data;

      const divisions = await this.$axios.$get('settings/divisions');
      this.divisions = divisions.data;

      const res = await this.$axios.$post('get-general-setting-images', {data: 'banner'});
      this.bannerImage = "background: url("+res.image+") no-repeat";
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
    }
  }
</script>

<style scoped>

</style>
