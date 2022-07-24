<template>
  <div>

    <div  class="gallery">
      <slick
        ref="slick"
        :options="slickOptions">
<!--        <a v-for="(image, i) in propertyImage" :key="i" :href="imageUrl+image">-->
<!--          <img :src="imageUrl+image" alt="">-->
<!--        </a>-->

        <a href="https://resido.thesky9.com/storage/properties/p-6-autox610.jpg">
          <img src="https://resido.thesky9.com/storage/properties/p-6-autox610.jpg" alt="">
        </a>
        <a href="https://resido.thesky9.com/storage/properties/p-15-autox610.jpg">
          <img src="https://resido.thesky9.com/storage/properties/p-15-autox610.jpg" alt="">
        </a>
        <a href="https://resido.thesky9.com/storage/properties/p-13-autox610.jpg">
          <img src="https://resido.thesky9.com/storage/properties/p-13-autox610.jpg" alt="">
        </a>
        <a href="https://resido.thesky9.com/storage/properties/p-19-autox610.jpg">
          <img src="https://resido.thesky9.com/storage/properties/p-19-autox610.jpg" alt="">
        </a>
        <a href="https://resido.thesky9.com/storage/properties/p-14-autox610.jpg">
          <img src="https://resido.thesky9.com/storage/properties/p-14-autox610.jpg" alt="">
        </a>

      </slick>
    </div>
    <section class="property-detail bg-gary">
      <b-container>
        <b-row>
          <b-col lg="8" md="12" sm="12">
            <div class="property-detail-wrap p-4">
              <div class="property-detail-wrap-title">
                 <span class="pr-type" v-if="property.sale_type == 1">
                        For Rent
                      </span>
                <span class="pr-type" v-if="property.sale_type == 2">
                         For Sale
                      </span>

                <h3>{{ property.name }}</h3>
                <span>
                                    <font-awesome-icon icon="fa-solid fa-location-dot"/>
                                    {{ property.address }}
                                </span>
                <h3 class="fix-price">${{ property.rent_amount }}</h3>
                <div class="features-list">
                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-bed"/>
                    </div>
                    {{ property.bed_rooms }}
                  </div>

                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-bath"/>
                    </div>
                    {{ property.bath_rooms }}
                  </div>

                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"/>
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
                          <strong>Square: </strong>
                          {{ property.area_size }}
                        </li>
                        <li>
                          <strong>Floors: </strong>
                          3
                        </li>
                        <li>
                          <strong>Property Type: </strong>
                          {{ this.property_type }}
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
                    <div class="block-body p-0">
                      <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        allowfullscreen
                      ></b-embed>
                      <div class="mt-3">
                        <p>
                          {{
                            property.description
                          }}
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
                  <b-button block v-b-toggle.accordion-3 variant="info">
                    Amenities
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" visible accordion="my-accordion-3" role="tabpanel">
                  <b-card-body>
                    <div class="block-body">
                      <ul class="detail_features">
                        <li v-for="(utility, j) in property.utilities_paid_by_landlord" :key="j">
                          <font-awesome-icon icon="fa-solid fa-circle-check"/>
                          <span class="ml-2">{{ utility.name }}</span>
                        </li>
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
                    Location
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-4" visible accordion="my-accordion-4" role="tabpanel">
                  <b-card-body>
                    <div class="block-body p-0">
                      <p>{{ property.address }}</p>
                      <div class="map-container">
                        <b-row class="justify-content-center">
                          <b-col md="12">
                            <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.35052480518!2d90.39648971445824!3d23.877185989839113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4214e79e92d%3A0xdba8af15e0f784d7!2sWardan%20Tech%20Limited!5e0!3m2!1sen!2sbd!4v1655119620049!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
                          </b-col>
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
                                <font-awesome-icon icon="fa-solid fa-hotel"/>
                                Hospital
                              </h4>
                            </div>
                          </div>
                          <div class="nearby-section-list">
                            <div class="nearby-section-list-ft">
                              <h4>
                                <font-awesome-icon icon="fa-solid fa-bus"/>
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

            <div class="rating">
              <div class="rating-box">
                <span class="rating-box-total">1.75</span>
                <span class="rating-box-percent">out of 5.0</span>
                <div class="rating-star">
                  <b-icon icon="star-fill"></b-icon>
                  <b-icon icon="star-fill"></b-icon>
                  <b-icon icon="star"></b-icon>
                  <b-icon icon="star"></b-icon>
                  <b-icon icon="star"></b-icon>
                </div>
              </div>

              <div class="rating-bars">
                <div class="rating-bars-item">
                  <span class="rating-bars-item-name">Service</span>
                  <span class="rating-bars-item-inner">
                                        <b-progress :value="value" class="mb-3"></b-progress>
                                    </span>
                </div>
                <div class="rating-bars-item">
                  <span class="rating-bars-item-name">Value for Money</span>
                  <span class="rating-bars-item-inner">
                                        <b-progress :value="value" class="mb-3"></b-progress>
                                    </span>
                </div>
                <div class="rating-bars-item">
                  <span class="rating-bars-item-name">Location</span>
                  <span class="rating-bars-item-inner">
                                        <b-progress :value="value" class="mb-3"></b-progress>
                                    </span>
                </div>
                <div class="rating-bars-item">
                  <span class="rating-bars-item-name">Cleanliness</span>
                  <span class="rating-bars-item-inner">
                                        <b-progress :value="value" class="mb-3"></b-progress>
                                    </span>
                </div>
              </div>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-6 variant="info">
                    6 Reviews
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-6" visible accordion="my-accordion-6" role="tabpanel">
                  <b-card-body>
                    <div class="block-body p-0">
                      <div class="reviews">
                        <div class="reviews-list">
                          <ul>
                            <li class="comments">
                              <article>
                                <div class="comments-thumb">
                                  <b-img src="https://resido.thesky9.com/storage/accounts/4-150x150.jpg"
                                         alt="Image"></b-img>
                                </div>
                                <div class="comments-details">
                                  <div class="comments-rating">
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                  </div>
                                  <div class="comment-meta">
                                    <h4 class="author-name">Walker Bergstrom</h4>
                                    <div class="comment-date">
                                      15 Feb, 2022
                                    </div>
                                  </div>
                                  <div class="comment-text">
                                    <p>Ut provident qui aut. Sit nam esse officiis quis assumenda iusto molestiae.</p>
                                  </div>
                                </div>
                              </article>
                            </li>

                            <li class="comments">
                              <article>
                                <div class="comments-thumb">
                                  <b-img src="https://resido.thesky9.com/storage/accounts/5-150x150.jpg"
                                         alt="Image"></b-img>
                                </div>
                                <div class="comments-details">
                                  <div class="comments-rating">
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                  </div>
                                  <div class="comment-meta">
                                    <h4 class="author-name">Cara Anderson</h4>
                                    <div class="comment-date">
                                      15 FEB, 2022
                                    </div>
                                  </div>
                                  <div class="comment-text">
                                    <p>Et qui ut iusto est nulla. Aspernatur laboriosam quis exercitationem. Architecto
                                      quis sint illo porro non ea.</p>
                                  </div>
                                </div>
                              </article>
                            </li>

                            <li class="comments">
                              <article>
                                <div class="comments-thumb">
                                  <b-img src="https://resido.thesky9.com/storage/accounts/3-150x150.jpg"
                                         alt="Image"></b-img>
                                </div>
                                <div class="comments-details">
                                  <div class="comments-rating">
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star-fill"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                    <b-icon icon="star"></b-icon>
                                  </div>
                                  <div class="comment-meta">
                                    <h4 class="author-name">Sage Feest</h4>
                                    <div class="comment-date">
                                      15 FEB, 2022
                                    </div>
                                  </div>
                                  <div class="comment-text">
                                    <p>Non sequi dignissimos recusandae dolorum dolore aut qui est. Ea quaerat non quia
                                      qui nemo. Laborum hic et et fuga ut.</p>
                                  </div>
                                </div>
                              </article>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div class="accordion mt-5" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-7 variant="info">
                    Write A Review
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-7" visible accordion="my-accordion-7" role="tabpanel">
                  <b-card-body>
                    <p class="text-danger">Please <a href="#" class="text-danger">login</a> to write review!</p>
                    <div class="block-body p-0">
                      <b-form>
                        <b-row class="py-3">
                          <b-col md="8">
                            <b-row>
                              <b-col lg="6" md="6" sm="12">
                                <label class="select-star">service</label>
                                <div class="review-star">
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                </div>
                              </b-col>
                              <b-col lg="6" md="6" sm="12">
                                <label class="select-star">value</label>
                                <div class="review-star">
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                </div>
                              </b-col>
                              <b-col lg="6" md="6" sm="12">
                                <label class="select-star">Location</label>
                                <div class="review-star">
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                </div>
                              </b-col>
                              <b-col lg="6" md="6" sm="12">
                                <label class="select-star">cleanliness</label>
                                <div class="review-star">
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star-fill"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                  <b-icon icon="star"></b-icon>
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>

                          <b-col lg="4" md="4" sm="12">
                            <div class="total-rating">
                              <h4>4.75</h4>
                              <span>Average Rating</span>
                            </div>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col lg="12" md="12" sm="12">
                            <div class="form-group">
                              <textarea name="comment" placeholder="Message" class="form-control ht-80"
                                        disabled></textarea>
                            </div>
                          </b-col>

                          <b-col lg="12" md="12" sm="12">
                            <b-link class="btn btn-browse-more" disabled>Submit Review</b-link>
                          </b-col>
                        </b-row>
                      </b-form>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
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

            <div class="sidebar-message">
              <div class="sidebar-message-widget">
                <div class="widget-header">
                  <div class="photo">
                    <b-img :src="imageUrl+landlord.image"></b-img>
                  </div>
                  <div class="widget-details">
                    <h4>
                      <b-link href="#">{{ landlord.name }}</b-link>
                    </h4>

                    <span>
                                              <b-icon icon="telephone" aria-hidden="true"></b-icon>
                                              {{ landlord.mobile }}
                                          </span>
                  </div>
                </div>
                <div class="clearfix"></div>




                  <b-button
                    v-if="$auth.loggedIn && $auth.user.type == 3"
                    @click="apply"  class="btn btn-black btn-md rounded btn-block mt-5">
                    For Apply
                  </b-button>


                <nuxt-link v-else
                  class="btn btn-black btn-md rounded btn-block mt-5"
                  :to="{ name: 'login'}">
                  <b-button  class="btn btn-black btn-md rounded btn-block mt-5">
                    Sign In  for Apply
                  </b-button>
                </nuxt-link>


                <!--                <div class="widget-body">-->
                <!--                  <b-form>-->
                <!--                    <div class="form-group">-->
                <!--                      <b-form-input name="name" type="text" placeholder="Name *"></b-form-input>-->
                <!--                    </div>-->

                <!--                    <div class="form-group">-->
                <!--                      <b-form-input name="phone" type="text" placeholder="Phone *"></b-form-input>-->
                <!--                    </div>-->

                <!--                    <div class="form-group">-->
                <!--                      <b-form-input name="email" type="email" placeholder="Email"></b-form-input>-->
                <!--                    </div>-->

                <!--                    <div class="form-group">-->
                <!--                      <b-form-input name="subject" type="text" placeholder="Subject *" value="6007 Applegate Lane"-->
                <!--                                    disabled></b-form-input>-->
                <!--                    </div>-->

                <!--                    <div class="form-group">-->
                <!--                      <b-form-textarea name="message" placeholder="Message"></b-form-textarea>-->
                <!--                    </div>-->

                <!--                    <div class="form-group">-->
                <!--                      <b-button class="btn btn-black btn-md rounded btn-block">Send Message</b-button>-->
                <!--                    </div>-->
                <!--                  </b-form>-->
                <!--                </div>-->
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section id="place" class="bg-gary">
      <b-container>
        <b-row class="row justify-content-center">
          <b-col lg="7" md="10" class="text-center">
            <div class="section-heading center">
              <h2>Recently Viewed Properties</h2>
            </div>
          </b-col>
        </b-row>

        <b-row class="place-layout">
          <b-col lg="4" md="6" sm="12">
            <div class="place-layout-listing">
              <div class="place-layout-listing-img">
                <div class="place-layout-listing-img-slide">
                  <b-carousel id="carousel-6" v-model="slide6" :interval="1500" controls>
                    <b-carousel-slide
                      img-src="https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg"></b-carousel-slide>
                    <b-carousel-slide
                      img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                    <b-carousel-slide
                      img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
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
                      <h6 class="card-price">$232,021</h6>
                    </div>
                  </div>
                </div>
                <div class="place-layout-listing-detail-name">
                  <b-link href="#" title="6007 Applegate Lane">
                    1745 T Street Southeast
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
                  <span class="reviews-text">( 3 Reviews)</span>
                </div>
              </div>
              <div class="place-layout-listing-features">
                <div class="features-list">
                  <div class="features-list-icon">
                    <div class="fleat-icon">
                      <font-awesome-icon icon="fa-solid fa-bed"/>
                    </div>
                    1 Bed
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
                    83 m²
                  </div>
                </div>
              </div>
              <div class="place-layout-listing-footer">
                <div class="footer-first">
                  <div class="footer-first-location d-flex">
                    <font-awesome-icon icon="fa-solid fa-location-dot"/>
                    Hampton, Virginia
                  </div>
                </div>
                <div class="footer-flex">
                  <b-link href="#" class="product-view">
                    View
                  </b-link>
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
import Slick from 'vue-slick';
import Newsletter from "@/components/frontend/Newsletter";


export default {
  name: "show",
  auth: false,
  components: {Newsletter, Slick},
  data() {
    return {
      property: [],
      property_type: '',
      propertyImage:[],
      landlord: '',
      slickOptions: {
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        centerMode: true
      },
      value: 75,
      slide6: 0,
    };
  },
  computed: {
    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}`
    }
  },
  async created() {
    await this.$axios.$get('property/show/' + this.$route.params.id)
      .then(response => {
        this.property = response.data;
        this.property_type = response.data.property_type.name;
        this.landlord = response.data.landlord;
        if(this.property.image != null){
          this.propertyImage = this.property.image.split(',');
        }

        console.log(this.property);
      })
  },
  methods:{
     apply(){
      this.$swal.fire({
        title: 'Are you confirm to apply for this property',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isConfirmed) {
          this.$axios.$post('lease/store/',
            {
              property_id: this.$route.params.id,
              tenant_id: this.$auth.user.tenant_id,
              landlord_id: this.landlord.id,
            }
          )
            .then(response => {
              this.$swal.fire('Success !', '', 'wait for admin confirmation')
            })
            .catch(error => {
              alert(error)
            })
        }
      })
    }
  }
</script>

<style scoped>

</style>
