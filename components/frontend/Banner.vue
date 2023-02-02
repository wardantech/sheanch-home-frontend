<template>
  <div>
    <div class="banner image-cover" :style="bannerImage">
      <b-container>
        <div class="banner-content">
          <h1 class="banner-title">Welcome to <br/>Sheanch Engineering Ltd.</h1>
          <p class="banner-text">We are committed to providing you with a safe home.</p>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      options: [
        { text: 'For Sale', value: '2' },
        { text: 'To Rent', value: '1' }
      ],
      form: {
        min_price: '',
        sale_type: '',
        max_price: '',
        property_category: '',
        property_type_id: '',
        division_id: '',
        district_id: '',
        thana_id: '',
      },
      thanas: '',
      divisions: '',
      districts: '',
      propertyTypes: '',
      bannerImage: ''
    }
  },
  computed: {
    imageUrl() {
      return `${process.env.APP_ROOT_IMG_URL}/`
    },
  },

  created() {
    const banner = this.$store.getters['frontend-data/getBanner'];
    this.bannerImage = "background: url(" + banner + ") no-repeat";

    this.fetch()
  },


  methods: {

    async fetch() {
    await this.$axios.get('get-frontend-banner-data').then(response => {
      this.propertyTypes = response.data.propertyTypes;
      this.divisions = response.data.divisions;
    });
  },

    async getDistricts(division_id) {
      this.thanas = '';
      await this.$axios.$post('settings/districts', { divisionId: division_id }).then(response => {
        this.districts = response.data;
      });

    },

    async getThanas(district_id) {
      await this.$axios.$post('settings/thanas', { districtId: district_id }).then(res => {
        this.thanas = res.data;
      });
    },

    searchStore() {
      this.$store.dispatch('search/storeSearch', this.form)
      this.$router.push({ name: 'property-ad-search' });
    }
  }
}
</script>

<style scoped>

</style>
