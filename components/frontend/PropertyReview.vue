<template>
  <div>
    <div class="accordion mt-5" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-7 variant="info">
            Write A Review {{ isAuth }} -- {{ review_type_id }}
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-7" visible accordion="my-accordion-7" role="tabpanel">
          <b-card-body>
            <p v-if="!isAuth" class="text-danger">
              Please <a href="#" class="text-danger"> login</a> to write review!
            </p>

            <div class="block-body p-0">
              <b-form>
                <b-row class="py-3">
                  <b-col md="8">
                    <b-row>
                      <b-col lg="6" md="6" sm="12">
                        <label class="select-star">Ratings</label>
                        <b-form-rating v-if="!isAuth" v-model="form.rating" color="#ff9800" readonly></b-form-rating>
                        <b-form-rating v-else v-model="form.rating" color="#ff9800"></b-form-rating>
                      </b-col>
                    </b-row>
                  </b-col>

                  <!-- <b-col lg="4" md="4" sm="12">
                    <div class="total-rating">
                      <h4>4.75</h4>
                      <span>Average Rating</span>
                    </div>
                  </b-col> -->
                </b-row>

                <b-row>
                  <b-col lg="12" md="12" sm="12">
                    <div class="form-group">
                      <textarea v-if="!isAuth" name="comment" placeholder="Message" class="form-control ht-80" disabled></textarea>
                      <textarea v-else name="comment" placeholder="Message" class="form-control ht-80"></textarea>
                    </div>
                  </b-col>

                  <b-col lg="12" md="12" sm="12">
                    <b-link v-if="!isAuth" class="btn btn-browse-more" disabled>Submit Review</b-link>
                    <b-link v-else class="btn btn-browse-more">Submit Review</b-link>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propertyId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isAuth: this.$auth.loggedIn,
      form: {
        review: '',
        reviewer_type: 3,
        review_type: 1,
        review_type_id: this.propertyId,
        reviewer_type_id: this.$auth.user.tenant_id,
        status: 1,
        rating: ''
      },
    }
  },
}
</script>

<style>

</style>
