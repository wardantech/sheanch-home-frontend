<template>
  <div>
    <div class="banner image-cover" :style="bannerImage">
      <b-container>
        <div class="banner-form">
          <div class="banner-form-title">
            <h2>Find Accessible Homes To Rent</h2>
          </div>

          <form @submit.prevent="searchStore" action="" method="POST">
            <div class="banner-form-content">
              <b-row class="my-4">
                <b-col lg="12" md="12" sm="12">
                  <b-form-radio-group id="btn-radios-2" v-model="form.sale_type" :options="options"
                    button-variant="outline-primary" size="lg" name="radio-btn-outline" buttons class="btn-block">
                  </b-form-radio-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col lg="6" md="6" sm="6">
                  <b-form-group label="Min Price" label-for="min_price">
                    <select v-model="form.min_price" class="form-control" id="min_price">
                      <option value="">No Min</option>
                      <option value="5000">5000</option>
                      <option value="10000">10000</option>
                      <option value="20000">20000</option>
                      <option value="50000">50000</option>
                      <option value="100000">100000</option>
                      <option value="1000000">1000000</option>
                    </select>
                  </b-form-group>
                </b-col>

                <b-col lg="6" md="6" sm="6">
                  <b-form-group label="Max Price" label-for="max_price">
                    <select v-model="form.max_price" class="form-control" id="max_price">
                      <option value="">No Max</option>
                      <option value="10000">10000</option>
                      <option value="20000">20000</option>
                      <option value="50000">50000</option>
                      <option value="100000">100000</option>
                      <option value="1000000">1000000</option>
                      <option value="2000000">2000000</option>
                    </select>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col lg="6" md="6" sm="6">
                  <b-form-group label="Property Category" label-for="property_type">
                    <select v-model="form.property_category" class="form-control custom-input-control">
                      <option value="0">Select</option>
                      <option value="1">Commercial</option>
                      <option value="2">Residential</option>
                    </select>
                  </b-form-group>
                </b-col>

                <b-col lg="6" md="6" sm="6">
                  <b-form-group label="Property Type" label-for="property_type">
                    <select v-model="form.property_type_id" class="form-control custom-input-control">
                      <option value="">Select</option>
                      <option v-for="(type, i) in propertyTypes" :key="i" :value="type.id">
                        {{ type.name }}
                      </option>
                    </select>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="6" sm="12">
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

                <b-col md="6" sm="12">
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
              </b-row>

              <b-row>
                <b-col md="12">
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
            <div class="banner-form-action">
              <button class="btn btn-primary banner-form-action-button">Search Result</button>
            </div>
          </form>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      options: [
        { text: 'For Sale', value: '2' },
        { text: 'To Rent', value: '1' }
      ],
      form: {
        min_price: '',
        sale_type: '',
        max_price: '',
        property_category: '',
        property_type_id: '',
        division_id: '',
        district_id: '',
        thana_id: '',
      },
      thanas: '',
      divisions: '',
      districts: '',
      propertyTypes: '',
      bannerImage: ''
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}/`
    },
  },

  created() {
    const banner = this.$store.getters['frontend-data/getBanner'];
    this.bannerImage = "background: url(" + banner + ") no-repeat";

    this.fetch()
  },


  methods: {

    async fetch() {
    await this.$axios.get('get-frontend-banner-data').then(response => {
      this.propertyTypes = response.data.propertyTypes;
      this.divisions = response.data.divisions;
    });
  },

    async getDistricts(division_id) {
      this.thanas = '';
      await this.$axios.$post('settings/districts', { divisionId: division_id }).then(response => {
        this.districts = response.data;
      });
      
    },

    async getThanas(district_id) {
      await this.$axios.$post('settings/thanas', { districtId: district_id }).then(res => {
        this.thanas = res.data;
      });
    },

    searchStore() {
      this.$store.dispatch('search/storeSearch', this.form)
      this.$router.push({ name: 'property-ad-search' });
    }
  }
}
</script>

<style scoped>

</style>
