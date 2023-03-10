<template>
  <div>
    <!-- Search -->
    <Search />
    <!-- /. Search -->

    <b-container>
      <div class="mt-5 mb-2">
        <h3 class="properties-title">Properties:</h3>
      </div>

      <b-row class="place-layout" v-if="properties.length > 0">
        <b-col md="4" class="gallery" v-for="(property, index) in properties" :key="index">
          <div class="place-layout-listing">
            <div class="place-layout-listing-img">
              <div class="place-layout-listing-img-slide">
                <nuxt-link :to="{ name: 'property-id-show', params: { id: property.id } }">
                  <b-img v-for="(image, i) in property.property_image" :key="i" :src="image.original_url"
                    :alt="property.property_name">
                  </b-img>
                </nuxt-link>
              </div>
              <div class="place-layout-listing-img-action">
                <b-link @click="wishlistStore(property.id)" class="add-to-wishlist">
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </b-link>
              </div>
            </div>
            <div class="place-layout-listing-detail">
              <div class="place-layout-listing-detail-wrap">
                <div class="place-layout-listing-detail-wrap-short">
                  <div class="list-price d-flex justify-content-between">
                    <span class="sale-type rent" v-if="property.sale_type == 1">Rent</span>
                    <span class="sale-type sale" v-if="property.sale_type == 2">Sale</span>
                    <h6 class="card-price">৳{{ property.rent_amount }}</h6>
                  </div>
                </div>
              </div>
              <div class="place-layout-listing-detail-name">
                <nuxt-link :title="property.name" :to="{ name: 'property-id-show', params: { id: property.id } }">
                  {{ property.name }}
                </nuxt-link>
              </div>
              <div class="rating-wrap">
                <div class="rating">
                  <div class="product-rate" width="70%">
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star-half" />
                  </div>
                </div>
                <span class="reviews-text">(2 Reviews)</span>
              </div>
            </div>
            <div class="place-layout-listing-features">
              <div class="features-list">
                <div class="features-list-icon">
                  <div class="fleat-icon">
                    <font-awesome-icon icon="fa-solid fa-bed" />
                  </div>
                  {{ property.bed_rooms }} Bed
                </div>
                <div class="features-list-icon">
                  <div class="fleat-icon">
                    <font-awesome-icon icon="fa-solid fa-bath" />
                  </div>
                  {{ property.bath_rooms }} Bath
                </div>
                <div class="features-list-icon">
                  <div class="fleat-icon">
                    <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                  </div>
                  {{ property.area_size }} m²
                </div>
              </div>
            </div>
            <div class="place-layout-listing-footer">
              <div class="footer-first">
                <div class="footer-first-location d-flex">
                  <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot" />
                  {{ property.address }}
                </div>
              </div>
              <div class="footer-flex">
                <nuxt-link class="product-view" :to="{ name: 'property-id-show', params: { id: property.id } }">
                  View
                </nuxt-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Search from "../components/frontend/Search";
export default {
  name: 'properties-all',
  auth: false,
  components: { Search },
  data() {
    return {
      properties: [],
    }
  },
  async created() {
    await this.$axios.post('properties')
      .then(response => {
        this.properties = response.data.data.properties;
      }).catch(error => {
        alert(error);
      })
  },
}
</script>

<style>
.properties-title {
  font-size: 1.5rem;
}
</style>
