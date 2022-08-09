<template>
  <div>
    <div class="page-title">
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="12">
            <div class="full-search-2 eclip-search italian-search hero-search-radius shadow-hard">
              <div class="hero-search-content">
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
                      <b-button block variant="dark" class="text-center mt-2">Find</b-button>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <section id="search">
      <b-container>
        <b-row>
          <b-col md="4">
            <div class="gallery">
              <div>
                <div>
                  <div class="place-layout-listing">
                    <div class="place-layout-listing-img">
                      <div class="place-layout-listing-img-slide">
                        <div>
                          <b-img
                            src="https://cdn.pixabay.com/photo/2013/07/25/11/52/rajiv-gandhi-sea-link-166867_960_720.jpg" alt="Image 1">
                          </b-img>
                        </div>
                      </div>
                      <div class="place-layout-listing-img-action">
                        <b-link href="#" class="add-to-wishlist">
                          <font-awesome-icon icon="fa-solid fa-heart"/>
                        </b-link>
                      </div>
                    </div>
                    <div class="place-layout-listing-detail">
                      <div class="place-layout-listing-detail-wrap">
                        <div class="place-layout-listing-detail-wrap-short">
                          <div class="list-price d-flex justify-content-between">
                            <!--<span class="sale-type rent" v-if="propertiesAd.property.sale_type == 1">Rent</span>-->
                            <span class="sale-type sale">Sale</span>
                            <h6 class="card-price">12,000 Taka Only</h6>
                          </div>
                        </div>
                      </div>
                      <div class="place-layout-listing-detail-name">
                        <b-link href="#" title="6007 Applegate Lane">
                          Lorem title
                        </b-link>
                      </div>
                    </div>
                    <div class="place-layout-listing-features">
                      <div class="features-list">
                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bed"/>
                          </div>
                          5 Bed
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bath"/>
                          </div>
                          5 Bath
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"/>
                          </div>
                          800 m²
                        </div>
                      </div>
                    </div>
                    <div class="place-layout-listing-footer">
                      <div class="footer-first">
                        <div class="footer-first-location d-flex">
                          <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot"/>
                          Mohammadpur, Dhaka - 1207
                        </div>
                      </div>
                      <div class="footer-flex">
                        <nuxt-link
                          class="product-view"
                          :to="{ name: 'account-property-id-show', params: { id: 2 }}">
                          View
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>

          <b-col md="4">
            <div class="gallery">
              <div>
                <div>
                  <div class="place-layout-listing">
                    <div class="place-layout-listing-img">
                      <div class="place-layout-listing-img-slide">
                        <div>
                          <b-img
                            src="https://cdn.pixabay.com/photo/2013/07/25/11/52/rajiv-gandhi-sea-link-166867_960_720.jpg" alt="Image 1">
                          </b-img>
                        </div>
                      </div>
                      <div class="place-layout-listing-img-action">
                        <b-link href="#" class="add-to-wishlist">
                          <font-awesome-icon icon="fa-solid fa-heart"/>
                        </b-link>
                      </div>
                    </div>
                    <div class="place-layout-listing-detail">
                      <div class="place-layout-listing-detail-wrap">
                        <div class="place-layout-listing-detail-wrap-short">
                          <div class="list-price d-flex justify-content-between">
                            <!--<span class="sale-type rent" v-if="propertiesAd.property.sale_type == 1">Rent</span>-->
                            <span class="sale-type sale">Sale</span>
                            <h6 class="card-price">12,000 Taka Only</h6>
                          </div>
                        </div>
                      </div>
                      <div class="place-layout-listing-detail-name">
                        <b-link href="#" title="6007 Applegate Lane">
                          Lorem title
                        </b-link>
                      </div>
                    </div>
                    <div class="place-layout-listing-features">
                      <div class="features-list">
                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bed"/>
                          </div>
                          5 Bed
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bath"/>
                          </div>
                          5 Bath
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"/>
                          </div>
                          800 m²
                        </div>
                      </div>
                    </div>
                    <div class="place-layout-listing-footer">
                      <div class="footer-first">
                        <div class="footer-first-location d-flex">
                          <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot"/>
                          Mohammadpur, Dhaka - 1207
                        </div>
                      </div>
                      <div class="footer-flex">
                        <nuxt-link
                          class="product-view"
                          :to="{ name: 'account-property-id-show', params: { id: 2 }}">
                          View
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>

          <b-col md="4">
            <div class="gallery">
              <div>
                <div>
                  <div class="place-layout-listing">
                    <div class="place-layout-listing-img">
                      <div class="place-layout-listing-img-slide">
                        <div>
                          <b-img
                            src="https://cdn.pixabay.com/photo/2013/07/25/11/52/rajiv-gandhi-sea-link-166867_960_720.jpg" alt="Image 1">
                          </b-img>
                        </div>
                      </div>
                      <div class="place-layout-listing-img-action">
                        <b-link href="#" class="add-to-wishlist">
                          <font-awesome-icon icon="fa-solid fa-heart"/>
                        </b-link>
                      </div>
                    </div>
                    <div class="place-layout-listing-detail">
                      <div class="place-layout-listing-detail-wrap">
                        <div class="place-layout-listing-detail-wrap-short">
                          <div class="list-price d-flex justify-content-between">
                            <!--<span class="sale-type rent" v-if="propertiesAd.property.sale_type == 1">Rent</span>-->
                            <span class="sale-type sale">Sale</span>
                            <h6 class="card-price">12,000 Taka Only</h6>
                          </div>
                        </div>
                      </div>
                      <div class="place-layout-listing-detail-name">
                        <b-link href="#" title="6007 Applegate Lane">
                          Lorem title
                        </b-link>
                      </div>
                    </div>
                    <div class="place-layout-listing-features">
                      <div class="features-list">
                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bed"/>
                          </div>
                          5 Bed
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bath"/>
                          </div>
                          5 Bath
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"/>
                          </div>
                          800 m²
                        </div>
                      </div>
                    </div>
                    <div class="place-layout-listing-footer">
                      <div class="footer-first">
                        <div class="footer-first-location d-flex">
                          <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot"/>
                          Mohammadpur, Dhaka - 1207
                        </div>
                      </div>
                      <div class="footer-flex">
                        <nuxt-link
                          class="product-view"
                          :to="{ name: 'account-property-id-show', params: { id: 2 }}">
                          View
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
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
      this.bannerImage = "background: url(" + res.image + ") no-repeat";
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
