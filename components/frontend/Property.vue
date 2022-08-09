<template>
  <div>
    <section id="place" v-if="properties.length > 0">
      <b-container>
        <b-row class="row justify-content-center">
          <b-col lg="7" md="10" class="text-center">
            <div class="section-heading center">
              <h2>Latest Properties</h2>
              <div class="latest-properties-radio">
                <b-row class="my-4">
                  <b-col lg="12" md="12" sm="12">
                    <b-form-radio-group
                      id="btn-radios-2"
                      :options="options"
                      button-variant="outline-dark"
                      size="lg"
                      name="radio-btn-outline"
                      buttons
                      class=""
                    ></b-form-radio-group>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row class="place-layout">

          <div class="gallery">
            <Slick ref="slick" :options="slickOptions" v-if="properties.length > 0">
              <div v-for="(property, index) in properties" :key="index">
                <div>
                  <div class="place-layout-listing">
                    <div class="place-layout-listing-img">
                      <div class="place-layout-listing-img-slide">
                        <b-img src="https://picsum.photos/1024/480/?image=53" alt="Image 1"></b-img>
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
                            <span class="sale-type rent" v-if="property.property.sale_type == 1">Rent</span>
                            <span class="sale-type sale" v-if="property.sale_type == 2">Sale</span>
                            <h6 class="card-price">$ {{property.rent_amount}}</h6>
                          </div>
                        </div>
                      </div>
                      <div class="place-layout-listing-detail-name">
                        <b-link href="#" title="6007 Applegate Lane">
                          {{ property.property.name }}
                        </b-link>
                      </div>
                      <div class="rating-wrap">
                        <div class="rating">
                          <div class="product-rate" width="70%">
                            <font-awesome-icon icon="fa-solid fa-star"/>
                            <font-awesome-icon icon="fa-solid fa-star"/>
                            <font-awesome-icon icon="fa-solid fa-star"/>
                            <font-awesome-icon icon="fa-solid fa-star"/>
                            <font-awesome-icon icon="fa-solid fa-star-half"/>
                          </div>
                        </div>
                        <span class="reviews-text">(2 Reviews)</span>
                      </div>
                    </div>
                    <div class="place-layout-listing-features">
                      <div class="features-list">
                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bed"/>
                          </div>
                          {{ property.property.bed_rooms }} Bed
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-bath"/>
                          </div>
                          {{ property.property.bath_rooms }} Bath
                        </div>

                        <div class="features-list-icon">
                          <div class="fleat-icon">
                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"/>
                          </div>
                          {{ property.property.area_size }} m²
                        </div>
                      </div>
                    </div>
                    <div class="place-layout-listing-footer">
                      <div class="footer-first">
                        <div class="footer-first-location d-flex">
                          <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot"/>
                          {{ property.property.address }}
                        </div>
                      </div>
                      <div class="footer-flex">
                        <nuxt-link
                          class="product-view"
                          :to="{ name: 'account-property-id-show', params: { id: property.property.id }}">
                          View
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slick>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import Slick from 'vue-slick';

  export default {
    name: "Place",
    components: {Slick},
    data() {
      return {
        slickOptions: {
          autoplay:true,
          lazyLoad: 'ondemand',
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        },

        options: [
          {text: 'For Sale', value: '1'},
          {text: 'To Rent', value: '2'}
        ],
        slide: 0,
        properties: []
      }
    },
    async created() {
      this.properties = await this.$axios.$post('property/ad/active-property/list');
      console.log(this.properties);
    },
    computed: {
      imageUrl() {
        return `${process.env.APP_ROOT_IMG_URL}`
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
