<template>
  <div>
    <div class="page-search">
      <div>
        <div class="form-group">
          <h5>Property Ad Details</h5>
        </div>
      </div>
    </div>

    <div>
      <div>
        <table class="table table-bordered table-hover">
          <tbody>
            <tr>
              <td>Property Name</td>
              <td>{{ property.name }}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{{ (property.property_category == 1) ? 'Commercial' : 'Residential' }}</td>
            </tr>
            <tr>
              <td>Sale Type</td>
              <td>{{ (property.sale_type == 1) ? 'For Rent' : 'For Sale' }}</td>
            </tr>
            <tr>
              <td>Ad start date</td>
              <td>{{ propertiesAd.start_date }}</td>
            </tr>
            <tr>
              <td>Ad End date</td>
              <td>{{ propertiesAd.start_date }}</td>
            </tr>
            <tr>
              <td>Rent/Sale Amount</td>
              <td>{{ propertiesAd.rent_amount }}</td>
            </tr>
            <tr>
              <td>Rent/Sale Security money</td>
              <td>{{ propertiesAd.security_money }}</td>
            </tr>
            <tr>
              <td>Descriptions</td>
              <td> {{ propertiesAd.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: "show",
  data() {
    return {
      propertiesAd: '',
      property: '',
      errors: {},
    }
  },

  async created() {
    const propertyAdData = await this.$axios.$post('property/ad/get-details', {
      propertyAdId: this.$route.params.id
    });
    this.propertiesAd = propertyAdData.data;
    this.property = propertyAdData.data.property;
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
