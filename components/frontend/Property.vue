<template>
    <div>
        <section id="place">
            <b-container>
                <b-row class="row justify-content-center">
                    <b-col lg="7" md="10" class="text-center">
                        <div class="section-heading center">
                            <h2>Explore Good Places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </b-col>
                </b-row>

                <b-row class="place-layout">
                    <b-col lg="4" md="6" sm="12">
                        <div class="place-layout-listing">
                            <div class="place-layout-listing-img">
                                <div class="place-layout-listing-img-slide">
                                    <b-carousel id="carousel-1" v-model="slide" :interval="1500" controls>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                                <div class="place-layout-listing-img-action">
                                    <b-link href="#" class="add-to-wishlist">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
                                    </b-link>
                                </div>
                            </div>
                            <div class="place-layout-listing-detail">
                                <div class="place-layout-listing-detail-wrap">
                                    <div class="place-layout-listing-detail-wrap-short">
                                        <div class="list-price d-flex justify-content-between">
                                            <span class="sale-type sale">For Sale</span>
                                            <h6 class="card-price">$236,117</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="place-layout-listing-detail-name">
                                    <b-link to="properties" title="6007 Applegate Lane">
                                        6007 Applegate Lane
                                    </b-link>
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
                                    <span class="reviews-text">( 6 Reviews)</span>
                                </div>
                            </div>
                            <div class="place-layout-listing-features">
                                <div class="features-list">
                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </div>
                                        1 Bed
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </div>
                                        5 Bath
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                                        </div>
                                        83 m²
                                    </div>
                                </div>
                            </div>
                            <div class="place-layout-listing-footer">
                                <div class="footer-first">
                                    <div class="footer-first-location d-flex">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                                        Hampton, Virginia
                                    </div>
                                </div>
                                <div class="footer-flex">
                                  <nuxt-link
                                    class="product-view"
                                    :to="{ name: 'properties-property-details',
                                    params: { userId: 123 }}">
                                    View
                                  </nuxt-link>
                                    <!--<b-link href="#" class="product-view">-->
                                        <!--View-->
                                    <!--</b-link>-->
                                </div>
                            </div>
                        </div>
                    </b-col>

                    <b-col lg="4" md="6" sm="12">
                        <div class="place-layout-listing">
                            <div class="place-layout-listing-img">
                                <div class="place-layout-listing-img-slide">
                                    <b-carousel id="carousel-2" v-model="slide1" :interval="1800" controls>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                                <div class="place-layout-listing-img-action">
                                    <b-link href="#" class="add-to-wishlist">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
                                    </b-link>
                                </div>
                            </div>
                            <div class="place-layout-listing-detail">
                                <div class="place-layout-listing-detail-wrap">
                                    <div class="place-layout-listing-detail-wrap-short">
                                        <div class="list-price d-flex justify-content-between">
                                            <span class="sale-type sale">For Sale</span>
                                            <h6 class="card-price">$256,828 / Month</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="place-layout-listing-detail-name">
                                    <b-link href="#" title="6007 Applegate Lane">
                                        8502 Madrone Avenue
                                    </b-link>
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
                                    <span class="reviews-text">( 3 Reviews)</span>
                                </div>
                            </div>
                            <div class="place-layout-listing-features">
                                <div class="features-list">
                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </div>
                                        1 Bed
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </div>
                                        5 Bath
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                                        </div>
                                        83 m²
                                    </div>
                                </div>
                            </div>
                            <div class="place-layout-listing-footer">
                                <div class="footer-first">
                                    <div class="footer-first-location d-flex">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
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

                    <b-col lg="4" md="6" sm="12">
                        <div class="place-layout-listing">
                            <div class="place-layout-listing-img">
                                <div class="place-layout-listing-img-slide">
                                    <b-carousel id="carousel-3" v-model="slide2" :interval="1500" controls>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                                <div class="place-layout-listing-img-action">
                                    <b-link href="#" class="add-to-wishlist">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
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
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" />
                                        </div>
                                    </div>
                                    <span class="reviews-text">( 3 Reviews)</span>
                                </div>
                            </div>
                            <div class="place-layout-listing-features">
                                <div class="features-list">
                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </div>
                                      1 Bed
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </div>
                                        5 Bath
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                                        </div>
                                        83 m²
                                    </div>
                                </div>
                            </div>
                            <div class="place-layout-listing-footer">
                                <div class="footer-first">
                                    <div class="footer-first-location d-flex">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
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

                    <b-col lg="4" md="6" sm="12">
                        <div class="place-layout-listing">
                            <div class="place-layout-listing-img">
                                <div class="place-layout-listing-img-slide">
                                    <b-carousel id="carousel-4" v-model="slide3" :interval="1800" controls>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                                <div class="place-layout-listing-img-action">
                                    <b-link href="#" class="add-to-wishlist">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
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
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" />
                                        </div>
                                    </div>
                                    <span class="reviews-text">( 3 Reviews)</span>
                                </div>
                            </div>
                            <div class="place-layout-listing-features">
                                <div class="features-list">
                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </div>
                                        1 Bed
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </div>
                                        5 Bath
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                                        </div>
                                        83 m²
                                    </div>
                                </div>
                            </div>
                            <div class="place-layout-listing-footer">
                                <div class="footer-first">
                                    <div class="footer-first-location d-flex">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
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

                    <b-col lg="4" md="6" sm="12">
                        <div class="place-layout-listing">
                            <div class="place-layout-listing-img">
                                <div class="place-layout-listing-img-slide">
                                    <b-carousel id="carousel-5" v-model="slide4" :interval="1500" controls>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                                <div class="place-layout-listing-img-action">
                                    <b-link href="#" class="add-to-wishlist">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
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
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" />
                                        </div>
                                    </div>
                                    <span class="reviews-text">( 3 Reviews)</span>
                                </div>
                            </div>
                            <div class="place-layout-listing-features">
                                <div class="features-list">
                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </div>
                                        1 Bed
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </div>
                                        5 Bath
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                                        </div>
                                        83 m²
                                    </div>
                                </div>
                            </div>
                            <div class="place-layout-listing-footer">
                                <div class="footer-first">
                                    <div class="footer-first-location d-flex">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
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

                    <b-col lg="4" md="6" sm="12">
                        <div class="place-layout-listing">
                            <div class="place-layout-listing-img">
                                <div class="place-layout-listing-img-slide">
                                    <b-carousel id="carousel-6" v-model="slide5" :interval="1800" controls>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-3-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-16-400xauto.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="https://resido.thesky9.com/storage/properties/p-6-400xauto.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                                <div class="place-layout-listing-img-action">
                                    <b-link href="#" class="add-to-wishlist">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
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
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star" />
                                            <font-awesome-icon icon="fa-solid fa-star-half" />
                                        </div>
                                    </div>
                                    <span class="reviews-text">( 3 Reviews)</span>
                                </div>
                            </div>
                            <div class="place-layout-listing-features">
                                <div class="features-list">
                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bed" />
                                        </div>
                                      1 Bed
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-bath" />
                                        </div>
                                        5 Bath
                                    </div>

                                    <div class="features-list-icon">
                                        <div class="fleat-icon">
                                            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
                                        </div>
                                        83 m²
                                    </div>
                                </div>
                            </div>
                            <div class="place-layout-listing-footer">
                                <div class="footer-first">
                                    <div class="footer-first-location d-flex">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
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
                slide1: 0,
                slide2: 0,
                slide3: 0,
                slide4: 0,
                slide5: 0,
                sliding: null
            }
        }
    }
</script>

<style scoped>

</style>
