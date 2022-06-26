<template>
  <div>
    <section id="place">
      <b-container>
        <b-row class="row justify-content-center">
          <b-col lg="7" md="10" class="text-center">
            <div class="section-heading center">
              <h2>Explore Good Places</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores</p>
            </div>
          </b-col>
        </b-row>

        <b-row class="place-layout">
          <b-col v-for="(property, index) in properties" :key="index" lg="4" md="6" sm="12">
            <div class="place-layout-listing">
              <div class="place-layout-listing-img">
                <div class="place-layout-listing-img-slide">
                  <b-carousel id="carousel-6" v-model="slide" :interval="1800" controls>
                    <b-carousel-slide v-for="(image , i) in property.images" :img-src="image.img" :key="i"></b-carousel-slide>
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
                      <span class="sale-type rent">For Rent</span>
                      <h6 class="card-price">$ {{ property.price }}</h6>
                    </div>
                  </div>
                </div>
                <div class="place-layout-listing-detail-name">
                  <b-link href="#" title="6007 Applegate Lane">
                    {{ property.title }}
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
                    {{ property.bed }} Bed
                  </div>

                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-bath"/>
                    </div>
                    {{ property.bath }} Bath
                  </div>

                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"/>
                    </div>
                    {{ property.area }} m²
                  </div>
                </div>
              </div>
              <div class="place-layout-listing-footer">
                <div class="footer-first">
                  <div class="footer-first-location d-flex">
                    <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot"/>
                    {{ property.location }}
                  </div>
                </div>
                <div class="footer-flex">
                  <nuxt-link
                    class="product-view"
                    :to="{ name: 'properties-property-details',
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
        slide: 0,
        properties: [
          {
            id: 100,
            title: '1745 T Street Southeast',
            price: 232.999,
            images: [
              {img: 'https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg'},
              {img: 'https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg'},
              {img: 'https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg'}
            ],
            location: 'Dhaka, Bangladesh',
            type: 'rent',
            reviews: 3,
            bed: 4,
            bath: 3,
            area: 83,
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
