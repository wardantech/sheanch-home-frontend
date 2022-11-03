<template>
  <div>
    <div class="gallery">

      <Slick ref="slick" :options="slickOptions" v-if="media.length > 0">
        <!--imageUrl+image-->
        <a v-for="(image, i) in property.media" :key="i" :href="image.original_url">
          <img :src="image.original_url" alt="Image" style="height: 357px; object-fit: cover;">
        </a>
      </Slick>
    </div>

    <section class="property-detail bg-gary">
      <b-container>
        <b-row>
          <b-col lg="8" md="12" sm="12">
            <div class="property-detail-wrap p-4">
              <div class="property-detail-wrap-title">
                <span class="pr-type" v-if="property.sale_type == 1">For Rent</span>
                <span class="pr-type" v-if="property.sale_type == 2">For Sale</span>

                <h3>{{ property.name }}</h3>
                <span>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  {{ property.address }}
                </span>
                <h3 class="fix-price">${{ propertyAd.rent_amount }}</h3>
                <div class="features-list">
                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-bed" />
                    </div>
                    {{ property.bed_rooms }}
                  </div>

                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-bath" />
                    </div>
                    {{ property.bath_rooms }}
                  </div>

                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                    </div>
                    {{ property.area_size }}
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="info">
                    Detail & Features
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card>
                    <div class="block-body">
                      <ul class="detail_features">
                        <li>
                          <strong>Bedrooms: </strong>
                          {{ property.bed_rooms }}
                        </li>
                        <li>
                          <strong>Bathrooms: </strong>
                          {{ property.bath_rooms }}
                        </li>
                        <li>
                          <strong>Balcony: </strong>
                          {{ property.balcony }}
                        </li>
                        <li>
                          <strong>Floor: </strong>
                          {{ property.floor }}
                        </li>
                        <li>
                          <strong>Area: </strong>
                          {{ property.area_size }} sqf
                        </li>
                        <li>
                          <strong>Category: </strong>
                          <span v-if="property.property_category == 1">Commercial</span>
                          <span v-if="property.property_category == 2">Residential</span>
                        </li>
                        <!--                        <li>-->
                        <!--                          <strong>Type: </strong>-->
                        <!--                          {{ property.property_type_id }}-->
                        <!--                        </li>-->
                        <li>
                          <strong>Security Money: </strong>
                          {{ property.security_money }}
                        </li>
                      </ul>
                    </div>
                  </b-card>
                </b-collapse>
              </b-card>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="info">
                    Description
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" visible accordion="my-accordion-2" role="tabpanel">
                  <b-card-body>
                    <div class="block-body p-0" v-html="property.video_link">
                      <!--<b-embed-->
                      <!--v-if="property.video_link"-->
                      <!--type="iframe"-->
                      <!--aspect="16by9"-->
                      <!--:src="property.video_link"-->
                      <!--allowfullscreen-->
                      <!--&gt;</b-embed>-->
                      <div class="mt-3">
                        <p>
                          {{ property.description }}
                        </p>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.utilities variant="info">
                    Utilities
                  </b-button>
                </b-card-header>
                <b-collapse id="utilities" visible accordion="my-accordion-3" role="tabpanel">
                  <b-card-body>
                    <div class="block-body">
                      <div class="detail_features">

                        <table class="table">
                          <thead style="border-style: hidden">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Paid by</th>
                              <th scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(utility, j) in utilities" :key="j">
                              <th scope="row">
                                <font-awesome-icon icon="fa-solid fa-circle-check" style="" />
                              </th>
                              <td>{{ utility.utility_name }}</td>
                              <td>
                                <span v-if="utility.utility_paid_by == 1">Landlord</span>
                                <span v-else>Tenant</span>
                              </td>
                              <td>{{ utility.utility_amount }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.facilities variant="info">
                    Facilities
                  </b-button>
                </b-card-header>
                <b-collapse id="facilities" visible accordion="facilities" role="tabpanel">
                  <b-card-body>
                    <div class="block-body">
                      <ul class="detail_features">
                        <table class="table">
                          <thead style="border-style: hidden">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Paid by</th>
                              <th scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(facility, j) in facilities" :key="j">
                              <th scope="row">
                                <font-awesome-icon icon="fa-solid fa-circle-check" style="" />
                              </th>
                              <td>{{ facility.facility_name }}</td>
                              <td>
                                <span v-if="facility.facility_paid_by == 1">Landlord</span>
                                <span v-else>Tenant</span>
                              </td>
                              <td>{{ facility.facility_amount }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </ul>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-4 variant="info">
                    Google Map Location
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-4" visible accordion="my-accordion-4" role="tabpanel">
                  <b-card-body>
                    <div class="block-body p-0">
                      <p>{{ property.address }}</p>
                      <div class="map-container">
                        <b-row class="justify-content-center">
                          <b-col md="12" v-html="property.google_map_location"></b-col>
                        </b-row>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-5 variant="info">
                    Nearby
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-5" visible accordion="my-accordion-5" role="tabpanel">
                  <b-card-body>
                    <div class="block-body p-0">
                      <div class="nearby">
                        <div class="nearby-section">
                          <div class="nearby-section-list">
                            <div class="nearby-section-list-ft">
                              <h4>
                                <font-awesome-icon icon="fa-solid fa-hotel" />
                                Hospital
                              </h4>
                            </div>
                          </div>
                          <div class="nearby-section-list">
                            <div class="nearby-section-list-ft">
                              <h4>
                                <font-awesome-icon icon="fa-solid fa-bus" />
                                Bus Stop
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <!-- Property Review Show -->
            <PropertyReviewShow :reviews="reviews"/>

            <!-- Write Property Reviews -->
            <PropertyReview @add-review="addReview"/>
          </b-col>

          <b-col lg="4" md="12" sm="12">
            <div class="like-share">
              <ul class="like-share-list justify-content-center">
                <li>
                  <b-link class="btn">
                    <b-icon icon="share-fill" aria-hidden="true"></b-icon>
                    Share
                  </b-link>
                  <div class="social-share-panel">
                    <b-link>
                      <b-icon icon="facebook" aria-hidden="true"></b-icon>
                    </b-link>
                    <b-link>
                      <b-icon icon="twitter" aria-hidden="true"></b-icon>
                    </b-link>
                    <b-link>
                      <b-icon icon="linkedin" aria-hidden="true"></b-icon>
                    </b-link>
                  </div>
                </li>
                <li>
                  <b-link class="btn add-to-wishlist">
                    <b-icon icon="heart-fill" aria-hidden="true"></b-icon>
                    Share
                  </b-link>
                </li>
              </ul>
            </div>

            <b-button v-if="$auth.loggedIn && $auth.user.type == 3" @click="apply"
              class="btn btn-black btn-md rounded btn-block">
              Apply for deed
            </b-button>


            <nuxt-link v-else class="btn btn-black btn-md rounded btn-block" :to="{ name: 'login' }">
              <b-button class="btn btn-black btn-md rounded btn-block">
                Sign in as a tenant for apply
              </b-button>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Start newsletter -->
    <Newsletter />
    <!-- End newsletter -->
  </div>
</template>

<script>
import Slick from 'vue-slick';
import Newsletter from "@/components/frontend/Newsletter";
import PropertyReview from '@/components/frontend/PropertyReview';
import PropertyReviewShow from '@/components/frontend/PropertyReviewShow.vue';

export default {
  name: "show",
  auth: false,
  components: { Newsletter, Slick, PropertyReview, PropertyReviewShow },
  data() {
    return {
      name: this.$auth.user.name,
      propertyId: this.$route.params.id,
      propertyAd: '',
      property: '',
      media: '',
      utilities: '',
      facilities: '',
      property_type: '',
      reviews: [],
      slickOptions: {
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        centerMode: true,
        infinite: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },
        ]
      },
      value: 75,
      slide6: 0,
    };
  },
  async created() {
    this.propertyAd = await this.propertiesAds();
    this.property = this.propertyAd.property;
    this.media = this.propertyAd.property.media;
    this.utilities = JSON.parse(this.property.utilities);
    this.facilities = JSON.parse(this.property.facilities);

    this.reviews = await this.fetchReviews();
  },
  computed: {
    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}`
    }
  },
  methods: {
    apply() {
      this.$swal.fire({
        title: 'Are you confirm to apply for this property',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const data = {
            property_ad_id: this.$route.params.id,
            property_id: this.property.id,
            tenant_id: this.$auth.user.tenant_id,
            landlord_id: this.property.landlord_id,
          }
          this.$axios.$post('property/deed/save-data', data)
            .then(response => {
              this.$swal.fire('Success', 'property did data deed applied successfully !! wait for admin confirmation');
            })
            .catch(error => {
              alert(error)
            })
        }
      })
    },
    async propertiesAds() {
      const propertiesAds = await this.$axios.$post('property/ad/get-details', { propertyAdId: this.propertyId });
      return propertiesAds.data;
    },
    async fetchReviews() {
      const response = await this.$axios.$post('review/get-reviews', { propertyId: this.propertyId });
      return response.data;
    },
    async addReview(reviews) {
      const response = await this.$axios.$post('review/store', reviews);

      this.$izitoast.success({
        title: 'Success !!',
        message: 'Your review successfully submitted!'
      });

      this.reviews = [...this.reviews, response.data.review];

      console.log(this.reviews);
    }
  }
}
</script>

<style scoped lang="scss">
  body {
    background: #0d6efd;
  }
</style>
