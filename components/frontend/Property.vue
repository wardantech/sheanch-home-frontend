<template>
  <div>
    <section id="place">
      <b-container>
        <b-row class="row justify-content-center">
          <b-col lg="7" md="10" class="text-center">
            <div class="section-heading center">
              <h2>Latest Properties</h2>
              <!--<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum-->
              <!--deleniti atque corrupti quos dolores</p>-->
              <div class="latest-properties-radio">
                <b-row class="my-4">
                  <b-col lg="12" md="12" sm="12">
                    <b-form-radio-group
                      id="btn-radios-2"
                      :options="options"
                      :aria-describedby="ariaDescribedby"
                      button-variant="outline-primary"
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
          <b-col v-for="(property, index) in properties" :key="index" lg="4" md="6" sm="12">
            <div class="place-layout-listing">
              <div class="place-layout-listing-img">
                <div class="place-layout-listing-img-slide">
                  <b-carousel id="carousel-6" v-if="property.property.image != null" v-model="slide" :interval="1800"
                              controls>
                    <!--<b-carousel-slide v-for="(image , i) in property.property.image.split(',')" :img-src="imageUrl+image" :key="i"></b-carousel-slide>-->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=53"></b-carousel-slide>
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
                  </b-carousel>
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
                      <span class="sale-type rent" v-if="property.property.sale_type == 1">
                        Rent
                      </span>
                      <span class="sale-type rent" v-if="property.property.sale_type == 2">
                        Sale
                      </span>
                      <h6 class="card-price">$ {{ property.rent_amount }}</h6>
                    </div>
                  </div>
                </div>
                <div class="place-layout-listing-detail-name">
                  <b-link href="#" title="6007 Applegate Lane">
                    {{ property.name }}
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
                  <span class="reviews-text">( {{ property.reviews }} Reviews)</span>
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
                    :to="{ name: 'account-property-id-show',
                                    params: { id: property.id }}">
                    View
                  </nuxt-link>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="12" md="12" sm="12" class="text-center">
            <b-link class="btn btn-browse-more">Browse More Properties</b-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Place",
    data() {
      return {
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
