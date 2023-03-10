<template>
  <div>
    <!-- Search -->
    <Search />
    <!-- /. Search -->

    <b-container>
      <h1>Properties for Rent in Dhaka</h1>

      <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Search from "../components/frontend/Search";
export default {
  name: 'properties-all',
  auth: false,
  components: { Search }
}
</script>

<style></style>
